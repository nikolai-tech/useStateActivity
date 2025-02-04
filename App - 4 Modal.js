import './App.css';
import React, {useState} from 'react';

function App() {
  const [showTasks, setShowTasks] = useState(true)
  const [showModal, setShowModal] = useState(true)
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

  const handleEditTask = (id) => {
    console.log("id: "+id);
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
        <button onClick={()=>handleEditTask(task.id)}>edit</button>
        <button onClick={()=>handleDeleteTask(task.id)}>delete</button>        
      </React.Fragment>
    )
  }

  function Modal() {
    return (
      <div className="modal-backdrop">
        <div className="modal">
        <h2>Terms and Conditions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button onClick={()=>setShowModal(false)}>Close</button>
        </div>
      </div>
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
        showTasks && <button onClick={()=>setShowTasks(false)}>Hide</button>
      }
      {
        !showTasks && <button onClick={()=>setShowTasks(true)}>Show</button>
      }

      { /* Tasks List */
        showTasks && 
        tasks.map(formatTasks)
      }

      {showModal && <Modal/>}
    </div>
  )
}

export default App;
