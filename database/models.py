from sqlalchemy import Column, Integer, Float, String, DateTime
from sqlalchemy.sql import func
from database.db import Base

class Forecast(Base):
    __tablename__ = "forecasts"
    id = Column(Integer, primary_key=True, index=True)
    source = Column(String, index=True)   # "demand", "solar", "wind"
    hour = Column(Integer, index=True)
    value = Column(Float)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Schedule(Base):
    __tablename__ = "schedules"
    id = Column(Integer, primary_key=True, index=True)
    hour = Column(Integer, index=True)
    demand = Column(Float)
    solar = Column(Float)
    wind = Column(Float)
    battery_used = Column(Float)
    grid = Column(Float)
    battery_level = Column(Float)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
