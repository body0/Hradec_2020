from app import app, db_session
from flask import request, jsonify
from app.models import Population, Cases
from datetime import date, datetime, timedelta
from app.prediction import calculate_R, pessimistic_prediction,\
     optimistic_prediction, days_to_predict
from app.conv import pos_to_city


print('b')


