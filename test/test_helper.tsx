import React, { ComponentType } from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import combinedReducers from '../src/reducers'

// mock for redux Provider
function renderReduxConnectedHOC(
  TestedComponent: ComponentType,
  initState: object,
  ownProps: object
) {
  return rtlRender(
    <Provider store={createStore(combinedReducers, initState)}>
      <>
        <TestedComponent {...ownProps} />
      </>
    </Provider>
  )
}

export { renderReduxConnectedHOC }
