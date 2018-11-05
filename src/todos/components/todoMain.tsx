import React from 'react'
import { ITodos } from '../entity/modalInterface'

interface IProps {
  dataArr: ITodos[]
}

const renderTodoList = (dataArr: ITodos[]) => (dataArr.map(d => <div>{d.todoDesc}</div>))

export default function todoMain(props: IProps) {
  return (
    <div>
      {renderTodoList(props.dataArr)}
    </div>
  )
}
