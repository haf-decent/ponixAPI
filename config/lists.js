module.exports = {
    "bots": {
        "valve": {
            "LvI": {"pin": 7, "state": 0},
            "Mv": {"pin": 0, "state": 0},
            "RvI": {"pin": 31, "state": 0},
            "LvO": {"pin": 13, "state": 0},
            "RvO": {"pin": 24, "state": 0}
        },
        "pump": {
            "Lp": {"pin": 10, "state": 0},
            "Mp": {"pin": 11, "state": 0},
            "Rp": {"pin": 29, "state": 0}
        },
        "peri": {
            "pp1": {"pin": 16, "state": 0},
            "pp2": {"pin": 0, "state": 0},
            "pp3": {"pin": 19, "state": 0},
            "pp4": {"pin": 18, "state": 0},
            "pp5": {"pin": 0, "state": 0},
            "pp6": {"pin": 23, "state": 0},
            "pp7": {"pin": 0, "state": 0},
            "pp8": {"pin": 22, "state": 0}
        }
    },
    "sensors": {
        "waterHeight1": {"value": 10},
        "waterTemp1": {"value": 50},
        "humiTemp1": {"value": [0,0]}
    },
    "sequences": {
        "initialize": [],
        "dose": ['week', 'target'],
        "drain": ['target']
    },
    "controllers": {
        "P1": {"IP": '', "bots": []}
    }
}