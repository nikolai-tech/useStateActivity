import './App.css';
import React, {useState} from 'react';

function App() {
  const [testState, setTestState] = useState("");  

  return (
    <div className="App">
      <h2>Test State: {testState}</h2>
      <button onClick={()=>setTestState("You clicked me!")}>Click Me!</button>
    </div>
  )
}

export default App;
