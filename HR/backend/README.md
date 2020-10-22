# Installation
```shell
$ pip install -r requirements.txt
```

# Running
```shell
$ flask run
```

# Environmental variables

- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

- `DB_HOST=144.91.111.198 `
- `DB_PORT=5432`
- `DB_USER=admin`
- `DB_PASSWORD=zvikackaJeVecna`
- `DB_NAME=corona`

# Routes
- `/api/by-name`
    - params: `name` of the city
    - example: `curl -H "Content-Type: application/json" -i -X POST -d '{"name": "Semily"}' 127.0.0.1:5000/api/by-name`
- `/api/by-location`
    - params: `lat, lng` of the location
    - example: `curl -H "Content-Type: application/json" -i -X POST -d '{"lat": 50.5930986, "lng": 15.5443525}' 127.0.0.1:5000/api/by-location`
