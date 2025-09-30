# Placeholder Modbus adapter
# TODO: Replace with pymodbus integration

class ModbusAdapter:
    def __init__(self, host="127.0.0.1", port=502):
        self.host = host
        self.port = port

    def read_data(self):
        # Fake telemetry
        return {"voltage": 230, "current": 5.5, "power_kw": 1.2}
