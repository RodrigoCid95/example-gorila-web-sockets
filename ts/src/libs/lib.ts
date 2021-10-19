import { Library } from "gorila-core"
import { LibConfig } from "interfaces/lib"
export default class Lib extends Library<LibConfig> {
  build() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.profile.message)
      }, 1000)
    })
  }
}