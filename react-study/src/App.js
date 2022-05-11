import './App.css';
import { GetState } from './state'
import SetState from './setState'
import OrderUpstate from './orderUpdate'
import SuperContainer from './opderUpdateExtend'
function App() {
  return (
    <div className="App">
      <GetState />
      <br/>
      <SetState/>
      <br/>
      <OrderUpstate/>
      <br/>
      <SuperContainer/>
    </div>
  );
}

export default App;
