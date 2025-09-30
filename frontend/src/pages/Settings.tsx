import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, Download, RefreshCw, Database, Bell } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [solarCapacity, setSolarCapacity] = useState("150");
  const [windCapacity, setWindCapacity] = useState("75");
  const [batteryCapacity, setBatteryCapacity] = useState("250");

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "System configuration has been updated successfully.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Generating compliance report. Download will begin shortly.",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
        <p className="text-muted-foreground mt-1">Configure hardware parameters and system preferences</p>
      </div>

      {/* Hardware Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            Hardware Configuration
          </CardTitle>
          <CardDescription>Define installed capacity for each energy source</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="solar">Solar PV Capacity (kW)</Label>
              <Input
                id="solar"
                type="number"
                value={solarCapacity}
                onChange={(e) => setSolarCapacity(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wind">Wind Turbine Capacity (kW)</Label>
              <Input
                id="wind"
                type="number"
                value={windCapacity}
                onChange={(e) => setWindCapacity(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="battery">Battery Capacity (kWh)</Label>
              <Input
                id="battery"
                type="number"
                value={batteryCapacity}
                onChange={(e) => setBatteryCapacity(e.target.value)}
              />
            </div>
          </div>
          <div className="pt-4">
            <Button onClick={handleSave}>
              Save Configuration
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Communication Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Communication Protocols
          </CardTitle>
          <CardDescription>Gateway and device integration settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mqtt">MQTT Broker Address</Label>
              <Input id="mqtt" defaultValue="mqtt://gateway.local:1883" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modbus">Modbus TCP Gateway</Label>
              <Input id="modbus" defaultValue="192.168.1.100:502" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="opcua">OPC-UA Endpoint</Label>
              <Input id="opcua" defaultValue="opc.tcp://plc.local:4840" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bacnet">BACnet Device ID</Label>
              <Input id="bacnet" defaultValue="201" />
            </div>
          </div>
          <div className="pt-4">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Test Connections
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>Configure alert thresholds and recipients</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Alert Email</Label>
              <Input id="email" type="email" defaultValue="admin@dte.rajasthan.gov.in" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">SMS Alert Number</Label>
              <Input id="phone" type="tel" defaultValue="+91 9876543210" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="battery-low">Battery Low Threshold (%)</Label>
              <Input id="battery-low" type="number" defaultValue="20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="peak-demand">Peak Demand Alert (kW)</Label>
              <Input id="peak-demand" type="number" defaultValue="100" />
            </div>
          </div>
          <div className="pt-4">
            <Button onClick={handleSave}>
              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reporting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Compliance Reporting
          </CardTitle>
          <CardDescription>Export data for regulatory submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Generate comprehensive reports for carbon accounting, net metering reconciliation, and DISCOM submissions.
            </p>
            <div className="flex gap-3">
              <Button onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export Monthly Report (PDF)
              </Button>
              <Button variant="outline" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export Data (Excel)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Info */}
      <Card className="bg-gradient-to-br from-muted/50 to-muted/20">
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Platform Version</p>
              <p className="text-lg font-semibold text-foreground mt-1">1.0.0-beta</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Database</p>
              <p className="text-lg font-semibold text-foreground mt-1">InfluxDB 2.7</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Uptime</p>
              <p className="text-lg font-semibold text-foreground mt-1">47 days</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Data Points</p>
              <p className="text-lg font-semibold text-foreground mt-1">2.4M</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
