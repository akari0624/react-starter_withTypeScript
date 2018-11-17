import React, {Component} from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Styled from 'styled-components'
import { ITVMazeData, Show, Image } from '../entity/TVMazeData'
import { IAppGlobalState } from '../../../reducers/index'
import { acFetchTVMazeData } from '../actions'

interface IState {
}

interface ITVMazeProps {
  tvMazeData: ITVMazeData[];
  acFetchTVMazeData: (searchText: string) => void;
}

const TVMazeShowArticle = Styled.article`
  text-align:center;
  margin:10px 30px 10px 30px;
  border:1px solid #000000;
 `

class ListMain extends Component<ITVMazeProps, IState> {

  constructor(props: ITVMazeProps) {
     super(props)
  }

  componentDidMount() {

    this.props.acFetchTVMazeData('snoopy')
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

const mapDispatchToProps = (dispatch: Dispatch) => (

  bindActionCreators({ acFetchTVMazeData }, dispatch)

)

const mapStateToProps = ({tvMazeData}: IAppGlobalState) => (
  { tvMazeData }
)

export default connect(mapStateToProps, mapDispatchToProps)(ListMain)
