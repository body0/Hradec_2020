import requests

key = "AIzaSyC2W0Vw4sTjRortHkmPg-G4qcTRWkjazAQ"; 

def pos_to_city(lat, lng):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&location_type=ROOFTOP&result_type=street_address&key={key}"
    response = requests.get(url)
    json = response.json()
    return(json["plus_code"])


print(pos_to_city(50.060148, 15.704721))
