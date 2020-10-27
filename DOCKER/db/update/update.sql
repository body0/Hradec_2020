\connect covid

DELETE FROM pripady WHERE datum >= now() - INTERVAL '3 DAYS';

BULK INSERT pripady
  FROM '/update/casesNew.csv'
  WITH
  (
    FIRSTROW = 2,
    FIELDTERMINATOR= ',',
    ROWTERMINATOR = '\n',
    TABLOCK
  );
