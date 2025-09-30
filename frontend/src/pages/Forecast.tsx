import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, Wind, Zap, TrendingUp, Calendar } from "lucide-react";
import { useEnergyData } from "@/hooks/useEnergyData";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Forecast = () => {
  const { forecast } = useEnergyData();

  const weatherData = [
    { time: "06:00", solar: 850, wind: 12 },
    { time: "09:00", solar: 920, wind: 15 },
    { time: "12:00", solar: 1000, wind: 18 },
    { time: "15:00", solar: 880, wind: 16 },
    { time: "18:00", solar: 450, wind: 14 },
    { time: "21:00", solar: 0, wind: 20 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Energy Forecasting</h1>
          <p className="text-muted-foreground mt-1">AI-powered 24-hour predictions</p>
        </div>
        <Badge variant="outline" className="text-sm px-4 py-2">
          <Calendar className="h-4 w-4 mr-2" />
          Updated 5 min ago
        </Badge>
      </div>

      {/* Weather Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-info" />
            Weather Forecast
          </CardTitle>
          <CardDescription>Solar irradiance (W/m²) and wind speed (m/s)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
              <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="solar" fill="hsl(var(--accent))" name="Solar Irradiance" />
              <Bar dataKey="wind" fill="hsl(var(--info))" name="Wind Speed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Generation vs Demand Forecast */}
      <Card>
        <CardHeader>
          <CardTitle>24-Hour Generation & Demand Forecast</CardTitle>
          <CardDescription>ML-predicted energy patterns with 92% accuracy</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={forecast}>
              <defs>
                <linearGradient id="colorGen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorDem" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
              <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} label={{ value: 'kW', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="generation" stroke="hsl(var(--secondary))" strokeWidth={2} fillOpacity={1} fill="url(#colorGen)" name="Generation (kW)" />
              <Area type="monotone" dataKey="demand" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorDem)" name="Demand (kW)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Key Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sun className="h-5 w-5 text-accent" />
              Solar Peak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">95 kW</p>
            <p className="text-sm text-muted-foreground mt-1">Expected at 12:00 PM</p>
            <Badge variant="outline" className="mt-3">
              <TrendingUp className="h-3 w-3 mr-1 text-success" />
              +12% vs. yesterday
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Wind className="h-5 w-5 text-info" />
              Wind Average
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">32 kW</p>
            <p className="text-sm text-muted-foreground mt-1">Consistent throughout day</p>
            <Badge variant="outline" className="mt-3">
              Stable conditions
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-primary" />
              Peak Demand
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">105 kW</p>
            <p className="text-sm text-muted-foreground mt-1">Expected at 6:00 PM</p>
            <Badge variant="outline" className="mt-3 text-warning border-warning">
              High demand period
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Forecast Accuracy */}
      <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
        <CardHeader>
          <CardTitle>Forecast Model Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Model Accuracy</p>
              <p className="text-3xl font-bold text-success mt-1">92.4%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Data Sources</p>
              <p className="text-3xl font-bold text-foreground mt-1">5</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Training Data</p>
              <p className="text-3xl font-bold text-foreground mt-1">18 mo</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="text-3xl font-bold text-foreground mt-1">5 min</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forecast;
