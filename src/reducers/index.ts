import { combineReducers } from 'redux'
import TVMazeReducer from './TVMazeDataReducer'
import { ITVMazeData } from '../examples/redux_callAPIThenGenerateList/entity/TVMazeData'

const rootReducer = combineReducers({

   tvMazeData: TVMazeReducer,
})

export interface IAppGlobalState {

    tvMazeData: ITVMazeData[];
}

export default rootReducer
