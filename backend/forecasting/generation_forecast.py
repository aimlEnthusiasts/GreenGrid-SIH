import numpy as np

def forecast_generation(hours=24):
    """Simulate solar & wind forecast"""
    hours_arr = np.arange(hours)

    # Solar pattern: bell curve peaking midday
    solar = 80 * np.exp(-0.5 * ((hours_arr - 12) / 4) ** 2)
    solar += np.random.normal(0, 5, hours)  # cloud variation

    # Wind pattern: random but with baseline
    wind = 20 + 10 * np.sin(0.5 * hours_arr) + np.random.normal(0, 3, hours)

    solar = np.clip(solar, 0, None).tolist()
    wind = np.clip(wind, 0, None).tolist()

    return {"solar": [round(s, 2) for s in solar],
            "wind": [round(w, 2) for w in wind]}
