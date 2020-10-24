FROM postgres:latest

# try load from backup
# RUN mongorestore /var/db/backup; exit 0

###### try init backu routine #####
#COPY --chown=777 ./scripts/backpu.sh /var/db
#RUN (crontab -l 2>/dev/null; echo "0 23 * * * /var/db/backup.sh") | crontab -


WORKDIR /init

# copy init script
RUN sudo apt install -y python3.8
RUN sudo apt install -y  pip3
RUN pip3 install pandas

COPY ./init/parseTables.py parseTables.py
COPY ./init/setup.sh setup.sh
RUN setup.sh

COPY ./init/init.js /docker-entrypoint-initdb.d/