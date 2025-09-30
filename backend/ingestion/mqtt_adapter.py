# Placeholder MQTT adapter
# TODO: Replace with paho-mqtt client

class MQTTAdapter:
    def __init__(self, broker="localhost", topic="energy/telemetry"):
        self.broker = broker
        self.topic = topic

    def subscribe(self):
        # Fake telemetry
        return {"device": "wind_turbine", "power_kw": 2.1}
