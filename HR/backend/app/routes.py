from app import app, db_session
from flask import request, jsonify
from app.models import Population, Cases
from datetime import date, datetime, timedelta
from app.prediction import calculate_R, pessimistic_prediction,\
     optimistic_prediction, days_to_predict
from app.conv import pos_to_city


def query(name):
    pop = db_session.query(Population).filter_by(nazev_obce=name)
    city = pop.first()
    if city is None:
        return jsonify({'error': 'City not found!'})
    today = datetime(2020, 10, 21)
    cases = db_session.query(Cases).filter_by(obec_kod=city.LAU_2)
    cases_now = cases.filter_by(datum=today).first()
    cases_prev = [c[0] for c in list(cases.order_by(Cases.datum.desc()).
                                     limit(14).
                                     values('nove_pripady'))][1:]
    r_pred = calculate_R(cases_prev)
    print(cases_prev, r_pred)
    pes_pred = pessimistic_prediction(cases_prev, r_pred)
    opt_pred = optimistic_prediction(cases_prev, r_pred)
    print(pes_pred, opt_pred)

    cf0 = []
    curr = cases_now.aktualne_nemocnych
    for i, inc in enumerate(pes_pred):
        curr += inc
        cf0.append({"date": today + timedelta(days=i+1),
                    "valueAbsolute": curr,
                    "valueRelative": inc})
    cf1 = []
    curr = cases_now.aktualne_nemocnych
    for i, inc in enumerate(opt_pred):
        curr += inc
        cf1.append({"date": today + timedelta(days=i+1),
                    "valueAbsolute": curr,
                    "valueRelative": inc})

    return jsonify({
        "name": city.nazev_obce,
        "population": city.obyv_celkem,
        "caseCurrent": {
                "date": today,
                "valueAbsolute": cases_now.aktualne_nemocnych,
                "valueRelative": cases_now.nove_pripady
        },
        "caseFuture0": cf0,
        "caseFuture1": cf1,
        "r": r_pred
    })


@app.route('/api/by-name', methods=["POST"])
def query_by_name():
    json_data = request.json
    name = json_data['name']
    return query(name)


@app.route('/api/by-location', methods=["POST"])
def query_by_location():
    json_data = request.json
    lat = json_data["lat"]
    lng = json_data["lng"]
    city = pos_to_city(lat, lng)
    return query(city)
