# Cestovatelův průvodce karanténou
![Sec](https://github.com/body0/Hradec_2020/blob/master/prezentace/apple-touch-icon.png?raw=true)
- Autoři: Kristýna Petrlíková, Adam Pudil, Jan Nykl, Vojtěch Kuchař
- Za podpory: VOŠ a SPŠ Jičín
- V rámci: Hackathon open-data Královéhradeckého kraje 2020
- Kontaktní emaily:
    - nykl.jan.3693@gmail.com
    - vojta.kuchar.sps@gmail.com

## Aktuální provoz aplikace

- aktuálně na adrese: https://covidtour.ml/
- automatické načtení nových data každých 12h

## Popis webové aplikace
Cílem projektu bylo vytvořit webovou aplikaci pro odhad rizika nakažení koronavirem v uživateli zvolené lokalitě.

- Uživatel zvolí lokalitu kam chce cestovat
- Aplikace spočítá jaká je pravděpodobnost nákazy v dané oblasti.
- Zobrazí týdenní predikci v dané oblasti.
- Procentuální šance nákazy, vývoj nákazy.
## Včem je naše aplikace unikátní?
  - Nabýzí unikátní pohled na situaci
        - Zobrazuje reprodukční číslo pro danou lokalitu
        - Odhaduje možná rizika nakažení v oblasti
  - Čerpá oficiální open data MZČR
  - Řeší lokální problematiku pandemie


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

### servers/proxy

- nginx
- gunicorn

### deploy

- docker (docker-compose)

## Spuštění aplikace

- celá aplikace je připravena pro docker
- docker otevírá na hostujícím serveru port 5432 pro veřejný přístup k databázi a 3101 pro samotnou vebovou aplikaci
- pro nakorování změn do dockeru použijte copy.sh skript v /DOCKER

```
    git clone https://github.com/body0/Hradec_2020
    cd DOCKER
    sudo docker-compoer build
    sudo docker-compose run -d
```


## Možné rozšíření

- SEO
- integrovat další datasety: semafor

## Ukázka prostředí
- ## Desktop verze
    ![Sec](https://github.com/body0/Hradec_2020/blob/master/prezentace/1.png?raw=true)
    ![Sec](https://github.com/body0/Hradec_2020/blob/master/prezentace/2.png?raw=true)
    ![Sec](https://github.com/body0/Hradec_2020/blob/master/prezentace/3.png?raw=true)
   
- ## Mobilní verze

    
    ![Sec](https://github.com/body0/Hradec_2020/blob/master/prezentace/4.png?raw=true)
    ![Sec](https://github.com/body0/Hradec_2020/blob/master/prezentace/5.png?raw=true)
    ![Sec](https://github.com/body0/Hradec_2020/blob/master/prezentace/6.png?raw=true)
