import React, { Component } from 'react'
import Styled from 'styled-components'
import { getTVMazeData } from '../viewModels'
import { ITVMazeData } from '../entity/TVMazeData'

interface ISearchInputState {
  searchTerm: string,
}

interface ISearchInputProps {
  afterTVMazeDataFetchComplete: (errorMsg: string, tvMazeData: ITVMazeData[]) => void,
}

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

export default class SearchInput extends Component<ISearchInputProps, ISearchInputState> {

   readonly state: ISearchInputState = {
    searchTerm: '',
   }

   constructor(props: ISearchInputProps) {
    super(props)
 }

  onSearchTextInput = (e: any) => {

    this.setState({
      searchTerm: e.target.value,
    })
  }

  handleGetTVMazeData = () => {
    const {searchTerm} = this.state

    if (!searchTerm) {
      return
    }

    getTVMazeData(searchTerm, this.props.afterTVMazeDataFetchComplete)
  }

  onSearchClick = (e: any) => {

    this.handleGetTVMazeData()
  }

  onInputEnterPressDown = (e: any) => {

   e.preventDefault()

   this.handleGetTVMazeData()

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onInputEnterPressDown} >
          <SearchInputTextBar type="text" onChange={this.onSearchTextInput} value={this.state.searchTerm}/>
          <ExecuteSearchButton onClick={this.onSearchClick} >{`Search`}</ExecuteSearchButton>
        </form>
      </div>
    )
  }
}
