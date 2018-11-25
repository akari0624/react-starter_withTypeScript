import Loadable from 'react-loadable';
import React, { Component } from 'react'

const Counter_LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "counter" */ './'),
  loading: () => <div>{`loading ...`}</div>,
})

export default class Counter_Loadable extends Component {
  render() {
    return <Counter_LoadableComponent />;
  }
}
