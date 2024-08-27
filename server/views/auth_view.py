from models import db, User, TokenBlocklist
from flask import request, jsonify, Blueprint
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt

auth_bp = Blueprint('auth_bp', __name__)


# routes
# add user

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Basic validation
    if not username or not email or not password:
        return jsonify({"error": "Missing username, email, or password"}), 400

    # Check if user already exists
    user_exists = User.query.filter((User.username == username) | (User.email == email)).first()
    if user_exists:
        return jsonify({"error": "User with given username or email already exists"}), 409

    # Create new user instance
    new_user = User(username=username, email=email)
    new_user.set_password(password)  # Hash password

    # Add new user to database
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"success": "User registered successfully"}), 201


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user:
        print("User found:", user.username)  # Debugging
        hashed_pass = user.password  # Assuming this is the hashed password
        print("Hashed Password:", hashed_pass)  # Debugging
        password_check = check_password_hash(hashed_pass, password)
        print("Password check:", password_check)  # Debugging

        if password_check:
            access_token = create_access_token(identity=user.id)
            return jsonify(access_token=access_token)
        else:
            return jsonify({"error": "Wrong Password!"}), 401
    else:
        return jsonify({"error": "User doesn't exist!"}), 404

# Get logged in user
@auth_bp.route("/authenticated_user", methods=["GET"])
@jwt_required()
def authenticated_user():
    current_user_id = get_jwt_identity() #geeting current user id
    user = User.query.get(current_user_id)

    if user:
        user_data = {
            'id': user.id,
            'username':user.username,
            'email': user.email,
            'role': user.role
        }
        return jsonify(user_data), 200
    else:
        return jsonify({"error": "User not found"}), 404


# Logout user
@auth_bp.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    jwt = get_jwt()

    jti = jwt['jti']

    token_b = TokenBlocklist(jti=jti)
    db.session.add(token_b)
    db.session.commit()

    return jsonify({"success": "Logged out successfully!"}), 200