import Loadable from 'react-loadable';
import React, { Component } from 'react'

const CallAPI_ThenGenerateListRedux_LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "genList2Redux" */ './'),
  loading: () => <div>{`loading ...`}</div>,
})

export default class CallAPI_ThenGenerateListRedux_Loadable extends Component {
  render() {
    return <CallAPI_ThenGenerateListRedux_LoadableComponent />;
  }
}
