CREATE DATABASE covid;

CREATE USER apiuser WITH PASSWORD 'yrpbvR2mcfLIKVpNLr';
GRANT ALL PRIVILEGES ON DATABASE covid TO apiuser;

CREATE USER guetUser;
GRANT CONNECT ON DATABASE covid TO guetUser;

\connect covid

CREATE TABLE pripady (
  id SERIAL PRIMARY KEY,
  datum DATE,
  obec_kod VARCHAR(20),
  nove_pripady Integer,
  aktualne_nemocnych Integer
);


copy pripady(datum, obec_kod, nove_pripady, aktualne_nemocnych) FROM '/init/cases.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE populace (
  id SERIAL PRIMARY KEY,
  obyv_celkem Integer,
  obyv_muzi Integer,
  obyv_zeny Integer,
  vek_celkem Float,
  vek_muzi Float,
  vek_zeny Float,
  LAU_1 TEXT,
  LAU_2 TEXT,
  nazev_obce TEXT
);


copy populace(LAU_1, LAU_2, nazev_obce, obyv_celkem, obyv_muzi, obyv_zeny, vek_celkem, vek_muzi, vek_zeny) FROM '/init/population.csv' DELIMITER ',' CSV HEADER;
