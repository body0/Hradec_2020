# Cestovatelův průvodce karanténou

- Autoři: Kristýna Petrlíková, Adam Pudil, Jan Nykl, Vojtěch Kuchař
- Za podpory: VOŠ a SPŠ Jičín
- V rámci: Hackathon open-data Královéhradeckého kraje 2020
- Kontaktní emaily:
    - nykl.jan.3693@gmail.com
    - vojta.kuchar.sps@gmail.com

## Aktuální provoz aplikace

- aktuálně na adrese: https://covidtour.ml/
- automatické načtení nových data

## Popis weové aplikace

## Prvotní návrh

- Cílem projektu je vytvořit webovou aplikaci pro odhad rizika nakažení koronavirem v uživateli zvolené lokalitě.
- Uživatel zvolí lokalitu a další pram. (velikost města, cíl návštěvy, počet potkaných lidí) kam chce cestovat
- Aplikace spočítá jaká je pravděpodobnost nákazy v dané oblasti.
- Dodá základní informace o otevřenosti míst(restaurace, bary, atd.) -Google data
- Zobrazí týdenní predikci v dané oblasti.
- Parametry(délka pobytu, účel pobytu, jdu na akci s počtem x)
- Procentuální šance nákazy, vývoj nákazy, predikce. semafor

## Použité technologie

### frontend

- angular
- google icons
- google map api
- google geoocation api
- google charts

### backend

- python (flusk; psycopg2)
- postgres

## Spuštění aplikace

- celá aplikace je připravena pro docker
- docker otevírá na hostujícím serveru port 5432 pro veřejný přístup k databázi a 3101 pro samotnou vebovou aplikaci

```
    git clone https://github.com/body0/Hradec_2020
    cd DOCKER
    sudo docker-compoer build
    sudo docker-compose run -d
```


## Možné rozšíření

- SEO
- integrovat další datasety: semafor,


