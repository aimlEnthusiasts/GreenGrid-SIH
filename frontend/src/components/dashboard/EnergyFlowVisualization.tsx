import { Sun, Wind, Battery, Home, Zap, ArrowRight } from "lucide-react";
import { useEnergyData } from "@/hooks/useEnergyData";

export function EnergyFlowVisualization() {
  const { data } = useEnergyData();
  return (
    <div className="py-8">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        {/* Generation Sources */}
        <div className="flex flex-col gap-8">
          <SourceNode icon={Sun} label="Solar PV" value={`${data.solar} kW`} color="accent" active={data.solar > 0} />
          <SourceNode icon={Wind} label="Wind" value={`${data.wind} kW`} color="info" active={data.wind > 0} />
          <SourceNode icon={Zap} label="Grid" value={`${data.grid} kW`} color="primary" active={data.grid > 0} />
        </div>

        {/* Flow Arrows */}
        <div className="flex flex-col items-center gap-6 mx-8">
          <FlowArrow />
          <FlowArrow />
          <FlowArrow />
        </div>

        {/* Battery */}
        <div className="flex flex-col items-center">
          <BatteryNode value={`${data.battery.soc}%`} charging={data.battery.status === "charging"} />
        </div>

        {/* Flow Arrows */}
        <div className="flex flex-col items-center gap-6 mx-8">
          <FlowArrow />
        </div>

        {/* Load */}
        <div className="flex flex-col items-center">
          <LoadNode value={`${data.load} kW`} />
        </div>
      </div>
    </div>
  );
}

function SourceNode({ icon: Icon, label, value, color, active }: any) {
  const colorClasses = {
    accent: "bg-accent/10 border-accent text-accent",
    info: "bg-info/10 border-info text-info",
    primary: "bg-primary/10 border-primary text-primary",
    success: "bg-success/10 border-success text-success",
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`h-16 w-16 rounded-xl border-2 flex items-center justify-center ${colorClasses[color]}`}>
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-lg font-bold text-foreground">{value}</p>
        {active && (
          <div className="flex items-center gap-1 mt-1">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-success">Active</span>
          </div>
        )}
      </div>
    </div>
  );
}

function BatteryNode({ value, charging }: any) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-20 w-20 rounded-xl border-2 border-success bg-success/10 flex items-center justify-center">
        <Battery className="h-10 w-10 text-success" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">Battery</p>
        <p className="text-xl font-bold text-foreground">{value}</p>
        {charging && (
          <div className="flex items-center gap-1 mt-1 justify-center">
            <div className="h-2 w-2 rounded-full bg-warning animate-pulse" />
            <span className="text-xs text-warning">Charging</span>
          </div>
        )}
      </div>
    </div>
  );
}

function LoadNode({ value }: any) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-20 w-20 rounded-xl border-2 border-foreground/20 bg-muted flex items-center justify-center">
        <Home className="h-10 w-10 text-foreground" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">Campus Load</p>
        <p className="text-xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center">
      <div className="h-1 w-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse" />
      <ArrowRight className="h-6 w-6 text-primary -ml-2" />
    </div>
  );
}
