import './App.css';
import React from 'react';
import GetName from './HOC/GetName.jsx'
import NativeOrReact from './nativeOrReact';
const NewB = GetName(NativeOrReact)
function App() {
  return (
    <div className="App">
      <NewB></NewB>

    </div>
  );
}

export default App;
