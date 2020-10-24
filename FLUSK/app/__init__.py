from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import datetime
from app.prediction import calculate_R, pessimistic_prediction,\
     optimistic_prediction, days_to_predict, caluculate_risk
from app.utils import strip_accents
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

con = psycopg2.connect(database="covid", user="admin", password="zvikackaJeVecna", host="144.91.111.198", port="5432")
# con = psycopg2.connect(database="covid", user=DB_USER, password=DB_PASSWORD, host=DB_HOST , port=DB_PORT)
print("Database opened successfully")


@app.route('/api')
def hello_world():
    return 'Hello, World!'

def delete_code(string):
    string = string.split()
    string.pop(0)
    string = " ".join(string)
    return(string)

def city_to_pos(city):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?address={city},+CA&key={GOOGLE_KEY}"
    response = requests.get(url)
    json = response.json()
    lat = float(json["results"][0]["geometry"]["location"]["lat"])
    lng = float(json["results"][0]["geometry"]["location"]["lng"])
    coordinates = [lat, lng]
    return(coordinates)

def pos_to_city(lat, lng):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&location_type=ROOFTOP&language=cs&result_type=street_address&key={GOOGLE_KEY}"
    response = requests.get(url)
    json = response.json()

    string = str(json["plus_code"]["compound_code"])    
    string = delete_code(string)
    string = string.split(", ")

    if(string[1] != "Česko"):
        return "Pracujeme na tom"
 
    if(string[0] == "Prague"):
        return("Praha")
    else:
        return(string[0])

def query(name):
    #name = strip_accents(name)
    if name == "Prague":
        name = "Praha"
    print('SELECT * from populace where LOWER(nazev_obce) LIKE LOWER(\''+name +'\');')
    cur = con.cursor()
    cur.execute('SELECT * from populace where LOWER(nazev_obce) LIKE LOWER(\''+name +'\');')
    rowsA = cur.fetchall()

    if len(rowsA) == 0:
        return jsonify({'error': 'City not found! ('+ name+ ')'})

    cityId = rowsA[0][2]
    cur = con.cursor()
    cur.execute('SELECT * from pripady where obec_kod = \''+cityId +'\' ORDER BY datum DESC limit 14;')
    rows = cur.fetchall()

    if rows[0][3] == 0:
        rows = rows[1:]

    caseCurent = []
    for rowLine in rows:
        caseCurent.append({
            "date": rowLine[1],
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
    for valu in zip(optRel, optAbs):
        predNeg.append({
            "date": str((today + datetime.timedelta(days=i+1)).date().isoformat()),
            "rel": valu[0],
            "abs": valu[1]
        })

    predOpt = []
    for valu in zip(negRel, negAbs):
        predOpt.append({
            "date": str((today + datetime.timedelta(days=i+1)).date().isoformat()),
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
            "opt": valu[1]
        })

    caseCurent.reverse()
    population = rowsA[0][4]
    cityName = rowsA[0][3]
    percentCovid = caseCurent[0]['abs'] / population * 100

    percentToCatch = caluculate_risk(population, r_pred, caseCurent[0]['abs'])

    print(rowsA[0])
    return jsonify({
        "name": cityName,
        "population": population,
        "abs": caseCurent[0]['abs'],
        "rel": caseCurent[0]['rel'],
        "caseCurrent": caseCurent,
        "caseFuture": caseFuture,
        "r": r_pred,
        'p': percentCovid,
        "cach": percentToCatch
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
