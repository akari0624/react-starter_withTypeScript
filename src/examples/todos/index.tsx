import React, { Component } from 'react'
import TodoListArea from './components/todoMain'
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
  editingTodoIndex: number,
}

interface IProps {
  // dataArr: Todos[],
}

export default class TodoAppIndex extends Component<IProps, IState> {


  readonly state: IState = {

    dataArr: testData,
    editingTodoIndex: null,
    
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

  changeEditingTodoIndex = (newIndex: number) => {

    this.setState(prevState => ({
      editingTodoIndex: newIndex,
    }))
  }

  render(){
    return (
      <React.Fragment>
        <AddTodoInput addNewTodo={this.addNewTodo}/>
        <TodoListArea
          dataArr={this.state.dataArr} 
          editingTodoIndex={this.state.editingTodoIndex} 
          changeEditingTodoIndex={this.changeEditingTodoIndex} 
        />
      </React.Fragment>
    )
  }
}
