import { SocketsServer } from 'gorila-web-sockets'
import controllers from './controllers'
import config from './config'
import lm from './libs'
(async () => {
  const server = new SocketsServer(config, controllers, lm)
  await server.init()
})()