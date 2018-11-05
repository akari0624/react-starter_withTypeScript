import React from 'react'
import TodoMain from './components/todoMain'
import { Todos }  from './entity/modelClass'

interface IProps {}

const testData: Todos[] = [
  new Todos('learn typeScript'),
  new Todos('config tslint'),
  new Todos('test webpack'),
]

export default(props: IProps) => {

  return <TodoMain  dataArr={testData} />
}
