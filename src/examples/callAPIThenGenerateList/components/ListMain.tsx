import React, {Component} from 'react'
import Styled from 'styled-components'
import { ITVMazeData, Show, Image } from '../entity/TVMazeData'
import { getTVMazeData } from '../viewModels'


interface IState {
}

interface ITVMazeProps {
  tvMazeData: ITVMazeData[],
  afterTVMazeDataFetchComplete: (errorMsg: string, tvMazeData: ITVMazeData[]) => void,
}

const TVMazeShowArticle = Styled.article`
  text-align:center;
  margin:10px 30px 10px 30px;
  border:1px solid #000000;
 `

export default class ListMain extends Component<ITVMazeProps, IState> {

  constructor(props: ITVMazeProps) {
     super(props)
  }

  componentWillMount() {

    getTVMazeData('snoopy', this.props.afterTVMazeDataFetchComplete)
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
      <React.Fragment>
        {this.renderTVMazeList(this.props.tvMazeData)}
      </React.Fragment>
    )
  }
}
