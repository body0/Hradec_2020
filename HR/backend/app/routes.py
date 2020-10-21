from app import app, db_session
from flask import request, jsonify
from app.models import Population, Cases
from datetime import date, datetime


@app.route('/api', methods=["POST"])
def query_records():
    json_data = request.json
    name = json_data['name']
    pop = db_session.query(Population).filter_by(nazev_obce=name)
    city = pop.first()
    today = datetime(2020, 10, 21)
    cases = db_session.query(Cases).filter_by(obec_kod=city.LAU_2, datum=today).first()
    return jsonify({
        "name": city.nazev_obce,
        "population": city.obyv_celkem,
        "caseCurrent": {
                "date": date.today(),
                "valueAbsolute": cases.aktualne_nemocnych,
                "valueRelative": cases.nove_pripady
            }
    })


def access_data(coords):
    pass


def name_to_coords(name):
    pass
