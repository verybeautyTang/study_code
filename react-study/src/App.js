import './App.css';
import React from 'react';
import GetName from './HOC/GetName.jsx'
import NativeOrReact from './nativeOrReact';
import {ClassComponent} from './lifeCycle'
const NewB = GetName(NativeOrReact)
function App() {
  return (
    <div className="App">
      <NewB></NewB>
      <ClassComponent></ClassComponent>
    </div>
  );
}

export default App;
