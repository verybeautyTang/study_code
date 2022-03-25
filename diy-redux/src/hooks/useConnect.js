/**useConnect：
 * 更新state【dispatch实现】
 * 订阅state，当订阅的state改变，组件更新
 */

import { useContext, useEffect, useMemo,useRef, useState } from "react"
import { ReduxContext } from './useCreateStore'
export const useConnect = (mapStoreToState= () => {}) => {
  /** 拿到全局变量 */
  const contextValue  = useContext(ReduxContext)
  const {dispatch, subscribe, unSubscribe, getInitState} = contextValue 
  /** 保存最新得到的state */
  const stateValue = useRef(getInitState(mapStoreToState))
  /** 组件更新 */
  const [, updateForce] = useState()
  const connectValue = useMemo(() => {
    const state = {
      /** 保存上一次的state */
      cacheState: stateValue.current,
      /** 更新state */
      update: (newState) => {
        const changeState = mapStoreToState(newState);
        if (changeState !== state.cacheState) {
          stateValue.current = changeState;
          state.cacheState = changeState;
          updateForce();
        }
      }
    }
    return state;
  }, [contextValue]) /** 这里contextValue监听是因为contextValue改变证明store改变 */

  /** 重新订阅 */
  useEffect(()=> {
    const name =  subscribe(connectValue)
    return () => {
      unSubscribe(name)
    }
  },[connectValue])
  /** 返回state 和 dispatch */
  return [ stateValue.current , dispatch ]
}