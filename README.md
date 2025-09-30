# Hybrid Renewable Energy Orchestration Platform

_A vendor-neutral software framework for orchestrating solar, wind, battery, and grid electricity on government campuses in Rajasthan._

---

## 📌 Overview

Many campuses across Rajasthan have deployed solar PV panels, small wind turbines, and occasional battery systems. However, these assets currently operate in isolation, resulting in:

- Excess solar wasted at peak sun hours,
- Under-utilized batteries due to rule-based charging,
- High grid dependence during cloudy or windless periods,
- Limited visibility for administrators.

This platform provides a **software-centric orchestration layer** to integrate solar, wind, storage, and grid supply into a **virtual power plant (VPP)**. It ingests real-time telemetry, applies forecasting & optimization, and delivers actionable recommendations or automated controls to minimize costs, maximize renewable utilization, and credibly report carbon savings.

---

## 🎯 Key Features

- **Data Ingestion & Integration**

  - Connects to PV inverters, wind controllers, smart meters, and batteries via **Modbus, MQTT, OPC-UA, BACnet**.
  - Vendor-neutral adapters ensure compatibility with diverse hardware.

- **Forecasting & Prediction**

  - Weather-based solar and wind output predictions.
  - Load forecasting from historical consumption patterns.
  - Short-term (hours) + day-ahead (24h) predictions.

- **Optimization & Scheduling**

  - Dynamic decisions: charge/discharge battery, curtail, export surplus, import grid power.
  - Objectives: minimize electricity bill, reduce emissions, ensure reliability for critical loads.
  - Battery health management (depth of discharge, cycle limits).

- **Control & Automation**

  - Real-time commands to edge gateways with safe fallback rules.
  - Supports manual override by facility technicians.

- **Dashboards & Reporting**
  - Real-time energy flow visualization (solar → battery → load → grid).
  - Alerts & actionable recommendations (color-coded thresholds).
  - Historical analytics: demand vs. generation, savings, CO₂ avoided.
  - Exportable reports for **DISCOM compliance** and **GHG Protocol (Scope 2)**.

---

## 🏗️ System Architecture

```plaintext
                +-------------------+
                |   Weather API      |
                +-------------------+
                         |
+-------------+   +---------------+   +----------------+   +---------------+
| Solar PV    |   | Wind Turbine  |   | Battery System |   | Smart Meters  |
+-------------+   +---------------+   +----------------+   +---------------+
       |                  |                    |                   |
       +-----------------------------------------------------------+
                               Edge Gateway
              (Protocols: Modbus, MQTT, OPC-UA, BACnet adapters)
                               |
                               v
                   +---------------------------+
                   |   Data Ingestion Layer    |
                   +---------------------------+
                               |
          +--------------------+--------------------+
          |                                         |
+----------------------+                +--------------------------+
|  Time-Series DB      |                |   Metadata/Config DB     |
+----------------------+                +--------------------------+
          |
          v
+---------------------+      +-----------------------+
| Forecasting Engine  | ---> | Optimization Engine   |
+---------------------+      +-----------------------+
                                      |
                                      v
                            +-----------------------+
                            | Control & Automation  |
                            +-----------------------+
                                      |
                        +-------------------------------+
                        | Dashboards / Reports / Alerts |
                        +-------------------------------+

```

## ⚙️ Workflow

### Device Onboarding

Register PV, wind, battery, and grid meters via open APIs/adapters.

### Data Ingestion

Collect real-time telemetry streams, validate & store in a time-series DB.

### Forecasting

Predict renewable generation (solar/wind) + demand curve using weather + history.

### Optimization

Run scheduling logic (when to charge/discharge battery, import/export grid, curtail).

### Control & Execution

Send optimized commands to devices through edge gateway.

### Failover: default safe operation if connectivity fails.

Visualization & Alerts

### Show real-time flows and KPIs on dashboards.

Trigger technician alerts if thresholds are crossed.

### Reporting

Generate monthly reports on carbon savings, ROI, regulatory compliance.

## 📊 KPIs & Metrics

Energy Mix: % demand met by renewables vs. grid.

Cost Savings: Monthly reduction in energy bills (₹).

Carbon Savings: CO₂ tonnes avoided.

Reliability: Uptime of critical loads (%).

Battery Efficiency: Optimized charge/discharge cycles.

Forecast Accuracy: % deviation between predicted vs. actual.

## 📦 Tech Stack (Suggested)

Backend: Python (FastAPI) or Node.js (Express)

Data Storage: InfluxDB (time-series), PostgreSQL (metadata)

Forecasting: ML models (Prophet, XGBoost, or TensorFlow Lite)

Optimization: Linear programming / MILP solvers (Pyomo, OR-Tools)

Messaging/IoT: MQTT broker (Eclipse Mosquitto)

Frontend: React + Tailwind CSS (with Recharts/Plotly)

Deployment: Docker + Kubernetes (for scalability)

## 🛡️ Interoperability & Compliance

Protocols Supported: Modbus, MQTT, OPC-UA, BACnet

Data Standards: OpenADR, JSON/CSV APIs for reporting

Regulations:

Net-metering policies of Rajasthan DISCOM

GHG Protocol Scope 2 for carbon reporting

Renewable Purchase Obligations (RPO)

## 🚀 Prototype Goals

Run as a proof-of-concept on one campus block with existing PV + small wind + battery.

Demonstrate measurable benefits in cost savings & renewable utilization within 1–3 months.

Provide a replicable template for other government institutions.

📂 Repository Structure (Suggested)
/project-root
├── backend/ # FastAPI/Node.js backend
│ ├── ingestion/ # Protocol adapters (Modbus, MQTT, OPC-UA)
│ ├── forecasting/ # ML models & pipelines
│ ├── optimization/ # Scheduling engine
│ ├── control/ # Automation & edge gateway integration
│ └── api/ # REST/GraphQL APIs
│
├── frontend/ # React dashboards
│ ├── components/
│ ├── pages/
│ └── charts/
│
├── database/ # DB schemas & migrations
├── docs/ # Documentation & reports
└── README.md # You are here

## 📌 Future Enhancements

Integration with EV charging stations on campus.

AI-driven demand-side load shifting for HVAC, labs, and workshops.

Blockchain-based peer-to-peer energy trading between campuses.

Predictive maintenance alerts for solar panels and turbines.

## 🏆 Acknowledgments

Directorate of Technical Education (DTE), Government of Rajasthan

Campus facilities managers & technicians for operational insights

Hackathon team contributors
