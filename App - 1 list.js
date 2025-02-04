import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {title: "Take Quiz", id: 1},
    {title: "Paper Presentation", id: 2},
    {title: "Final Exam", id: 3},
  ]); 
  
  /*
  const formatTasks = (task, index) =>{
    return (
      <React.Fragment key={task.id}>
        <h2>{index} - {task.title}</h2>
      </React.Fragment>
    )
  }
  */

  return (
    <div className="App">
      {
        tasks.map((task, index)=><h2>{index} - {task.title}</h2>)
      }
    </div>
  )
}

export default App;
