from fastapi import FastAPI
from backend.api import router as api_router

app = FastAPI(
    title="Hybrid Renewable Energy Orchestration Platform",
    description="Optimizes solar, wind, battery, and grid usage",
    version="1.0.0",
)


# Attach API routes
app.include_router(api_router, prefix="/api")


@app.get("/")
def root():
    return {"message": "Hybrid Energy Orchestration API running 🚀"}
