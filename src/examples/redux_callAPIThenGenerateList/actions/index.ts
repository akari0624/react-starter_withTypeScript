// import {action} from 'typesafe-actions'
import { Dispatch, ActionCreator, Action } from 'redux'
import CONSTANTS from '../types'

import axios from 'axios'
import { ThunkAction } from 'redux-thunk';
const tvmazeBaseURL : string = 'http://api.tvmaze.com/search/shows?q='

export interface IActionFetchTVMazeData {
  type: string,
  payload: any
}

export const acFetchTVMazeData: ActionCreator<
    ThunkAction<void, null, null, IActionFetchTVMazeData>
  > = (searchText : string) => (dispatch: Dispatch<IActionFetchTVMazeData>) => {

  const pResult = axios.get(`${tvmazeBaseURL}${searchText}`)

  pResult.then(({data}) => {

      if (data.errorMsg) {
        dispatch({type: CONSTANTS.ERROR_MSG, payload: data.errorMsg})
      } else {

        dispatch({type: CONSTANTS.FETCH_TVMAZE_DATA, payload: data})
      }

     })
          .catch(err => dispatch({type: CONSTANTS.ERROR_MSG, payload: err}))
}
