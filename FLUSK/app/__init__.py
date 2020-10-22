from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import datetime
from app.prediction import calculate_R, pessimistic_prediction,\
     optimistic_prediction, days_to_predict
import requests
import os

app = Flask(__name__)

CORS(app)

DB_HOST = os.environ.get('DB_HOST') or 'localhost'
DB_PORT = os.environ.get('DB_PORT') or 5000
DB_USER = os.environ.get('DB_USER') or 'default'
DB_PASSWORD = os.environ.get('DB_PASSWORD') or 'password'
DB_NAME = os.environ.get('DB_NAME') or 'database'
GOOGLE_KEY = os.environ.get('GOOGLE_KEY') or 'nic tu neni'

# con = psycopg2.connect(database="covid", user="admin", password="zvikackaJeVecna", host="144.91.111.198", port="5432")
con = psycopg2.connect(database="covid", user=DB_NAME, password="zvikackaJeVecna", host=DB_HOST , port=DB_PORT)
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
    cur = con.cursor()
    cur.execute('SELECT * from populace where LOWER(nazev_obce) LIKE LOWER(\''+name +'\');')
    rowsA = cur.fetchall()

    if len(rowsA) == 0:
        return jsonify({'error': 'City not found! ('+ name+ ')'})

    cityId = rowsA[0][2]
    cur = con.cursor()
    cur.execute('SELECT * from pripady where obec_kod = \''+cityId +'\' ORDER BY datum ASC limit 14;')
    rows = cur.fetchall()

    caseCurent = []
    if rows[0][3] == 0:
        rows = rows[1:]
    for rowLine in rows:
        caseCurent.append({
            "date": rowLine[1].isoformat(),
            "rel": rowLine[3],
            "abs": rowLine[4]
        })
    print(caseCurent)
    
    absCurentLastSeven = []
    for i in range(0, min(7, len(rows))):
        rowLine = rows[i]
        absCurentLastSeven.append(rowLine[4])


    relCurentLastSeven = []
    for i in range(0, min(7, len(rows))):
        rowLine = rows[i]   
        relCurentLastSeven.append(rowLine[3])

    r_pred = calculate_R(absCurentLastSeven)

    print(relCurentLastSeven)
    print(r_pred)
    optRel = optimistic_prediction(relCurentLastSeven, r_pred)
    optAbs = optimistic_prediction(absCurentLastSeven, r_pred)
    negRel = pessimistic_prediction(relCurentLastSeven, r_pred)
    negAbs = pessimistic_prediction(absCurentLastSeven, r_pred)


    now = datetime.datetime.now()
    today = new datetime(now.year, now.month, now.day)

    predNeg = []
    for valu in zip(optRel, optAbs):
        predNeg.append({
            "rel": valu[0],
            "abs": valu[1]
        })

    predOpt = []
    for valu in zip(negRel, negAbs):
        predOpt.append({
            "rel": valu[0],
            "abs": valu[1]
        })

    caseFuture = []
    i = 0
    for valu in zip(predNeg, predOpt):
        i += i
        caseFuture.append({
            "date": (today + datetime.timedelta(days=i+1)).isoformat(),
            "neg": valu[0],
            "opt": value[1]
        })

    

    print(rowsA[0])
    return jsonify({
        "name": rowsA[0][3],
        "population": rowsA[0][4],
        "abs": caseCurent[0]['abs'],
        "rel": caseCurent[0]['rel'],
        "caseCurrent": caseCurent,
        "caseFuture": caseFuture,
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