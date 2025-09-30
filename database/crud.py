from sqlalchemy.orm import Session
from database import models, schemas

def create_forecast(db: Session, forecast: schemas.ForecastCreate):
    db_obj = models.Forecast(**forecast.dict())
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj

def get_forecasts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Forecast).offset(skip).limit(limit).all()

def create_schedule(db: Session, schedule: schemas.ScheduleCreate):
    db_obj = models.Schedule(**schedule.dict())
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj

def get_schedules(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Schedule).offset(skip).limit(limit).all()
