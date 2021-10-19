const { __decorate, setModel, logger } = require('gorila-core');
const { SocketController, On } = require('gorila-web-sockets');
const HomeModel = require('./../models/home.model');
class HomeController extends SocketController {
  constructor(...args) {
    __decorate([setModel(HomeModel)], HomeController.prototype, 'model', void 0);
    super(...args);
  }
  message(firstGreeting, secondGreeting) {
    logger(firstGreeting);
    logger(secondGreeting);
    return this.model.getMessage();
  }
}
__decorate([On('message')], HomeController.prototype, 'message', void 0);
module.exports = HomeController;