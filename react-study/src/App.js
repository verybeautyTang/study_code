import './App.css';
import React from 'react';
import GetName from './HOC/GetName.jsx'
import NativeOrReact from './nativeOrReact';
import {ClassComponent} from './lifeCycle'
import {UpdateQueue} from './UpdateQueue'
const NewB = GetName(NativeOrReact)
function App() {
  return (
    <div className="App">
      <NewB></NewB>
      <UpdateQueue/>
      <ClassComponent></ClassComponent>
    </div>
  );
}

export default App;
