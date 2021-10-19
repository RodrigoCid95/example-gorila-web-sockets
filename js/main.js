const { SocketsServer } = require('gorila-web-sockets');
const controllers = require('./controllers');
const config = require('./config');
const lm = require('./libs');
(async () => {
  const server = new SocketsServer(config, controllers, lm);
  await server.init();
})();