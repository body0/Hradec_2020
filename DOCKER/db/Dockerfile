FROM postgres:latest

# try load from backup
# RUN mongorestore /var/db/backup; exit 0

###### try init backu routine #####
#COPY --chown=777 ./scripts/backpu.sh /var/db
#RUN (crontab -l 2>/dev/null; echo "0 23 * * * /var/db/backup.sh") | crontab -
 
RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev wget unzip cron
# RUN apt-get update \
#   && apt-get install -y python3-pip python3-dev \
#   && cd /usr/local/bin \
#   && ln -s /usr/bin/python3 python \
#   && pip3 install --upgrade pip
RUN pip3 install pandas xlrd

WORKDIR /init

COPY ./init/parseTables.py parseTables.py
COPY ./init/setup.sh setup.sh
RUN chmod +x setup.sh && ./setup.sh

WORKDIR /update

COPY ./update/parseTables.py parseTables.py
COPY ./update/setup.sh setup.sh
COPY ./update/update.sql update.sql
RUN chmod +x setup.sh

# RUN echo "*/10 * * * * /update/setup.sh" > cronscript
RUN echo "0 */12 * * * /update/setup.sh" > cronscript
RUN crontab -u root cronscript

COPY ./init/init.sql /docker-entrypoint-initdb.d/