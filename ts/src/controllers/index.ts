import { SocketControllers } from "gorila-web-sockets"
import HomeController from "./home.controller"
const controllers: SocketControllers = [HomeController]
export default controllers