from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.db import get_db
from database import crud, schemas
from backend.forecasting.demand_forecast import forecast_demand
from backend.forecasting.generation_forecast import forecast_generation
from backend.optimization.optimizer import optimize_schedule

router = APIRouter()

@router.get("/forecast")
async def get_forecast(hours: int = 24, db: Session = Depends(get_db)):
    demand = forecast_demand(hours)
    generation = forecast_generation(hours)

    # Save forecasts
    for i, d in enumerate(demand):
        crud.create_forecast(db, schemas.ForecastCreate(source="demand", hour=i, value=d))
    for i, s in enumerate(generation["solar"]):
        crud.create_forecast(db, schemas.ForecastCreate(source="solar", hour=i, value=s))
    for i, w in enumerate(generation["wind"]):
        crud.create_forecast(db, schemas.ForecastCreate(source="wind", hour=i, value=w))

    return {"demand": demand, "generation": generation}

@router.get("/optimize")
async def get_optimization(hours: int = 24, db: Session = Depends(get_db)):
    demand = forecast_demand(hours)
    generation = forecast_generation(hours)
    solar, wind = generation["solar"], generation["wind"]

    schedule = optimize_schedule(demand, solar, wind)

    # Save schedule
    for entry in schedule:
        crud.create_schedule(db, schemas.ScheduleCreate(**entry))

    return {"schedule": schedule}

@router.get("/schedules")
async def list_schedules(db: Session = Depends(get_db)):
    return crud.get_schedules(db)

@router.get("/forecasts")
async def list_forecasts(db: Session = Depends(get_db)):
    return crud.get_forecasts(db)
