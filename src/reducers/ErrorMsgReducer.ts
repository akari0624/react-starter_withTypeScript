import { Reducer } from 'redux'
import CONSTANTS from '../examples/redux_callAPIThenGenerateList/types'

const initErrorMsgState: string = ''

const reducer: Reducer<string> = (state = initErrorMsgState, action) => {

switch (action.type) {

  case CONSTANTS.ERROR_MSG: {
    state = action.payload
    return state

  }
   default: {
     return state
   }
}

}

export default reducer
