import React from 'react'

export interface HelloProps {
  compiler: string
  framework: string
}

const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
    我是来自子应用的树哦
  </h1>
)

export default Hello
