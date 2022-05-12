import './App.css';
import React from 'react';
import { GetState } from './state'
import SetState from './setState'
import OrderUpstate from './orderUpdate'
import SuperContainer from './opderUpdateExtend'
import NativeOrReact from './nativeOrReact';
function App() {
  return (
    <div className="App">
      <NativeOrReact/>
      {/* <br/>
      <GetState />
      <br/>
      <SetState/>
      <br/>
      <OrderUpstate/>
      <br/>
      <SuperContainer/> */}
    </div>
  );
}

export default App;
