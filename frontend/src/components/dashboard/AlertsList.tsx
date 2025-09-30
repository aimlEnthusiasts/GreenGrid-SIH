import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const alerts = [
  {
    id: 1,
    type: "info",
    title: "Peak demand at 7 PM",
    message: "Charge battery now for optimal savings",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "success",
    title: "Solar efficiency high",
    message: "95% capacity reached at noon",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "warning",
    title: "Wind forecast low",
    message: "Expected 20% below average tomorrow",
    time: "3 hours ago",
  },
];

export function AlertsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Alerts & Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex gap-3 p-3 rounded-lg bg-muted/50 border border-border">
            <div className="flex-shrink-0 mt-0.5">
              {alert.type === "success" && <CheckCircle className="h-4 w-4 text-success" />}
              {alert.type === "info" && <Info className="h-4 w-4 text-info" />}
              {alert.type === "warning" && <AlertCircle className="h-4 w-4 text-warning" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{alert.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{alert.message}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{alert.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
