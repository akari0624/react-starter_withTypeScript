import React, { Component } from 'react'
import { Todos }  from '../entity/modelClass'

interface IState {

  addingTodo: string,

}

interface IProps { 
  addNewTodo: (newTodo: Todos) => void,
}


export default class AddTodoInput extends Component<IProps, IState> {


  readonly state: IState = {
    addingTodo: '',
  }

  constructor(props:IProps){
    super(props)
  }

  handleAddTodo = (evt: React.FormEvent<HTMLFormElement>): void => {

    evt.preventDefault()

    const addingTodoDesc = this.state.addingTodo
    if(addingTodoDesc === '') {
      console.log('no value')
      return
    }

    this.props.addNewTodo(new Todos(addingTodoDesc))
    this.setAddingTodoToEmpty()

  }

  setAddingTodoToEmpty = (): void => {
    this.setState(
      prevState => {
        return { addingTodo: '', }
      }
    )
  }

  handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

    const inputTargetRef = evt.target

    this.setState(
      prevState => {
        return { addingTodo: inputTargetRef.value, }
      }
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input value={this.state.addingTodo} onChange={this.handleInputChange}/>
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}
