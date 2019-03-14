import React, { ReactChild } from 'react'
import Styled from 'styled-components'
import {ITodos} from '../entity/modalInterface'

const BordedDiv = Styled.div`
  border:1px solid #000000;
`



type TodoItemProps = {
  data: ITodos,
  indexInArr:number,
  changeEditingTodoIndex: (newEditingIndex:number) => void,
}



export default function TodoItem(props:TodoItemProps) {


  const changeEditingTodoIndex = (newIndex:number) => props.changeEditingTodoIndex(newIndex)

  return (
    <BordedDiv onDoubleClick={changeEditingTodoIndex.bind(this, props.indexInArr)}>
      {props.data.todoDesc}
    </BordedDiv>
  )
}
