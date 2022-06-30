import React from "react";

export default function GetName (MyComponent) {
  console.log('-------------------------', '我执行了')
  return class Component extends React.Component {
   
    render () {
      return  <MyComponent {...this.props} />
    }
  }
}