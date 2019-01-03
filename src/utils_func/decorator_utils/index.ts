import {
  connect as originalConnect, MapDispatchToPropsParam, MapStateToPropsParam, MergeProps, Options
} from 'react-redux';
import * as React from 'react';
import { IAppGlobalState } from '../../reducers'
import { Dispatch } from 'redux'

export function bind(target:any, propertyKey: string, descriptor: PropertyDescriptor) {

  return {

    get() {
      const bound = descriptor.value.bind(this);
      Object.defineProperty(this, propertyKey, {
        value: bound,
      });
      return bound;
    }
  }

}





export type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> =
  <TComponent extends React.ComponentType<TInjectedProps
   & TNeedsProps>>(component: TComponent) => TComponent;

interface MyConnect {
  <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(
        mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps, IAppGlobalState>,
        mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>
    ): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;

  <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}>(
        mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps, IAppGlobalState>,
        mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
        options?: Options<TStateProps, TOwnProps, TMergedProps>
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

}

const decoratorConnect = function connectTo(
  mapStateToProps?:(state:IAppGlobalState) => any,
  mapDispatchToProps?:(dispatch:Dispatch) => any): any {

  return function (target: any) {

    return originalConnect(mapStateToProps, mapDispatchToProps)(target)

  }

}


export const connect = decoratorConnect
