import { Battery, Sun, Wind, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnergyFlowVisualization } from "@/components/dashboard/EnergyFlowVisualization";
import { ForecastChart } from "@/components/dashboard/ForecastChart";
import { BatteryStatus } from "@/components/dashboard/BatteryStatus";
import { AlertsList } from "@/components/dashboard/AlertsList";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { useEnergyData } from "@/hooks/useEnergyData";

const Dashboard = () => {
  const { data, forecast } = useEnergyData();
  
  const totalGeneration = data.solar + data.wind;
  const renewablePercentage = ((totalGeneration / data.load) * 100).toFixed(1);
  const carbonAvoided = (totalGeneration * 0.82 * 0.7).toFixed(0); // kg CO2 per kWh factor
  const costSavings = (totalGeneration * 6.5).toFixed(0); // ₹6.5 per kWh saved
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Energy Dashboard</h1>
          <p className="text-muted-foreground mt-1">Real-time monitoring and control</p>
        </div>
        <Badge variant="outline" className="text-sm px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse mr-2" />
          System Online
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsCard
          title="Solar Generation"
          value={`${data.solar} kW`}
          change="+12%"
          icon={Sun}
          trend="up"
          color="accent"
        />
        <MetricsCard
          title="Wind Generation"
          value={`${data.wind} kW`}
          change="+8%"
          icon={Wind}
          trend="up"
          color="info"
        />
        <MetricsCard
          title="Grid Import"
          value={`${data.grid} kW`}
          change="-24%"
          icon={Zap}
          trend="down"
          color="primary"
        />
        <MetricsCard
          title="Battery SOC"
          value={`${data.battery.soc}%`}
          change="+5%"
          icon={Battery}
          trend="up"
          color="success"
        />
      </div>

      {/* Energy Flow */}
      <Card>
        <CardHeader>
          <CardTitle>Real-Time Energy Flow</CardTitle>
          <CardDescription>Live visualization of energy distribution across the campus</CardDescription>
        </CardHeader>
        <CardContent>
          <EnergyFlowVisualization />
        </CardContent>
      </Card>

      {/* Forecast and Battery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>24-Hour Forecast</CardTitle>
            <CardDescription>Predicted generation vs. demand</CardDescription>
          </CardHeader>
          <CardContent>
            <ForecastChart data={forecast} />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <BatteryStatus battery={data.battery} />
          <AlertsList />
        </div>
      </div>

      {/* Carbon Savings */}
      <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-secondary" />
            Today's Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Carbon Avoided</p>
              <p className="text-3xl font-bold text-secondary mt-1">{carbonAvoided} kg CO₂</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cost Savings</p>
              <p className="text-3xl font-bold text-foreground mt-1">₹{costSavings}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Renewable %</p>
              <p className="text-3xl font-bold text-accent mt-1">{renewablePercentage}%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
