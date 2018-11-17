// import {action} from 'typesafe-actions'
import { Dispatch } from 'redux'
import CONSTANTS from '../types'

import axios from 'axios'
const tvmazeBaseURL : string = 'http://api.tvmaze.com/search/shows?q='

// export interface IActionFetchTVMazeData {
//   type: string,
//   payload: string
// }

export const acFetchTVMazeData = (searchText : string) => (dispatch: Dispatch) => {

  const pResult = axios.get(`${tvmazeBaseURL}${searchText}`)

  pResult.then(res => dispatch({type: CONSTANTS.FETCH_TVMAZE_DATA, payload: res.data})).catch(err => console.log(err))
}
