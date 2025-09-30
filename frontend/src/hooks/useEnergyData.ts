import { useState, useEffect } from "react";

export interface EnergyData {
  solar: number;
  wind: number;
  grid: number;
  battery: {
    soc: number;
    power: number;
    capacity: number;
    cycles: number;
    health: number;
    status: "charging" | "discharging" | "idle";
  };
  load: number;
  timestamp: Date;
}

export interface ForecastData {
  time: string;
  generation: number;
  demand: number;
  battery: number;
}

export function useEnergyData() {
  const [data, setData] = useState<EnergyData>({
    solar: 45.8,
    wind: 32.4,
    grid: 18.2,
    battery: {
      soc: 78,
      power: 15.2,
      capacity: 250,
      cycles: 847,
      health: 94,
      status: "charging",
    },
    load: 96.4,
    timestamp: new Date(),
  });

  const [forecast, setForecast] = useState<ForecastData[]>([
    { time: "00:00", generation: 0, demand: 45, battery: 72 },
    { time: "03:00", generation: 0, demand: 38, battery: 68 },
    { time: "06:00", generation: 15, demand: 52, battery: 65 },
    { time: "09:00", generation: 68, demand: 78, battery: 70 },
    { time: "12:00", generation: 95, demand: 85, battery: 82 },
    { time: "15:00", generation: 82, demand: 92, battery: 78 },
    { time: "18:00", generation: 35, demand: 105, battery: 72 },
    { time: "21:00", generation: 0, demand: 68, battery: 65 },
    { time: "24:00", generation: 0, demand: 48, battery: 62 },
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const hour = new Date().getHours();
        
        // Solar varies by time of day
        const solarVariation = Math.sin((hour - 6) * Math.PI / 12) * 50 + Math.random() * 10;
        const solar = Math.max(0, solarVariation);
        
        // Wind has some randomness
        const wind = 30 + Math.random() * 15;
        
        // Load varies throughout the day
        const loadBase = hour >= 9 && hour <= 18 ? 100 : 60;
        const load = loadBase + Math.random() * 20;
        
        // Total generation
        const totalGeneration = solar + wind;
        
        // Grid makes up the difference
        const grid = Math.max(0, load - totalGeneration - prev.battery.power);
        
        // Battery logic
        let batteryPower = prev.battery.power;
        let batterySoc = prev.battery.soc;
        let batteryStatus: "charging" | "discharging" | "idle" = prev.battery.status;
        
        if (totalGeneration > load && batterySoc < 95) {
          // Excess generation, charge battery
          batteryPower = Math.min(20, (totalGeneration - load) * 0.8);
          batterySoc = Math.min(100, batterySoc + 0.1);
          batteryStatus = "charging";
        } else if (totalGeneration < load && batterySoc > 20) {
          // Deficit, discharge battery
          batteryPower = Math.min(20, (load - totalGeneration) * 0.5);
          batterySoc = Math.max(0, batterySoc - 0.1);
          batteryStatus = "discharging";
        } else {
          batteryStatus = "idle";
          batteryPower = 0;
        }

        return {
          solar: parseFloat(solar.toFixed(1)),
          wind: parseFloat(wind.toFixed(1)),
          grid: parseFloat(grid.toFixed(1)),
          battery: {
            ...prev.battery,
            soc: parseFloat(batterySoc.toFixed(1)),
            power: parseFloat(batteryPower.toFixed(1)),
            status: batteryStatus,
          },
          load: parseFloat(load.toFixed(1)),
          timestamp: new Date(),
        };
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return { data, forecast };
}
