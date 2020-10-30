#!/bin/bash
ODKAZ_VYSKYTY="https://share.uzis.cz/s/dCZBiARJ27ayeoS/download"
ODKAZ_POPULACE="https://www.czso.cz/documents/10180/91917344/1300721903.xlsx/e7e94cb2-219c-4c6d-a46a-0f51d6891a5d?version=1.0"

wget $ODKAZ_VYSKYTY -O vyskyty.zip -q --show-progress
unzip vyskyty.zip

wget $ODKAZ_POPULACE -O populace.xlsx -q --show-progress

/usr/bin/python3 parseTables.py

