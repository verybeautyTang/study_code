import React from 'react'

import Hello from './components/Hello'
const App = () => (
  <>
    <Hello compiler="TypeScript 2" framework="React Project" />
    <div style={{backgroundColor: '#eee', padding: '20px'}}>
      <h2>remote import load one!! my name is kik
        我更改了代码 你看更新了没有哦 哈哈哈哈哈哈!</h2>
      <h2>remote lazy load</h2>
      process.env.EMP_ENV:{process.env.EMP_ENV}
    </div>
  </>
)

export default App
