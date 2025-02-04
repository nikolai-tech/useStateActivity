import './App.css';
import React, {useState} from 'react';

function App() {
  const [showTasks, setShowTasks] = useState(true)
  const [title, setTitle] = useState('')
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

  const handleAddTask = () => {
  const newId = Math.max(...tasks.map((task)=>task.id)) + 1;
  console.log(newId);
  const task = {
    title: title,
    //id: Math.floor(Math.random() * 10000)
    id: newId
  }   

  setTasks(prevTasks => {
      return [...prevTasks, task]  
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
      <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      <button onClick={()=>handleAddTask()}>Add</button>
      <br/><br/>
      
      { 
        showTasks &&
        <button onClick={()=>setShowTasks(false)}>Hide</button>
      }

      {
        !showTasks &&
        <button onClick={()=>setShowTasks(true)}>Show</button>
      }

      { /* Tasks List */
        showTasks && 
        tasks.map(formatTasks)
      }
    </div>
  )
}

export default App;
