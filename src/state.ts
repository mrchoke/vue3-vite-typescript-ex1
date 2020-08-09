import { reactive } from 'vue'

export class MyInfo {
  name: string
  nick: string
  constructor() {
    this.name = ''
    this.nick = ''
  }
  get fullname(): string {
    return this.nick && this.name ? `${this.nick} ${this.name}` : ''
  }
}

export interface Counter {
  [k: string]: number
}

export class State {
  myinfo: MyInfo
  counter: Counter
  constructor() {
    this.myinfo = new MyInfo()
    this.counter = {}
  }
}
const state = reactive<State>(new State())
export default state
