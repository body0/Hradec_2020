from flask import Flask
from sqlalchemy import create_engine
from flask_cors import CORS
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker, Query, relationship, backref
from config import Config

engine = create_engine(Config.DB_URL, convert_unicode=True, echo=False)
Base = declarative_base()
Base.metadata.reflect(engine)

app = Flask(__name__)
app.config.from_object(Config)

print('connecting db')
db_session = scoped_session(sessionmaker(bind=engine))
CORS(app)


from app import routes, models, prediction
