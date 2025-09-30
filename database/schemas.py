from pydantic import BaseModel
from datetime import datetime

class ForecastBase(BaseModel):
    source: str
    hour: int
    value: float

class ForecastCreate(ForecastBase):
    pass

class ForecastOut(ForecastBase):
    id: int
    created_at: datetime
    class Config:
        orm_mode = True


class ScheduleBase(BaseModel):
    hour: int
    demand: float
    solar: float
    wind: float
    battery_used: float
    grid: float
    battery_level: float

class ScheduleCreate(ScheduleBase):
    pass

class ScheduleOut(ScheduleBase):
    id: int
    created_at: datetime
    class Config:
        orm_mode = True
