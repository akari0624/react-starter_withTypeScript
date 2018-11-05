import React, {Component} from 'react'
import axios from 'axios'

interface IState {
  errorMsg: string,
  tvMazeData: any[],
}

interface TVMazeProps {

}

export default class ListMain extends Component<TVMazeProps, IState> {

  readonly tvmazeBaseURL: string = 'http://api.tvmaze.com/search/shows?q='

  readonly state: IState = {
    errorMsg: '',
    tvMazeData: [],
  };

  constructor(props: TVMazeProps) {
     super(props)
  }

  componentWillMount() {

    this.getTVMazeData('snoopy')
  }

  getTVMazeData = (serachWords: string) => {
    const pResult = axios.get(`${this.tvmazeBaseURL}${serachWords}`)

    pResult.then(p => this.setState({tvMazeData: p.data})).catch(err => this.setState({errorMsg: err}))
  }

  renderTVMazeList = (tvMazeData: any[]) => {
    if (tvMazeData.length === 0) {
      return <div>{`讀取中...`}</div>
    }

    return (
      tvMazeData.map(d => <div key={d.show.id}>{d.show.name}</div>)
    )
  }

  render() {
    return (
      <React.Fragment>{this.renderTVMazeList(this.state.tvMazeData)}</React.Fragment>
    )
  }
}
