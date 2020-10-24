import requests

key = "AIzaSyC2W0Vw4sTjRortHkmPg-G4qcTRWkjazAQ";

def delete_code(string):
    string = string.split()
    string.pop(0)
    string = " ".join(string)
    return(string)

def pos_to_city(lat, lng):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&location_type=ROOFTOP&result_type=street_address&key={key}"
    response = requests.get(url)
    json = response.json()

    string = str(json["plus_code"]["compound_code"])    
    string = delete_code(string)
    string = string.split(", ")

    if(string[1] != "Czechia"):
        return "Pracujeme na tom"
 
    if(string[0] == "Prague"):
        return("Praha")
    else:
        return(string[0])
    
#print(pos_to_city(50.07608,14.425262))
