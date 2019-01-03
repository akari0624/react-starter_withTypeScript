import React, { Component } from 'react'
import { bind } from '../../utils_func/decorator_utils'

interface Props {}

interface State {
  name: string;
}

export default class IndexPage extends Component < Props,
State > {

  name: string
  state: State

  constructor(props : Props) {
    super(props)
    this.state = { name: 'XXXXX' }
    this.name = 'Morris'
  }

  showshowName(): string { return this.showName() }

  private showName() : string { return this.name + this.state.name }

   @bind
  private changeName(evt: React.ChangeEvent<HTMLInputElement>){

    this.setState({
      name: evt.target.value,
    })

  }

  render() {

    return (
      <div>
      <input value={this.state.name} onChange={this.changeName}/>
      <div>{this.showshowName()}</div>
    </div>
    )

  }

}
