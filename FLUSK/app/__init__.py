from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import datetime
from app.prediction import calculate_R, pessimistic_prediction,\
     optimistic_prediction, days_to_predict
from app.utils import strip_accents
import requests

app = Flask(__name__)

CORS(app)

con = psycopg2.connect(database="covid", user="admin", password="zvikackaJeVecna", host="144.91.111.198", port="5432")
print("Database opened successfully")


@app.route('/api')
def hello_world():
    return 'Hello, World!'


key = "AIzaSyC2W0Vw4sTjRortHkmPg-G4qcTRWkjazAQ"


def pos_to_city(lat, lng):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&location_type=ROOFTOP&result_type=street_address&key={key}"
    response = requests.get(url)
    json = response.json()
    string = str(json["plus_code"]["compound_code"]).split(", ")
    if(string[1] != "Czechia"):
        return "Pracujeme na tom"
    string = string[0].split()
    string.pop(0)
    return(" ".join(string))


def query(name):
    name = strip_accents(name)
    if name == "Prague":
        name = "Praha"
    print('SELECT * from populace where LOWER(nazev_obce) LIKE LOWER(\''+name +'\');')
    cur = con.cursor()
    cur.execute('SELECT * from populace where LOWER(nazev_obce) LIKE LOWER(\''+name +'\');')
    rowsA = cur.fetchall()

    if len(rowsA) == 0:
        return jsonify({'error': 'City not found!'})

    cityId = rowsA[0][2]
    cur = con.cursor()
    cur.execute('SELECT * from pripady where obec_kod = \''+cityId +'\' ORDER BY datum desc limit 14;')
    rows = cur.fetchall()

    caseCurent = []
    for rowLine in rows:
        caseCurent.append({
            "date": str(rowLine[1].date().isoformat()),
            "rel": rowLine[3],
            "abs": rowLine[4]
        })

    absCurentLastSeven = []
    for i in range(0, min(7, len(rows))):
        rowLine = rows[i]
        absCurentLastSeven.append(rowLine[4])

    relCurentLastSeven = []
    for i in range(0, min(7, len(rows))):
        rowLine = rows[i]
        relCurentLastSeven.append(rowLine[3])

    r_pred = calculate_R(absCurentLastSeven)

    optRel = optimistic_prediction(relCurentLastSeven, r_pred)
    optAbs = optimistic_prediction(absCurentLastSeven, r_pred)
    negRel = pessimistic_prediction(relCurentLastSeven, r_pred)
    negAbs = pessimistic_prediction(absCurentLastSeven, r_pred)

    today = datetime.datetime.now()

    predNeg = []
    i = 0
    for valu in zip(optRel, optAbs):
        i += i
        predNeg.append({
            "date": str((today + datetime.timedelta(days=i+1)).date().isoformat()),
            "rel": valu[0],
            "abs": valu[1]
        })

    predOpt = []
    i = 0
    for valu in zip(negRel, negAbs):
        i += i
        predOpt.append({
            "date": str(today + datetime.timedelta(days=i+1)).date().isoformat()),
            "rel": valu[0],
            "abs": valu[1]
        })

    print(rowsA[0])
    return jsonify({
        "name": rowsA[0][3],
        "population": rowsA[0][4],
        "caseCurrent": caseCurent,
        "caseFuture0": predNeg,
        "caseFuture1": predOpt,
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


if __name__ == '__main__':
    app.run()
