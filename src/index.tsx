import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import reducers from './reducers'

import indexRouter from './mainpage'


const createStoreWithMiddleware = applyMiddleware()(createStore)

let appStore: any;

if(process.env.NODE_ENV === 'production'){

  appStore = createStoreWithMiddleware(reducers)

}else{
  appStore = createStoreWithMiddleware(
    reducers,
    /**  force cast~  https://github.com/zalmoxisus/redux-devtools-extension/issues/134#issuecomment-379861240 */
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
}

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={indexRouter}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.querySelector('.container'))
