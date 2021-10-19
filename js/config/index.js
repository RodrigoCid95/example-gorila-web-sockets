const { ConfigLoader } = require('gorila-core');
const gorilaWebSockets = require('./sockets.config')
module.exports = new ConfigLoader({
  GorilaWebSockets: gorilaWebSockets,
  Lib: {
    message: 'Hello client!'
  }
});