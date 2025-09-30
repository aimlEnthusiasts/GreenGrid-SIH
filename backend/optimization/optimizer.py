def optimize_schedule(demand, solar, wind, battery_capacity=200):
    """
    Simple greedy optimization:
    1. Use solar/wind first
    2. Use battery if renewables insufficient
    3. Fall back to grid if still short
    """
    schedule = []
    battery_level = battery_capacity / 2  # start half-full

    for i in range(len(demand)):
        load = demand[i]
        available = solar[i] + wind[i]
        used_solar = min(solar[i], load)
        used_wind = min(wind[i], load - used_solar)
        load_met = used_solar + used_wind

        used_battery = 0
        grid = 0

        if load_met < load:
            shortfall = load - load_met
            if battery_level >= shortfall:
                used_battery = shortfall
                battery_level -= shortfall
            else:
                used_battery = battery_level
                battery_level = 0
                grid = shortfall - used_battery
        else:
            # surplus renewables → charge battery
            surplus = available - load
            battery_level = min(battery_capacity, battery_level + surplus)

        schedule.append({
            "hour": i,
            "demand": round(load, 2),
            "solar": round(used_solar, 2),
            "wind": round(used_wind, 2),
            "battery_used": round(used_battery, 2),
            "grid": round(grid, 2),
            "battery_level": round(battery_level, 2)
        })

    return schedule
