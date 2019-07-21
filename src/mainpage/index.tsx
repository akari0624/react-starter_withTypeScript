import React from 'react'
import Styled from 'styled-components'
import { DKEffect } from '../../asserts'

interface Props {
  // onClick: Function;
}

const MiddleDiv = Styled.div`
  text-align:center;
`

export const helloText =
  'Greeting from React with TypeScript + bundle in webpack'

export default (props: Props) => {
  return (
    <MiddleDiv>
      <h3>{helloText}</h3>
      <img src={DKEffect} />
    </MiddleDiv>
  )
}
