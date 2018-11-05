import { ITodos } from './modalInterface'

export class Todos implements ITodos{

  public todoDesc: string
  constructor(todoDesc: string) {
    this.todoDesc = todoDesc
  }
}
