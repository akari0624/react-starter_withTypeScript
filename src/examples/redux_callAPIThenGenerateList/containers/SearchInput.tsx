import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import Styled from 'styled-components'

import { acFetchTVMazeData, IActionFetchTVMazeData } from '../actions'
// import { connect } from '../../../utils_func/decorator_utils';
import { connect } from 'react-redux'
import { IAppGlobalState } from '../../../reducers'

interface SearchInputState {
  searchTerm: string,
}


interface OwnProps {}


interface DispatchProps {
  acFetchTVMazeData: (searchText: string) => void,
}

interface PropsFromAppState {}

// interface SearchInputProps {
//   // dispatchProps: DispatchProps,
//   // ownProps: OwnProps,
//   acFetchTVMazeData: (searchText: string) => void,
// }

type MergedProps = DispatchProps & PropsFromAppState & OwnProps;

const SearchInputAreaWrapper = Styled.div`
  text-align:center;
`

const SearchInputTextBar = Styled.input`
  width:80%;
  height:40px;
`
const ExecuteSearchButton = Styled.a`
  width:20%;
  height:40px;
  background-color:blue;
  color:#FFFFFF;
  padding:10px;
  cursor:pointer;
`

export function mapStateToProps(state: IAppGlobalState): PropsFromAppState {
  return { };
}

export function mapDispatchToProps(dispatch: Dispatch<IActionFetchTVMazeData>):DispatchProps {
 return bindActionCreators(
    { acFetchTVMazeData }, dispatch)
    }

// Line 41 is same as Line 96, change to use ESNext Decorator way
// @connect(mapStateToProps, mapDispatchToProps)
//export default 
class SearchInput extends Component<MergedProps, SearchInputState> {

  readonly state: SearchInputState = {
    searchTerm: '',
  }

  constructor(props: MergedProps) {
    super(props)
  }

  onSearchTextInput = (e: React.ChangeEvent<HTMLInputElement>): void => {

    const textInput = e.target
    this.setState({
      searchTerm: textInput.value,
    })
  }

  handleGetTVMazeData = () => {
    const { searchTerm } = this.state

    if (!searchTerm) {
      return
    }

    this.props.acFetchTVMazeData(searchTerm)
  }

  onInputEnterPressDown = (e: React.FormEvent<HTMLFormElement>): void => {

   e.preventDefault()

   this.handleGetTVMazeData()

  }

  render() {
    return (
      <SearchInputAreaWrapper>
        <form onSubmit={this.onInputEnterPressDown} >
          <SearchInputTextBar
              type="text"
              onChange={this.onSearchTextInput}
              value={this.state.searchTerm}
          />
          <ExecuteSearchButton onClick={this.handleGetTVMazeData} >{`Search`}</ExecuteSearchButton>
        </form>
      </SearchInputAreaWrapper>
    )
  }
}



export default connect<PropsFromAppState, DispatchProps, OwnProps>(null, mapDispatchToProps)(SearchInput)

