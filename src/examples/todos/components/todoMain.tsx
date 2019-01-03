import React from 'react'
import { ITodos } from '../entity/modalInterface'
import { doThingsDependOnShape } from '../../../utils_func/others'

interface IProps {
  dataArr: ITodos[]
}

const renderTodoList = (dataArr: ITodos[]) => (dataArr.map(d => <div>{d.todoDesc}</div>))

export default function todoMain(props: IProps) {


   const result = doThingsDependOnShape({ name:'circle', radius:20 })


  return (
    <div>
      {renderTodoList(props.dataArr)}
      {result}
    </div>
  )
}
