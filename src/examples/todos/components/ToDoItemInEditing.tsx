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



export default function TodoItemInEditing(props:TodoItemProps) {


  const changeEditingTodoIndex = (newIndex:number) => props.changeEditingTodoIndex(newIndex)

  return (
    <BordedDiv onDoubleClick={changeEditingTodoIndex.bind(this, props.indexInArr)}>
      <input value={props.data.todoDesc} />
      <button type="button">確定</button>
      <button type="button">取消</button>
    </BordedDiv>
  )
}
