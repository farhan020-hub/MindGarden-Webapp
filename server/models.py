from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), default='Registered')  # Possible values: 'Registered', 'Admin'
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_login = db.Column(db.DateTime, onupdate=datetime.utcnow)


    def set_password(self, password):
        self.password = generate_password_hash(password)

    # Relationships
    articles = db.relationship('Article', backref='author', lazy=True)
    threads = db.relationship('ForumThread', backref='user', lazy=True)
    replies = db.relationship('ForumReply', backref='user', lazy=True)
    assessments = db.relationship('SelfAssessment', backref='user', lazy=True)    


#   For Logout JWT Block List
class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti =  db.Column(db.String(100),nullable=True)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)


class Article(db.Model):
    __tablename__ = 'article'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    imageURL = db.Column(db.String(255), nullable=True)
    content = db.Column(db.Text, nullable=False)
    published_date = db.Column(db.DateTime, default=datetime.utcnow)
    last_updated = db.Column(db.DateTime, onupdate=datetime.utcnow)
    status = db.Column(db.String(50), default='Draft')  # Possible values: 'Published', 'Draft', 'Archived'
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

class Resource(db.Model):
    __tablename__ = 'resource'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    imageURL = db.Column(db.String(255), nullable=True)
    description = db.Column(db.Text, nullable=False)
    contact_info = db.Column(db.String(255), nullable=False)
    availability = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255), nullable=False)

class ForumThread(db.Model):
    __tablename__ = 'forum_thread'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    # Relationship
    replies = db.relationship('ForumReply', backref='thread', lazy=True)

class ForumReply(db.Model):
    __tablename__ = 'forum_reply'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    thread_id = db.Column(db.Integer, db.ForeignKey('forum_thread.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


class AssessmentQuestion(db.Model):
    __tablename__ = 'assessment_question'
    id = db.Column(db.Integer, primary_key=True)
    question_text = db.Column(db.String(255), nullable=False)

class AssessmentAnswer(db.Model):
    __tablename__ = 'assessment_answer'
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('assessment_question.id'), nullable=False)
    assessment_id = db.Column(db.Integer, db.ForeignKey('self_assessment.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)  # rating from 1 to 5

   

class SelfAssessment(db.Model):
    __tablename__ = 'self_assessment'
    id = db.Column(db.Integer, primary_key=True)
    average_rating = db.Column(db.Float, nullable=False)  # Store the average rating
    mood = db.Column(db.String(255), nullable=False)  # Store the mood
    taken_on = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    answers = db.relationship('AssessmentAnswer', backref='assessment', lazy=True)
    

