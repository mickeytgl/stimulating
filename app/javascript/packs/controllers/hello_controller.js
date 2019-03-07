import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ "name" ]

  connect() {
    console.log("Hello Stimulus")
    this.nameTarget.value = this.name
  }

  log() {
    console.log(this.nameTarget.value)
  }

  paste(event) {
    event.preventDefault()
    console.log("pastes are not allowed")
  }

  get name() {
    if (this.data.has("name")) {
      return this.data.get("name")
    } else {
      return "Default"
    }
  }

}
