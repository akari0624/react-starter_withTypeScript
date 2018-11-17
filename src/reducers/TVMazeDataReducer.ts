import { Reducer } from 'redux'
import { ITVMazeData, InitShow } from '../examples/redux_callAPIThenGenerateList/entity/TVMazeData'
import CONSTANTS from '../examples/redux_callAPIThenGenerateList/types'

const initTVMazeDataState: ITVMazeData[] = [{
    score: 0,
    show: new InitShow(),
}]

const reducer: Reducer<ITVMazeData[]> = (state = initTVMazeDataState, action) => {

  switch (action.type) {

    case CONSTANTS.FETCH_TVMAZE_DATA: {
      state = action.payload
      return state

    }
     default: {
       return state
     }
  }

}

export default reducer
