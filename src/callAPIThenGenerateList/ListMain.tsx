import React, {Component} from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import { ITVMazeData, Show, Image } from './entity/TVMazeData'

interface IState {
  errorMsg: string,
  tvMazeData: ITVMazeData[],
}

interface TVMazeProps {

}

 const TVMazeShowArticle = Styled.article`
   text-align:center;
   margin:10px 30px 10px 30px;
   border:1px solid #000000;
 `

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

  renderImage = (show: Show): any => {
    let imageMediumUrl
    const pImage: Image = show.image
    if (pImage) {
      imageMediumUrl =  pImage.medium ?  pImage.medium : undefined
    }

    if (imageMediumUrl) {
      return <img src={imageMediumUrl} />
    }

    return <div>{`暫無圖片`}</div>
  }

  renderTVMazeList = (tvMazeData: ITVMazeData[]) => {
    if (tvMazeData.length === 0) {
      return <div>{`讀取中...`}</div>
    }
 
    return (
      tvMazeData.map(d => (
        <TVMazeShowArticle  key={d.show.id}>
          <div>{d.show.name}</div>
          <div>{this.renderImage(d.show)}</div>
          <div>{d.show.summary}</div>
        </TVMazeShowArticle>)
      )
    )
  }

  render() {
    return (
      <React.Fragment>{this.renderTVMazeList(this.state.tvMazeData)}</React.Fragment>
    )
  }
}
