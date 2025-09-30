import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp, Battery, Sun, ArrowRight, BarChart3, Shield, Lightbulb, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-energy.jpg";
import renewableImage from "@/assets/renewable-energy.jpg";
import controlRoomImage from "@/assets/control-room.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern renewable energy infrastructure" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>
        <div className="container relative z-10 mx-auto px-6 py-32">
          <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <Zap className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                GreenGrid
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-foreground max-w-3xl">
              Renewable Energy Orchestration Platform for Smart Campus Management
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              AI-powered energy optimization for solar, wind, and battery systems with real-time monitoring and predictive analytics. Reduce costs by up to 42% while maximizing renewable energy usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/dashboard">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  Open Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/architecture">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  View Architecture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features for Complete Energy Control
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to monitor, optimize, and manage your renewable energy infrastructure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Real-Time Monitoring</CardTitle>
              <CardDescription>
                Live visualization of energy flow across solar, wind, battery, and grid connections with millisecond updates
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>AI Forecasting</CardTitle>
              <CardDescription>
                24-hour predictions with 92% accuracy using advanced ML models, weather data, and historical patterns
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <Battery className="h-6 w-6 text-success" />
              </div>
              <CardTitle>Smart Optimization</CardTitle>
              <CardDescription>
                Automated battery scheduling and peak shaving algorithms to minimize costs and carbon footprint
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Vendor Neutral</CardTitle>
              <CardDescription>
                Works with any hardware through open protocols: Modbus, OPC-UA, MQTT, BACnet, and REST APIs
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                How GreenGrid Works
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform integrates seamlessly with your existing infrastructure to provide intelligent energy management
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Connect Your Systems</h3>
                    <p className="text-muted-foreground">
                      Integrate solar panels, wind turbines, battery storage, and grid connections through standard protocols
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">AI Learns Your Patterns</h3>
                    <p className="text-muted-foreground">
                      Machine learning algorithms analyze your energy usage, generation patterns, and optimize accordingly
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Automated Optimization</h3>
                    <p className="text-muted-foreground">
                      System automatically adjusts battery charging, peak shaving, and load balancing to minimize costs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={renewableImage} 
                alt="Renewable energy visualization" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">92%</p>
            <p className="text-sm font-medium text-muted-foreground">Forecast Accuracy</p>
            <p className="text-xs text-muted-foreground">ML-powered predictions</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-success to-success/60 bg-clip-text text-transparent">42%</p>
            <p className="text-sm font-medium text-muted-foreground">Cost Reduction</p>
            <p className="text-xs text-muted-foreground">Average savings achieved</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-accent to-accent/60 bg-clip-text text-transparent">24/7</p>
            <p className="text-sm font-medium text-muted-foreground">Real-Time Monitoring</p>
            <p className="text-xs text-muted-foreground">Continuous system tracking</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-secondary to-secondary/60 bg-clip-text text-transparent">Zero</p>
            <p className="text-sm font-medium text-muted-foreground">Vendor Lock-in</p>
            <p className="text-xs text-muted-foreground">Open protocol support</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={controlRoomImage} 
                alt="Smart grid control room" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Built for Modern Energy Systems
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                GreenGrid adapts to diverse environments and energy requirements
              </p>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">University Campuses</CardTitle>
                    <CardDescription>
                      Manage distributed solar arrays, EV charging stations, and building loads across multiple facilities
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Commercial Buildings</CardTitle>
                    <CardDescription>
                      Optimize rooftop solar, battery storage, and HVAC systems to reduce peak demand charges
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Industrial Facilities</CardTitle>
                    <CardDescription>
                      Balance high-power loads with renewable generation and grid services for maximum efficiency
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose GreenGrid?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive benefits that transform your energy management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Reliability First</h3>
            <p className="text-muted-foreground">
              Enterprise-grade uptime with redundant systems and fail-safe controls ensuring continuous operation
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <BarChart3 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Data-Driven Insights</h3>
            <p className="text-muted-foreground">
              Comprehensive analytics and reporting to understand usage patterns and optimize performance
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
              <Lightbulb className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Future-Proof</h3>
            <p className="text-muted-foreground">
              Scalable architecture that grows with your needs and supports emerging technologies
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Energy Management?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join leading organizations using GreenGrid to reduce costs, maximize renewable energy, and achieve sustainability goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Open Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/forecast">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Forecasting
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
