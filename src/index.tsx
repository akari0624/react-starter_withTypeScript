import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import reducers from './reducers'

import IndexRoute from './mainpage'
import CounterRoute from './examples/counter'
import TodoMVCRoute from './examples/todos'
import TVMazeList from './examples/callAPIThenGenerateList'

const createStoreWithMiddleware = applyMiddleware()(createStore)

let appStore: any;

if (process.env.NODE_ENV === 'production') {

  appStore = createStoreWithMiddleware(reducers)

} else {
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
          <Route path="/counter" component={CounterRoute}/>
          <Route path="/todos" component={TodoMVCRoute}/>
          <Route path="/tvmaze" component={TVMazeList}/>
          <Route path="/" component={IndexRoute}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.querySelector('.container'))
