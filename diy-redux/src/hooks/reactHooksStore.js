import { unstable_batchedUpdates } from "react-dom";
export class ReduxHooksStore {
  constructor (reducer, initState) {
    this.name = '__hook_store__';
    this.id = 0;
    /** 全局reducer */
    this.reducer = reducer;
    /** 状态 */
    this.state = initState;
    /** 里面保存每一个 useConnect 组件的更新函数， 用于派发state更新 */
    this.mapConnects = {};
  }

  /** 需暴露出去的接口给useConnect */
  exportApi = () => {
    return {
      dispatch:this.dispatch.bind(this),
      subscribe:this.subscribe.bind(this),
      unSubscribe:this.unSubscribe.bind(this),
      getInitState:this.getInitState.bind(this)
    }
  }
  /** 获取state */
  getInitState = (mapStoreToState) =>{
      return mapStoreToState(this.state)
  }
  /** 事件订阅 */
  subscribe = (connectCurrent) =>{
    const connectName =  this.name + (++this.id)
    this.mapConnects[connectName] =  connectCurrent
    return connectName
  }
  /** 取消事件订阅 */
  unSubscribe = (connectName) =>{
    delete this.mapConnects[connectName]
  }

  /** 组件更新 */
  renRender = () =>{
    unstable_batchedUpdates(()=> {
      Object.keys(this.mapConnects).forEach((i) => {
        const { update } = this.mapConnects[i];
        update(this.state)
      })
    })
  }
  /** 状态更新[会引起组件的更新] */
  dispatch = (action) =>{
    this.state = this.reducer(this.state, action)
    /** 批量组件更新 */
    this.renRender()
  }
}