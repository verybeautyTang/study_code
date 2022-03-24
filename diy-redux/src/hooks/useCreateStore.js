/**
 * ReduxContext
 * 主要就是暴露store给useConnect
 * 方便useConnect监听其改变进行state改变，最后组件更新
 */

import {createContext, useRef} from 'react'
import {ReduxHooksStore} from './reactHooksStore'
/** 创建一个全局context */
export const ReduxContext = createContext(null)

/** 返回一个store */
export const useCreateStore = (reducer, initState) => {
  /** 创建一个store */
  const store = useRef(null)
  /** 判断store.current是否实例化过【也就是说判断是否存在】 */
  if (!store.current) {
    store.current = new ReduxHooksStore(reducer, initState).exportApi();
  }
  return store.current
}