import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Layers, Radio, Server, Smartphone } from "lucide-react";

const Architecture = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">System Architecture</h1>
        <p className="text-muted-foreground mt-1">Three-layer orchestration platform design</p>
      </div>

      {/* Architecture Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Layers</CardTitle>
          <CardDescription>Edge → Cloud → User interaction flow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 py-4">
            {/* User Layer */}
            <LayerSection
              icon={Smartphone}
              title="User Layer"
              color="accent"
              components={[
                "Web Dashboard - Real-time monitoring & control",
                "Mobile App - Technician alerts & quick actions",
                "Reporting Engine - Carbon & compliance exports",
              ]}
            />

            {/* Cloud/Server Layer */}
            <LayerSection
              icon={Cloud}
              title="Cloud/Server Layer"
              color="primary"
              components={[
                "Data Ingestion Pipeline - MQTT, Modbus, OPC-UA",
                "Time-Series Database - Sensor telemetry storage",
                "Forecasting Service - Weather + ML predictions",
                "Optimization Engine - Battery & load scheduling",
                "Control Service - Setpoint commands with fail-safes",
              ]}
            />

            {/* Edge Layer */}
            <LayerSection
              icon={Radio}
              title="Edge Layer"
              color="success"
              components={[
                "IoT Gateways - Local data collection & buffering",
                "Protocol Adapters - Modbus, BACnet translation",
                "Edge Analytics - Anomaly detection & health checks",
                "Local Control - Emergency disconnect logic",
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Data Flow */}
      <Card>
        <CardHeader>
          <CardTitle>Data Flow</CardTitle>
          <CardDescription>End-to-end orchestration workflow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FlowStep
              number="1"
              title="Device Integration"
              description="Sensors send data via gateways using open protocols"
            />
            <FlowStep
              number="2"
              title="Ingestion & Storage"
              description="Telemetry validated and stored in time-series DB"
            />
            <FlowStep
              number="3"
              title="Forecast & Optimize"
              description="ML predicts output/demand; engine optimizes dispatch"
            />
            <FlowStep
              number="4"
              title="Control & Visualize"
              description="Commands sent to devices; dashboards update in real-time"
            />
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              Backend Stack
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <TechItem label="Message Queue" value="MQTT Broker (Mosquitto)" />
            <TechItem label="Time-Series DB" value="InfluxDB / TimescaleDB" />
            <TechItem label="API Server" value="Node.js + Express / Python FastAPI" />
            <TechItem label="Forecasting" value="TensorFlow / Scikit-learn" />
            <TechItem label="Optimization" value="Linear Programming (PuLP / CBC)" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-secondary" />
              Integration Protocols
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <TechItem label="PV Inverters" value="Modbus TCP/RTU" />
            <TechItem label="Wind Controllers" value="OPC-UA / Modbus" />
            <TechItem label="BMS" value="CAN Bus / Modbus" />
            <TechItem label="Smart Meters" value="MQTT / BACnet" />
            <TechItem label="Weather API" value="REST / JSON" />
          </CardContent>
        </Card>
      </div>

      {/* Compliance */}
      <Card className="border-success/20 bg-success/5">
        <CardHeader>
          <CardTitle>Interoperability & Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Badge variant="outline" className="mb-2">Vendor Neutral</Badge>
              <p className="text-sm text-muted-foreground">
                Supports multiple hardware brands through open protocols
              </p>
            </div>
            <div>
              <Badge variant="outline" className="mb-2">Net Metering</Badge>
              <p className="text-sm text-muted-foreground">
                Compliant with DISCOM export regulations
              </p>
            </div>
            <div>
              <Badge variant="outline" className="mb-2">Carbon Reporting</Badge>
              <p className="text-sm text-muted-foreground">
                Aligned with GHG Protocol Scope 2
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

function LayerSection({ icon: Icon, title, color, components }: any) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    success: "bg-success/10 text-success border-success/20",
  };

  return (
    <div className="relative">
      <div className="flex items-start gap-4">
        <div className={`h-12 w-12 rounded-lg border-2 flex items-center justify-center flex-shrink-0 ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
          <ul className="space-y-2">
            {components.map((comp: string, idx: number) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{comp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FlowStep({ number, title, description }: any) {
  return (
    <div className="relative">
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
          {number}
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

function TechItem({ label, value }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}

export default Architecture;
