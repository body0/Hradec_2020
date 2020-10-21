# Dockerfile
FROM nginx:alpine

# copy config 
# RUN rm /etc/enginx/conf.d/*
COPY ./config/app.conf /etc/nginx/conf.d/

# copy webside file
RUN mkdir /var/app/
COPY ./app /var/app/


