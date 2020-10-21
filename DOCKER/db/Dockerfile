FROM postgres:latest

# try load from backup
# RUN mongorestore /var/db/backup; exit 0

###### try init backu routine #####
#COPY --chown=777 ./scripts/backpu.sh /var/db
#RUN (crontab -l 2>/dev/null; echo "0 23 * * * /var/db/backup.sh") | crontab -

# copy init script
COPY ./scripts/init.js /docker-entrypoint-initdb.d/
