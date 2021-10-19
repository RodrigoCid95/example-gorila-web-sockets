import { ConfigLoader } from 'gorila-core'
import GorilaWebSockets from './sockets.config'
export default new ConfigLoader({
  GorilaWebSockets,
  Lib: {
    message: 'Hello client!'
  }
})