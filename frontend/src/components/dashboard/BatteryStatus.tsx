import { Battery, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface BatteryStatusProps {
  battery: {
    soc: number;
    power: number;
    capacity: number;
    cycles: number;
    health: number;
    status: "charging" | "discharging" | "idle";
  };
}

export function BatteryStatus({ battery }: BatteryStatusProps) {
  const statusLabels = {
    charging: "Charging from Solar",
    discharging: "Discharging to Load",
    idle: "Standby",
  };
  
  const statusColors = {
    charging: "text-warning",
    discharging: "text-info",
    idle: "text-muted-foreground",
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Battery className="h-5 w-5 text-success" />
          Battery System
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">State of Charge</span>
            <span className="text-2xl font-bold text-foreground">{battery.soc.toFixed(1)}%</span>
          </div>
          <Progress value={battery.soc} className="h-3" />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <p className="text-xs text-muted-foreground">Capacity</p>
            <p className="text-sm font-semibold text-foreground mt-1">{battery.capacity} kWh</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Power</p>
            <p className="text-sm font-semibold text-foreground mt-1">{battery.power.toFixed(1)} kW</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cycles</p>
            <p className="text-sm font-semibold text-foreground mt-1">{battery.cycles}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Health</p>
            <p className="text-sm font-semibold text-success mt-1">{battery.health}%</p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Badge variant="outline" className="w-full justify-center py-2">
            <Zap className={`h-3 w-3 mr-2 ${statusColors[battery.status]}`} />
            {statusLabels[battery.status]}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
