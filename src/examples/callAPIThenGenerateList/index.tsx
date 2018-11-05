import React, {Component} from 'react'
import TVMazeList from './components/ListMain'
import SearchInput from './components/SearchInput'
import {ITVMazeData} from './entity/TVMazeData'

interface IProps {}

interface IState {
  errorMsg: string,
  tvMazeData: ITVMazeData[]
}

class TVMazeExampleIndex extends Component < IProps,
IState > {

  readonly state: IState

  constructor(props : IProps) {
    super(props)

    this.state = {
      errorMsg: '',
      tvMazeData: [],
    }

  }

  afterTVMazeDataFetchComplete = (errorMsg: string, tvMazeData: ITVMazeData[]): void => {
    this.setState({
      errorMsg, tvMazeData,
    })
  }

  render() {
    return (
      <div>
        <SearchInput afterTVMazeDataFetchComplete={this.afterTVMazeDataFetchComplete} />
        <TVMazeList
          tvMazeData={this.state.tvMazeData}
          afterTVMazeDataFetchComplete={this.afterTVMazeDataFetchComplete}
        />
      </div>
    )

  }

}

export default TVMazeExampleIndex
