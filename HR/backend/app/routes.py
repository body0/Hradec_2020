from app import app, db
from flask import request, jsonify
from app.models import User


@app.route('/', methods=["GET"])
@app.route('/query', methods=["GET"])
def query_records():
    user_id = request.json.get('id')
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'data not found'})
    return jsonify(user.serialize())


@app.route('/add', methods=["POST"])
def add_record():
    username = request.json.get('username')
    email = request.json.get('email')
    print(username, email)
    try:
        user = User(username=username, email=email)
        db.session.add(user)
        db.session.commit()
        return jsonify(user.serialize())
    except Exception as e:
        return str(e)
