import React from 'react'
import { Counter }  from './counter'

interface Props{}


export default (props:Props) => {


    return(
      <React.Fragment>
         <Counter initCount={0}/>
         <Counter initCount={30}/>
      </React.Fragment>
    )

}