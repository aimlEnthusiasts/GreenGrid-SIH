import numpy as np

def forecast_demand(hours=24):
    """Simulate hourly demand forecast with daily pattern + noise"""
    base_load = np.linspace(60, 100, hours)  # gradual rise
    noise = np.random.normal(0, 5, hours)    # random variation
    demand = np.clip(base_load + noise, 50, 120).tolist()
    return [round(d, 2) for d in demand]
