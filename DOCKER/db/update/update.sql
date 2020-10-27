\connect covid

DELETE FROM pripady WHERE datum >= now() - INTERVAL '3 DAYS';


copy pripady(datum, obec_kod, nove_pripady, aktualne_nemocnych) FROM '/update/casesNew.csv' DELIMITER ',' CSV HEADER;


/* BULK INSERT pripady
  FROM '/update/casesNew.csv'
  WITH
  (
    FIRSTROW = 2,
    FIELDTERMINATOR= ',',
    ROWTERMINATOR = '\n',
    TABLOCK
  ); */
