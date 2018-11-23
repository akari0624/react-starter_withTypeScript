import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

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
      <h4>Examples :</h4>
      <div>
        <div>
          <Link to="/counter">Counter</Link>
        </div>
        <div>
          <Link to="/todos">todo list</Link>
        </div>
        <div>
          <Link to="/tvmaze">fetch an API, generate a list manage state without REDUX</Link>
        </div>
        <div>
          <Link to="/tvmaze_redux">fetch an API, generate a list, manage global app state with REDUX</Link>
        </div>
      </div>
    </MiddleDiv>
  )

}
