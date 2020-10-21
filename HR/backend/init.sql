CREATE TABLE pripady (
  id Integer PRIMARY KEY,
  datum DATE,
  obec_kod VARCHAR(20),
  nove_pripady Integer,
  aktualne_nemocnych Integer
);


-- COPY pripady(datum, obec_kod, nove_pripady, aktualne_nemocnych) FROM /home/auburn/cs/hradec/Hradec_2020/HR/test.csv DELIMITER ',' CSV HEADER;
CREATE TABLE populace (
  id Integer PRIMARY KEY,
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


-- COPY populace(obyv_celkem, obyv_muzi,obyv_zeny,vek_celkem, vek_muzi, vek_zeny, LAU_1, LAU_2, nazev_obce) FROM /home/auburn/cs/hradec/Hradec_2020/HR/test.csv DELIMITER ',' CSV HEADER;
