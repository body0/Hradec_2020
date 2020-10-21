import requests

key = "AIzaSyC2W0Vw4sTjRortHkmPg-G4qcTRWkjazAQ";

def pos_to_city(lat, lng):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&location_type=ROOFTOP&result_type=street_address&key={key}"
    response = requests.get(url)
    json = response.json()
    string = str(json["plus_code"]["compound_code"]).split(", ")
    if(string[1] != "Czechia"):
        return "Pracujeme na tom"
    string = string[0].split()
    string.pop(0)
    return string.join()


# print(pos_to_city(48.858093, 2.294694))
