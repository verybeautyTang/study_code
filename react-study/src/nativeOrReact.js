import React, { useRef, useEffect } from "react";
const NativeOrReact = () => {
  const refFather = useRef(null);
  const refChild = useRef(null);
  useEffect(() => {
    refFather.current.addEventListener("click", () => {
      console.log('我是绑定在原生上的父节点组件')
    })
    refChild.current.addEventListener("click", () => {
      console.log('我是绑定在原生上的子节点组件')
    })
    document.addEventListener('click', () => {
      console.log('我是绑定在document上的组件')
    })
    refFather.current.addEventListener("click", () => {
      console.log('捕获我是绑定在原生上的父节点组件')
    },true)
    refChild.current.addEventListener("click", () => {
      console.log('捕获我是绑定在原生上的子节点组件')
    },true)
    document.addEventListener('click', () => {
      console.log('捕获我是绑定在document上的组件')
    },true)
  },[])
  const fatherClick = () => {
    console.log('我是绑定在React上面的父节点事件')
  }
  const childClick = () => {
    console.log('我是绑定在React上面的子节点事件')
  }
  const fatherCapture = () => {
    console.log('捕获我是挂载在React上的父节点事件')
  }
  const childCapture = () => {
    console.log('捕获我是挂载在React上的子节点事件')
  }
  return (
    <div>
      <h1>Native or React?</h1>
      <div  ref= {refFather} onClick={fatherClick} onClickCapture={fatherCapture}>
        <div>💡 Look At Me I am Fathessssr</div>
        <button ref= {refChild} onClick={childClick} onClickCapture={childCapture}>Yeal！ I am Child</button>
      </div>
    </div>
  )
}

export default NativeOrReact;