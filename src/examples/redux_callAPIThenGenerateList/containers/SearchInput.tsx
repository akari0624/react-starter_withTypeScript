import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import Styled from 'styled-components'

import { acFetchTVMazeData } from '../actions'

interface ISearchInputState {
  searchTerm: string,
}

interface ISearchInputProps {
  acFetchTVMazeData: (searchText: string) => void,
}

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

class SearchInput extends Component<ISearchInputProps, ISearchInputState> {

   readonly state: ISearchInputState = {
    searchTerm: '',
   }

  constructor(props: ISearchInputProps) {
    super(props)
 }

  onSearchTextInput = (e: React.ChangeEvent<HTMLInputElement>): void => {

    const textInput = e.target
    this.setState({
      searchTerm: textInput.value,
    })
  }

  handleGetTVMazeData = () => {
    const {searchTerm} = this.state

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
          <SearchInputTextBar type="text" onChange={this.onSearchTextInput} value={this.state.searchTerm}/>
          <ExecuteSearchButton onClick={this.handleGetTVMazeData} >{`Search`}</ExecuteSearchButton>
        </form>
      </SearchInputAreaWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators(
  {
    acFetchTVMazeData,
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchInput)