# Covid semafor
- napojení dat ze zdroje: https://onemocneni-aktualne.mzcr.cz/api/account/verejne-distribuovana-data/file/stupne-pohotovosti%252Fokresy-zvysene-riziko.zip (05 data risk score)
- rozdělení na okresy
- připojení v databázi pomocí kódu NUTS okresy formát: "CZ0102"
- Vybrané sloupce: Nově hospitalizovaní 7 dní (dle bydliště), Celkový počet hospitalizovaných na konci hodnoceného týdne (dle bydliště), Okres NUTS, .. z toho počet hosp. v těžkém  stavu /UPV, ECMO  (dle bydliště), Těžký stav / UPV, ECMO v % hospitalizovaných  (dle bydliště), Nově těžký stav /UPC/ECMO za uplynulých 7 dní  (dle bydliště), Nově těžký stav /UPC/ECMO v % nově hospitaliozovaných za uplynulých 7 dní  (dle bydliště)



