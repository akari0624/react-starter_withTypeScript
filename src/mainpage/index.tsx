import React from 'react'
import Styled from 'styled-components'

/** in Typescript, we need to write a interface(I feel more like a protocol) to the incoming props
 *  so tsc(TypeScript Compiler) can help us check the type in compile time
 *  https://stackoverflow.com/a/49280215/5599652
 * 
*/
interface Props {
  // onClick: Function;
}

const MiddleDiv = Styled.div`
  text-align:center;
`

export default(props: Props) => {
  return (
    <MiddleDiv>
      <h3>Greeting from React with TypeScript + bundle in webpack</h3>
    </MiddleDiv>
  )
}
