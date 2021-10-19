import { Model, setLib } from "gorila-core"
export default class HomeModel extends Model {
  @setLib('Lib') lib: string
  public getMessage() {
    return this.lib
  }
}