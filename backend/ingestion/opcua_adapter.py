# Placeholder OPC-UA adapter
# TODO: Replace with freeopcua implementation

class OPCUAAdapter:
    def __init__(self, endpoint="opc.tcp://localhost:4840"):
        self.endpoint = endpoint

    def read_value(self, node_id="ns=2;s=Power"):
        return {"node": node_id, "value": 3.4}
