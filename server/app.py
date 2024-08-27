# app.py 
import os

from datetime import timedelta, datetime
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_migrate import Migrate
from views.user_view import user_bp
from views.auth_view import auth_bp
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token, get_jwt
from models import User, TokenBlocklist, Article, Resource, ForumThread, ForumReply, SelfAssessment, db , AssessmentQuestion, AssessmentAnswer


# Initialize Flask application
app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://mindgarden_lsrl_user:6KSjwpuLZ6IXJayg4lK0EBVxAHs2QmB8@dpg-cng873ug1b2c73dim1t0-a.oregon-postgres.render.com/mindgarden_lsrl'  # Or use another database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)

# Initialize SQLAlchemy and Migrate with app
db.init_app(app)
migrate = Migrate(app, db)


jwt = JWTManager()
app.config["JWT_SECRET_KEY"] = "fjhjdjhfiskyfvdgvydklvsrfl"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=3)
jwt.init_app(app)

app.register_blueprint(user_bp)
app.register_blueprint(auth_bp)

# Routes for the application

@app.route('/')
def home():
    return "Welcome to mindGarden!"

# articles route
@app.route('/articles', methods=['GET'])
@jwt_required()
def get_articles():
    articles = Article.query.all()
    articles_data = [{
        'id': article.id,
        'title': article.title,
        'imageURL': article.imageURL,
        'content': article.content,
        'author_id': article.author_id,
        'published_date': article.published_date,
        'status': article.status
    } for article in articles]
    return jsonify(articles_data)

# resources route
@app.route('/resources', methods=['GET', 'POST'])
@jwt_required()
def manage_resources():
    if request.method == 'GET':
        resources = Resource.query.all()
        return jsonify([{'id': r.id, 'name': r.name, 'imageURL': r.imageURL, 'description': r.description, 'contact_info': r.contact_info, 'availability': r.availability, 'location': r.location} for r in resources])

    elif request.method == 'POST':
        data = request.get_json()

        # Validate input data
        required_fields = ['name', 'description', 'contact_info', 'availability', 'imageURL', 'location']
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return jsonify({'message': f'Missing fields: {", ".join(missing_fields)}'}), 400

        new_resource = Resource(
            name=data['name'],
            description=data['description'],
            contact_info=data['contact_info'],
            availability=data['availability'],
            imageURL=data.get('imageURL'),
            location=data.get('location')
        )
        db.session.add(new_resource)
        db.session.commit()
        return jsonify({'message': 'Resource added successfully'}), 201


# forum threads route
@app.route('/forum_threads', methods=['GET', 'POST'])
@jwt_required()
def manage_forum_threads():
    if request.method == 'GET':
        threads = ForumThread.query.all()
        return jsonify([{'id': t.id, 'title': t.title, 'content': t.content, 'created_at': t.created_at, 'user_id': t.user_id} for t in threads])

    if request.method == 'POST':
        data = request.get_json()
        new_thread = ForumThread(title=data['title'], content=data['content'], user_id=data['user_id'])
        db.session.add(new_thread)
        db.session.commit()
        return jsonify({'message': 'Thread created successfully'}), 201


# forum replies route
@app.route('/forum_replies', methods=['GET', 'POST'])
@jwt_required()
def forum_replies():
    if request.method == 'GET':
        thread_id = request.args.get('thread_id')
        user_id = request.args.get('user_id')

        query = ForumReply.query
        if thread_id:
            query = query.filter_by(thread_id=thread_id)
        if user_id:
            query = query.filter_by(user_id=user_id)

        replies = query.all()
        return jsonify([{'id': r.id, 'content': r.content, 'thread_id': r.thread_id, 'user_id': r.user_id} for r in replies])

    elif request.method == 'POST':
        data = request.get_json()
        new_reply = ForumReply(content=data['content'], thread_id=data['thread_id'], user_id=data['user_id'])
        db.session.add(new_reply)
        db.session.commit()
        return jsonify({'message': 'Reply added successfully'}), 201


# self-assessments route
@app.route('/assessment_questions', methods=['GET'])
def get_assessment_questions():
    questions = AssessmentQuestion.query.all()
    return jsonify([{'id': q.id, 'question_text': q.question_text} for q in questions])


@app.route('/self_assessments', methods=['POST'])
@jwt_required()
def submit_self_assessment():
    data = request.get_json()
    user_id = data['user_id']
    answers = data['answers']

    new_assessment = SelfAssessment(user_id=user_id, average_rating=0, mood="")  # Set initial values
    db.session.add(new_assessment)
    db.session.commit()  # Commit to get an ID for new_assessment

    total_score = 0
    for answer in answers:
        question_id = answer['question_id']
        rating = answer['rating']
        total_score += rating

        assessment_answer = AssessmentAnswer(
            question_id=question_id, 
            assessment_id=new_assessment.id,  # Now new_assessment has an ID
            rating=rating
        )
        db.session.add(assessment_answer)

    average_score = total_score / len(answers) if answers else 0

    if average_score <= 2:
        mood = 'Normal'
    elif average_score <= 3:
        mood = 'Unhappy'
    elif average_score <= 4:
        mood = 'Depressed'
    else:
        mood = 'Anxiety'

    # Update average_rating and mood
    new_assessment.average_rating = average_score
    new_assessment.mood = mood

    db.session.commit()
    return jsonify({'message': 'Self-assessment submitted successfully', 'average_rating': average_score, 'mood': mood}), 201



def is_admin(identity):
    claims = get_jwt()
    return claims.get("is_admin", False)

# logout route
@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()['jti']
    now = datetime.now()
    db.session.add(TokenBlocklist(jti=jti, created_at=now))
    db.session.commit()
    return jsonify({"message": "Successfully logged out"}), 200

# JWT token in blocklist callback
@jwt.token_in_blocklist_loader
def token_in_blocklist_callback(jwt_header, jwt_data):
    jti = jwt_data['jti']
    token = TokenBlocklist.query.filter_by(jti=jti).first()
    return token is not None
# Admin dashboard route
@app.route('/admin/dashboard', methods=['GET'])
@jwt_required()
def admin_dashboard():
    # Verify the current user's role is 'Admin'
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role != 'Admin':
        return jsonify({'message': 'Access denied: Requires admin privileges'}), 403

    # Fetch data for the dashboard
    user_data = get_admin_dashboard_data()

    articles_info = get_articles_info()
    resources_info = get_resources_info()

    # Count total articles, therapists, crisis centers, and assessments taken
    total_users = User.query.count()
    total_articles = User.query.count()
    total_therapists = Resource.query.filter_by(description='Therapist').count()
    total_crisis_centers = Resource.query.filter_by(description='Crisis Center').count()
    total_support_groups = Resource.query.filter_by(description='Support Group').count()
    total_assessments_taken = SelfAssessment.query.count()

    return jsonify({
        'message': 'Dashboard data retrieved successfully',
        'users': user_data,
        'articles': articles_info,
        'resources': resources_info,
        'total_users': total_users,
        'total_articles': total_articles,
        'total_therapists': total_therapists,
        'total_crisis_centers': total_crisis_centers,
        'total_support_groups': total_support_groups,
        'total_assessments_taken': total_assessments_taken
    }), 200



def get_articles_info():
    # Fetch all articles
    articles = Article.query.all()
    return [{'id': article.id, 'title': article.title, 'status': article.status} for article in articles]

def get_resources_info():
    # Fetch all resources
    resources = Resource.query.all()
    return [{'id': resource.id, 'name': resource.name, 'description': resource.description,'contact_info': resource.contact_info,'availability': resource.availability, 'location': resource.location, 'imageURL': resource.imageURL} for resource in resources]

def get_admin_dashboard_data():
    try:
        users = db.session.query( # Use db.session.query to perform a LEFT JOIN and GROUP BY
            User.id,
            User.username, 
            User.email, 
            db.func.coalesce(db.func.avg(SelfAssessment.average_rating), 0).label('average_rating') 
        ).outerjoin(SelfAssessment).group_by(User.id).all() # Coalesce to handle NULL values in average_rating

        return [
            {
                'username': user.username, 
                'email': user.email, 
                'average_rating': round(float(user.average_rating), 2),
                'id': user.id
            }
            for user in users
        ] # Convert average_rating to float for JSON serialization
    except Exception as e:
        app.logger.error(f"Error retrieving admin dashboard data: {e}")
        return [] # Return an empty list if an error occurs

    
@app.route('/admin/logout_user/<int:user_id>', methods=['POST'])
@jwt_required()
def admin_logout_user(user_id):
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role != 'Admin':
        return jsonify({'message': 'Access denied: Requires admin privileges'}), 403

    # Invalidate all active tokens for the specified user
    # This is a simplified approach; you may need a more robust method depending on your application's structure
    active_tokens = TokenBlocklist.query.filter_by(user_id=user_id, is_revoked=False).all()
    for token in active_tokens:
        token.is_revoked = True
        db.session.add(token)
    db.session.commit()
    return jsonify({"message": f"User {user_id} has been logged out."}), 200


@app.route('/admin/articles/<int:article_id>', methods=['DELETE'])
@jwt_required()
def delete_article(article_id):
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role != 'Admin':
        return jsonify({'message': 'Access denied: Requires admin privileges'}), 403

    article = Article.query.get_or_404(article_id)
    db.session.delete(article)
    db.session.commit()
    return jsonify({"message": "Article deleted successfully."}), 200

@app.route('/admin/articles', methods=['POST'])
@jwt_required()
def create_article():
    # Check if the current user has admin privileges
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role != 'Admin':
        return jsonify({'message': 'Access denied: Requires admin privileges'}), 403

    # Get data from the request
    data = request.get_json()

    # Validate input data
    required_fields = ['title', 'content', 'author_id', 'imageURL']
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({'message': f'Missing fields: {", ".join(missing_fields)}'}), 400

    # Create a new article
    new_article = Article(
        title=data['title'],
        imageURL=data['imageURL'],
        content=data['content'],
        author_id=data['author_id'],
        status=data['status']
    )

    # Add the new article to the database
    db.session.add(new_article)
    db.session.commit()

    return jsonify({'message': 'Article added successfully', 'article_id': new_article.id}), 201


@app.route('/admin/articles/<int:article_id>', methods=['PUT'])
@jwt_required()
def update_article(article_id):
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role != 'Admin':
        return jsonify({'message': 'Access denied: Requires admin privileges'}), 403

    article = Article.query.get_or_404(article_id)
    data = request.get_json()
    article.title = data.get('title', article.title)
    article.content = data.get('content', article.content)
    article.imageURL = data.get('imageURL', article.imageURL)
    # Update other fields as necessary
    db.session.commit()
    return jsonify({"message": "Article updated successfully."}), 200

@app.route('/admin/resources/<int:resource_id>', methods=['DELETE'])
@jwt_required()
def delete_resource(resource_id):
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role != 'Admin':
        return jsonify({'message': 'Access denied: Requires admin privileges'}), 403

    resource = Resource.query.get_or_404(resource_id)
    db.session.delete(resource)
    db.session.commit()
    return jsonify({"message": "Resource deleted successfully."}), 200

@app.route('/admin/resources/<int:resource_id>', methods=['PUT'])
@jwt_required()
def update_resource(resource_id):
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role != 'Admin':
        return jsonify({'message': 'Access denied: Requires admin privileges'}), 403

    resource = Resource.query.get_or_404(resource_id)
    data = request.get_json()
    resource.name = data.get('name', resource.name)
    resource.description = data.get('description', resource.description)
    resource.type = data.get('type', resource.type)
    resource.contact_info = data.get('contact_info', resource.contact_info)
    resource.availability = data.get('availability', resource.availability)
    resource.imageURL = data.get('imageURL', resource.imageURL)
    resource.location = data.get('location', resource.location)
    db.session.commit()
    return jsonify({"message": "Resource updated successfully."}), 200

# Delete user route
@app.route('/admin/deleteuser/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    # Verify the current user's role is 'Admin'
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)

    if current_user.role != 'Admin':
        return jsonify({'message': 'Access denied: Requires admin privileges'}), 403

    # Check if the user to be deleted exists
    user_to_delete = User.query.get(user_id)
    if not user_to_delete:
        return jsonify({'message': 'User not found'}), 404

    # Delete the user
    db.session.delete(user_to_delete)
    db.session.commit()

    return jsonify({'message': 'User deleted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
