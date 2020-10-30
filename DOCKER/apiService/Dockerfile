# set base image (host OS)
FROM python:3.8

# set the working directory in the container
WORKDIR /var/app

# copy the dependencies file to the working directory
COPY requirements.txt .

# install dependencies
RUN pip install -r requirements.txt
RUN pip install gunicorn

# copy the content of the local src directory to the working directory
COPY app/ app/

# command to run on container start
# CMD [ "python", "app/__init__.py" ]
WORKDIR /var/app/app
CMD [ "gunicorn", "wsgi:appGenerator()"]