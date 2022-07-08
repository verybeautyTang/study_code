import React, { useState } from "react";

export const UpdateQueue = () => {
  const [count, setCount] = useState(0)
  // 异步更新
  const asyncHandler = () => {
    setCount(count + 1);
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }
  // 同步更新
  const syncHandler = () => {
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={() => syncHandler()}>我是同步任务</button>
      <button onClick={() => asyncHandler() }>我是异步任务</button>
    </div>
  )
}