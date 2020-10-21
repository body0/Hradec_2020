import requests


def pos_to_city(lat, lng):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&location_type=ROOFTOP&result_type=street_address&key=AIzaSyC2W0Vw4sTjRortHkmPg-G4qcTRWkjazAQ"
    response = requests.get(url)
    return response.json()
