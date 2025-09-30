import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ForecastData } from "@/hooks/useEnergyData";

interface ForecastChartProps {
  data: ForecastData[];
}

export function ForecastChart({ data }: ForecastChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorGeneration" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorBattery" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="time" 
          stroke="hsl(var(--muted-foreground))"
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          style={{ fontSize: '12px' }}
          label={{ value: 'kW', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--foreground))'
          }}
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="generation"
          stroke="hsl(var(--secondary))"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorGeneration)"
          name="Generation"
        />
        <Area
          type="monotone"
          dataKey="demand"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorDemand)"
          name="Demand"
        />
        <Area
          type="monotone"
          dataKey="battery"
          stroke="hsl(var(--accent))"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorBattery)"
          name="Battery SOC (%)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
