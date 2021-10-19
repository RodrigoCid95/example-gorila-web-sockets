import { setModel, logger } from "gorila-core"
import { On, SocketController } from "gorila-web-sockets"
import HomeModel from "./../models/home.model"
export default class HomeController extends SocketController {
  @setModel(HomeModel) model: HomeModel
  @On('message')
  public message(firstGreeting: string, secondGreeting: string) {
    logger(firstGreeting)
    logger(secondGreeting)
    return this.model.getMessage()
  }
}