import './App.css';
//import Modal from './components/Modal';
//import ReminderList from './components/ReminderList';
import React, {useState} from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);  

  return (
    <div className="App">
      <h2>Click Count: {clickCount}</h2>
      <button onClick={()=>setClickCount(clickCount+1)}>Click Me!</button>
    </div>
  )
}

export default App;
