import './App.css';
import { GetState } from './state'
import SetState from './setState'
function App() {
  return (
    <div className="App">
      <GetState />
      <br/>
      <SetState/>
    </div>
  );
}

export default App;
