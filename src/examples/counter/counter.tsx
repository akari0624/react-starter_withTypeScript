import React, {Component} from 'react'
import Styled from 'styled-components'

interface StatefulProps{
    initCount: number
}

interface CountState{

  readonly count:number
}

const MainDIV = Styled.div`
  text-align:center;
`

const NumberShowDiv = Styled.div`
  text-align:center;
  font-size:30px;
  color:#000000;
`

const TheButton = Styled.button`
  font-size:14px;
  color:#000000;
  text-align:center;
  margin-left:10px;
  padding:5px;
`


export  class Counter extends Component<StatefulProps, CountState>{


    readonly state: CountState = {
      count: this.props.initCount || 0,
    }

    handleIncrease = (e:any) => {

      this.setState({count:this.state.count+1})
    }

    handleDecrease = (e:any) => {

      this.setState({count: this.state.count === 0 ? 0 : this.state.count-1})
    }


  render(){

      return(
          <MainDIV>
            <NumberShowDiv>{this.state.count}</NumberShowDiv>
            <TheButton onClick={this.handleIncrease}>{`+1`}</TheButton>
            <TheButton onClick={this.handleDecrease}>{`-1`}</TheButton>
          </MainDIV>
      )


  }

}

