import React from 'react'
import { ITodos } from '../entity/modalInterface'
import { doThingsDependOnShape } from '../../../utils_func/others'

interface IProps {
  dataArr: ITodos[]
}

interface IState {

  dataArr: ITodos[]
}

const renderTodoList = (dataArr: ITodos[]) => (dataArr.map((d, index) => <div key={d.todoDesc+index}>{d.todoDesc}</div>))

export default function todoMain(props: IProps, state: IState) {


   const result = doThingsDependOnShape({ name:'circle', radius:20 })


  return (
    <div>
      {renderTodoList(props.dataArr)}
      {result}
    </div>
  )
}
