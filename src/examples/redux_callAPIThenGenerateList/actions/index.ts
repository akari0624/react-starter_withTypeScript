// import {action} from 'typesafe-actions'
import { Dispatch, ActionCreator, Action } from 'redux'
import CONSTANTS from '../types'

import axios from 'axios'
import { ThunkAction } from 'redux-thunk';
const tvmazeBaseURL : string = 'https://api.tvmaze.com/search/shows?q='

export interface IActionFetchTVMazeData {
  type: string,
  payload: any
}

export const acFetchTVMazeData: ActionCreator<
    ThunkAction<void, null, null, IActionFetchTVMazeData>
  > = (searchText : string) => (dispatch: Dispatch<IActionFetchTVMazeData>) => {

    try {
  const pResult = axios.get(`${tvmazeBaseURL}${searchText}`)

  pResult.then(({data}) => {

        dispatch({type: CONSTANTS.FETCH_TVMAZE_DATA, payload: data})

     })
          .catch(err => dispatch({type: CONSTANTS.ERROR_MSG, payload: `發生錯誤:${err}`}))
    } catch (err) {

      dispatch({type: CONSTANTS.ERROR_MSG, payload: '目前沒有網路連線'})
    }
}

export const removeErrorMsgWhenCloseErrorMsgAlert: ActionCreator<IActionFetchTVMazeData> =
    () => ({type: CONSTANTS.ERROR_MSG, payload: ''})
