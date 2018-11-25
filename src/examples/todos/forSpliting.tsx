import Loadable from 'react-loadable';
import React, { Component } from 'react'

const Todos_LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "counter" */ './'),
  loading: () => <div>{`loading ...`}</div>,
})

export default class Todos_Loadable extends Component {
  render() {
    return <Todos_LoadableComponent />;
  }
}
