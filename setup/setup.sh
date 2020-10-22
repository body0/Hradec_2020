#!/bin/bash
ODKAZ_VYSKYTY="https://share.uzis.cz/s/dCZBiARJ27ayeoS/download"
ODKAZ_POPULACE="https://www.czso.cz/documents/10180/91917344/1300721903.xlsx/e7e94cb2-219c-4c6d-a46a-0f51d6891a5d?version=1.0"

: '
wget $ODKAZ_VYSKYTY -O vyskyty.zip
unzip vyskyty.zip

wget $ODKAZ_POPULACE -O populace.xlsx


python3 parseTables.py
'
# assuming set PGPASSWORD
psql -h 144.91.111.198 -p 5432 -U admin -d covid -c "CREATE TABLE pripady ( \
  id Integer PRIMARY KEY, \
  datum DATE, \
  obec_kod TEXT, \
  nove_pripady Integer, \
  aktualne_nemocnych Integer \
);" -c "\\copy pripady FROM ./cases.csv DELIMITER ',' CSV HEADER;" \
 -c "CREATE TABLE populace ( \
  id Integer PRIMARY KEY, \
  LAU_1 TEXT, \
  LAU_2 TEXT, \
  nazev_obce TEXT, \
  obyv_celkem Integer, \
  obyv_muzi Integer, \
  obyv_zeny Integer, \
  vek_celkem Float, \
  vek_muzi Float, \
  vek_zeny Float
);" -c "\\copy populace FROM ./population.csv DELIMITER ',' CSV HEADER;"
