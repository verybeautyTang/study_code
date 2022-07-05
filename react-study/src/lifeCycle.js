import React from "react";

export class ClassComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state =  {
      count: ''
    };
    const clickHandle = () => {
    
    }
  }
  // 初次渲染调用
  componentWillMount() {
    console.log('componentWillMount')
  }
  // 初次渲染调用
  componentDidMount () {
    console.log('componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    // 组件props更新时会调用，不稳定，父组件更新也可能会引起子组件执行该函数，需要判断nextProps === this.props
    console.log('进入componentWillReceiveProps函数');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // 组件更新时会调用，react性能优化非常重要的一环，此处可阻止不必要的更新
    console.log('进入shouldComponentUpdate函数');
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    // 组件更新时会调用，此时不可以修改state
    console.log('进入componentWillUpdate函数');
  }
  
  componentDidUpdate(nextProps, nextState) {
    // 组件更新后会调用
    console.log('进入componentDidUpdate函数');
  }
  // 页面销毁前调用
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    const { count } = this.state
    return (
      <div onClick={() => this.clickHandle()}>我是class组件里面创建出来的东西{count}</div>
    )
  }
}