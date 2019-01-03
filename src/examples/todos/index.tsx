import React, { Component } from 'react'
import TodoMain from './components/todoMain'
import AddTodoInput from './components/AddTodoInput'
import { Todos }  from './entity/modelClass'

interface IProps {}

const testData: Todos[] = [
  new Todos('learn typeScript'),
  new Todos('config tslint'),
  new Todos('test webpack'),
]

interface IState {
  dataArr: Todos[],
}

interface IProps {
  // dataArr: Todos[],
}

export default class TodoAppIndex extends Component<IProps, IState> {


  readonly state: IState = {

    dataArr: testData,

  }

  constructor(props: IProps) {
    super(props)

  }

  addNewTodo = (newTodo: Todos) => {
    this.setState(prevState => {
      return {

        dataArr: [...prevState.dataArr, newTodo]
      }
    })
  }

  render(){
    return (
      <React.Fragment>
        <AddTodoInput addNewTodo={this.addNewTodo}/>
        <TodoMain  dataArr={this.state.dataArr} />
      </React.Fragment>
    )
  }
}
