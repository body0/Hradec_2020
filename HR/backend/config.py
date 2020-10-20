import os

"""
to retrieve ENV variables (e.g. those stored in .flaskenv or exported) use:
    os.environ.get("<ENV_VAR>") or "default-value"
"""


class Config(object):
    DB_HOST = os.environ.get('DB_HOST') or 'localhost'
    DB_PORT = os.environ.get('DB_PORT') or 5000
    DB_USER = os.environ.get('DB_USER') or 'default'
    DB_PASSWORD = os.environ.get('DB_PASSWORD') or 'password'
    DB_NAME = os.environ.get('DB_NAME') or 'database'

    DB_URL = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}: \
               {DB_PORT}/{DB_NAME}'

    SQLALCHEMY_DATABASE_URI = DB_URL
    SQLALCHEMY_TRACK_MODIFICATIONS = False
