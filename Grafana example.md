SELECT
  datum AS "time",
  nove_pripady
FROM pripady
where obec_kod = '572659' --kód obce ZUJ (Jičín)
order by datum
