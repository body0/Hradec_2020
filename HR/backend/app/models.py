from app import Base


class Population(Base):
    __table__ = Base.metadata.tables['populace']


class Cases(Base):
    __table__ = Base.metadata.tables['pripady']
