const botRoutes = require('./bot_routes'),
      sensorRoutes = require('./sensor_routes'),
      sequenceRoutes = require('./sequence_routes');
module.exports = function(app, db) {
    botRoutes(app, db);
    sequenceRoutes(app, db);
    sensorRoutes(app, db);
};