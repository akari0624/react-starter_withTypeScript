import Loadable from 'react-loadable';
import React, { Component } from 'react'

const CallAPI_ThenGenerateList_LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "genList1" */ './'),
  loading: () => <div>{`loading ...`}</div>,
})

export default class CallAPI_ThenGenerateList_Loadable extends Component {
  render() {
    return <CallAPI_ThenGenerateList_LoadableComponent />;
  }
}
