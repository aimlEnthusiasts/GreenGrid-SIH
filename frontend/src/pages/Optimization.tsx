import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Lightbulb, Battery, Zap, TrendingDown, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Optimization = () => {
  const { toast } = useToast();
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [peakShaving, setPeakShaving] = useState(true);
  const [exportEnabled, setExportEnabled] = useState(false);

  const handleApplyRecommendation = (action: string) => {
    toast({
      title: "Action Applied",
      description: `${action} has been executed successfully.`,
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Energy Optimization</h1>
          <p className="text-muted-foreground mt-1">AI-powered recommendations and control</p>
        </div>
        <Badge variant="outline" className="text-sm px-4 py-2">
          <CheckCircle className="h-4 w-4 mr-2 text-success" />
          Auto-Optimization Active
        </Badge>
      </div>

      {/* Optimization Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Optimization Settings</CardTitle>
          <CardDescription>Configure automatic energy management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-optimize" className="text-base font-medium">
                Auto-Optimization
              </Label>
              <p className="text-sm text-muted-foreground">
                Automatically optimize battery charge/discharge cycles
              </p>
            </div>
            <Switch
              id="auto-optimize"
              checked={autoOptimize}
              onCheckedChange={setAutoOptimize}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="peak-shaving" className="text-base font-medium">
                Peak Shaving
              </Label>
              <p className="text-sm text-muted-foreground">
                Reduce grid import during peak demand periods
              </p>
            </div>
            <Switch
              id="peak-shaving"
              checked={peakShaving}
              onCheckedChange={setPeakShaving}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="export" className="text-base font-medium">
                Grid Export
              </Label>
              <p className="text-sm text-muted-foreground">
                Export excess generation to grid (net metering)
              </p>
            </div>
            <Switch
              id="export"
              checked={exportEnabled}
              onCheckedChange={setExportEnabled}
            />
          </div>
        </CardContent>
      </Card>

      {/* Active Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-warning" />
            Active Recommendations
          </CardTitle>
          <CardDescription>AI-generated optimization suggestions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RecommendationCard
            priority="high"
            title="Charge Battery Before Peak"
            description="Peak demand expected at 7 PM (105 kW). Charge battery to 90% by 6 PM to reduce grid dependency by ₹847."
            savings="₹847"
            carbon="42 kg CO₂"
            onApply={() => handleApplyRecommendation("Battery pre-charge schedule")}
          />
          
          <RecommendationCard
            priority="medium"
            title="Enable Peak Shaving"
            description="Discharge battery during 6-9 PM to reduce peak demand charges. Estimated savings: ₹1,200/month."
            savings="₹1,200/mo"
            carbon="85 kg CO₂"
            onApply={() => handleApplyRecommendation("Peak shaving mode")}
          />
          
          <RecommendationCard
            priority="low"
            title="Solar Curtailment Alert"
            description="Battery at 95% capacity. Consider enabling grid export to utilize excess solar generation (18 kW available)."
            savings="₹324"
            carbon="15 kg CO₂"
            onApply={() => handleApplyRecommendation("Grid export activation")}
          />
        </CardContent>
      </Card>

      {/* Optimization Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-success" />
              Cost Optimization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <span className="text-sm text-muted-foreground">Grid Cost Reduction</span>
              <span className="text-lg font-bold text-success">-42%</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <span className="text-sm text-muted-foreground">Peak Demand Savings</span>
              <span className="text-lg font-bold text-foreground">₹2,847/day</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <span className="text-sm text-muted-foreground">Monthly Projection</span>
              <span className="text-lg font-bold text-foreground">₹85,410</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">Annual Savings</span>
              <span className="text-lg font-bold text-foreground">₹10.2L</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Battery className="h-5 w-5 text-success" />
              Battery Optimization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <span className="text-sm text-muted-foreground">Cycle Efficiency</span>
              <span className="text-lg font-bold text-success">94.2%</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <span className="text-sm text-muted-foreground">Self-Consumption</span>
              <span className="text-lg font-bold text-foreground">87.5%</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <span className="text-sm text-muted-foreground">Charge Cycles/Day</span>
              <span className="text-lg font-bold text-foreground">1.8</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">Estimated Lifespan</span>
              <span className="text-lg font-bold text-foreground">12.4 years</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Algorithm Info */}
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Optimization Algorithm</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Mixed Integer Linear Programming (MILP)</strong> optimizes battery dispatch, load shifting, and grid interaction based on:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 ml-4">
              <li>• Weather forecasts (solar irradiance, wind speed)</li>
              <li>• Historical load patterns and demand predictions</li>
              <li>• Time-of-use tariffs and peak demand charges</li>
              <li>• Battery state of charge, health, and cycle limits</li>
              <li>• Grid export pricing and net metering regulations</li>
            </ul>
            <div className="pt-3 border-t mt-4">
              <p className="text-sm">
                <span className="font-medium text-foreground">Solver:</span> <span className="text-muted-foreground">CBC (COIN-OR Branch and Cut)</span>
              </p>
              <p className="text-sm mt-1">
                <span className="font-medium text-foreground">Optimization Horizon:</span> <span className="text-muted-foreground">24 hours, refreshed every 15 minutes</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface RecommendationCardProps {
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  savings: string;
  carbon: string;
  onApply: () => void;
}

function RecommendationCard({ priority, title, description, savings, carbon, onApply }: RecommendationCardProps) {
  const priorityColors = {
    high: "bg-destructive/10 text-destructive border-destructive/30",
    medium: "bg-warning/10 text-warning border-warning/30",
    low: "bg-info/10 text-info border-info/30",
  };

  const priorityLabels = {
    high: "High Priority",
    medium: "Medium Priority",
    low: "Low Priority",
  };

  return (
    <div className="p-4 border rounded-lg bg-card">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={priorityColors[priority]}>
              {priorityLabels[priority]}
            </Badge>
          </div>
          <h4 className="font-semibold text-foreground mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Savings: </span>
            <span className="font-semibold text-success">{savings}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Carbon: </span>
            <span className="font-semibold text-secondary">{carbon}</span>
          </div>
        </div>
        <Button size="sm" onClick={onApply}>
          Apply Now
        </Button>
      </div>
    </div>
  );
}

export default Optimization;
