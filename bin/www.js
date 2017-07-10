var models = require('../models');
models.sequelize.sync().then(function() {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
});
