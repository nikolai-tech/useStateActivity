import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {title: "Take Quiz", id: 1},
    {title: "Paper Presentation", id: 2},
    {title: "Final Exam", id: 3},
  ]); 

  const handleDeleteTask = (id) => {
    console.log("id: "+id);

    setTasks((prev)=>{
      return prev.filter((task)=>{
        return id !== task.id
      })
    })
  }

  const formatTasks = (task, index) =>{
    return (
      <React.Fragment key={task.id}>
        <h2>{index} - {task.title}</h2>
        <button onClick={()=>handleDeleteTask(task.id)}>delete</button>
      </React.Fragment>
    )
  }

  return (
    <div className="App">
      {
        tasks.map(formatTasks)
      }
    </div>
  )
}

export default App;
