from app import app, db_session
from flask import request, jsonify
from app.models import Population, Cases
from datetime import date, datetime
from app.prediction import calculate_R, pessimistic_prediction,\
     optimistic_prediction, days_to_predict


@app.route('/api', methods=["POST"])
def query_records():
    json_data = request.json
    name = json_data['name']
    pop = db_session.query(Population).filter_by(nazev_obce=name)
    city = pop.first()
    today = datetime(2020, 10, 21)
    cases = db_session.query(Cases).filter_by(obec_kod=city.LAU_2)
    cases_now = cases.filter_by(datum=today).first()
    cases_prev = [c[0] for c in reversed(list(cases.order_by(Cases.datum.desc()).
                                           limit(7).
                                           values('aktualne_nemocnych')))]
    print(cases_prev)
    return jsonify({
        "name": city.nazev_obce,
        "population": city.obyv_celkem,
        "caseCurrent": {
                "date": today,
                "valueAbsolute": cases_now.aktualne_nemocnych,
                "valueRelative": cases_now.nove_pripady
            }
    })


def access_data(coords):
    pass


def name_to_coords(name):
    pass
