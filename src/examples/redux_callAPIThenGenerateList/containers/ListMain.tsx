import React, {Component} from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Styled from 'styled-components'
import { ITVMazeData, Show, Image } from '../entity/TVMazeData'
import { IAppGlobalState } from '../../../reducers'
import { acFetchTVMazeData, removeErrorMsgWhenCloseErrorMsgAlert } from '../actions'
import { Alert } from 'antd'
import 'antd/lib/alert/style'
interface IState {
}

interface DispatchProps {
  acFetchTVMazeData: (searchText: string) => void;
  removeErrorMsgWhenCloseErrorMsgAlert: () => void;
}

interface FromReduxSataeProps {
  tvMazeData: ITVMazeData[];
  errorMsg: string;
}

interface OwnProps {}

type ITVMazeProps = FromReduxSataeProps & DispatchProps & OwnProps

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
          <div dangerouslySetInnerHTML={{__html: d.show.summary}} />
        </TVMazeShowArticle>)
      )
    )
  }

  onErrorMsgAlertClose = (evt: React.MouseEvent<HTMLAnchorElement>): void => {

    this.props.removeErrorMsgWhenCloseErrorMsgAlert()

  }

  isRenderingAlert = (errorMsg: string) => {

    if (errorMsg) {
      return (
        <Alert type="error"
               message={errorMsg}
               banner
               closable
               onClose={this.onErrorMsgAlertClose}
        />
              )
    }

  }

  render() {

    const {errorMsg, tvMazeData} = this.props
    return (
      <React.Fragment>
        {this.isRenderingAlert(errorMsg)}
        {this.renderTVMazeList(tvMazeData)}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => (

  bindActionCreators({ acFetchTVMazeData, removeErrorMsgWhenCloseErrorMsgAlert }, dispatch)

)

const mapStateToProps = ({errorMsg, tvMazeData}: IAppGlobalState) => (
  { errorMsg, tvMazeData }
)

export default connect<FromReduxSataeProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(ListMain)
