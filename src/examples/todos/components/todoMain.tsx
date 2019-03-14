import React from 'react'
import { ITodos } from '../entity/modalInterface'
import { doThingsDependOnShape } from '../../../utils_func/others'
import TodoItem from './TodoItem'
import TodoItemInEditing from './ToDoItemInEditing'

interface IProps {
  dataArr: ITodos[],
  editingTodoIndex: number,
  changeEditingTodoIndex: (newEditingIndex:number) => void
}

interface IState {

  dataArr: ITodos[]
}

const renderTodoList = (dataArr: ITodos[], changeEditingTodoIndex: (newEditingIndex:number) => void, editingTodoIndex: number) => 
  dataArr.map((d, index) => 
    {
      if(index === editingTodoIndex){
         return <TodoItemInEditing key={d.todoDesc+index} data={d} indexInArr={index} changeEditingTodoIndex={changeEditingTodoIndex} />
      }
      return <TodoItem key={d.todoDesc+index} data={d} indexInArr={index} changeEditingTodoIndex={changeEditingTodoIndex}/>
    }
  )




export default function todoMain(props: IProps, state: IState) {


   const result = doThingsDependOnShape({ name:'circle', radius:20 })


  return (
    <div>
      {renderTodoList(props.dataArr, props.changeEditingTodoIndex, props.editingTodoIndex)}
      {result}
    </div>
  )
}
