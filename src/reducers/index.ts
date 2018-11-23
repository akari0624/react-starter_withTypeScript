import { combineReducers } from 'redux'
import TVMazeReducer from './TVMazeDataReducer'
import ErrorMsgReducer from './ErrorMsgReducer'
import { ITVMazeData } from '../examples/redux_callAPIThenGenerateList/entity/TVMazeData'

const rootReducer = combineReducers({

   errorMsg: ErrorMsgReducer,
   tvMazeData: TVMazeReducer,
})

export interface IAppGlobalState {

    errorMsg: string,
    tvMazeData: ITVMazeData[];
}

export default rootReducer
