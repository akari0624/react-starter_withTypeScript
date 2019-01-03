import { combineReducers } from 'redux'
import TVMazeDataReducer from './TVMazeDataReducer'
import ErrorMsgReducer from './ErrorMsgReducer'
import { ITVMazeData } from '../examples/redux_callAPIThenGenerateList/entity/TVMazeData'

const rootReducer = combineReducers({

   errorMsg: ErrorMsgReducer,
   tvMazeData: TVMazeDataReducer,
})

export interface IAppGlobalState {

    errorMsg: string,
    tvMazeData: ITVMazeData[];
}

export default rootReducer
