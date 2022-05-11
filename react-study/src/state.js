import React from 'react';
export const GetState = () => {
  const [count, setCount] = React.useState(0);
  const onClick = () => {
    setCount(count +  1);
    console.log(count)
    setCount(count +  1);
    console.log(count)
  }
  React.useEffect(() => {
    document.getElementById('myButton').addEventListener('click', onClick);
  }, [])
  return (
    <React.Fragment>
      {/* 同步更新 */}
      <button id="myButton">not in React</button>
      {/* 异步更新 */}
      <button onClick={onClick}>In React</button>
    </React.Fragment>
  )
}