import requests

key = "AIzaSyC2W0Vw4sTjRortHkmPg-G4qcTRWkjazAQ";

def delete_code(string):
    string = string.split()
    string.pop(0)
    string = " ".join(string)
    return(string)

def city_to_pos(city):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?address={city},+CA&key={key}"
    response = requests.get(url)
    json = response.json()
    lat = float(json["results"][0]["geometry"]["location"]["lat"])
    lng = float(json["results"][0]["geometry"]["location"]["lng"])
    coordinates = [lat, lng]
    return(coordinates)

def pos_to_city(lat, lng):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&location_type=ROOFTOP&language=cs&result_type=street_address&key={key}"
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
   
#print(city_to_pos("Turnov"))
#coord = city_to_pos("Hradec Králové")
#print(pos_to_city(coord[0], coord[1]))
