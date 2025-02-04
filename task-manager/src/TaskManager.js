import React, { useState } from "react"; 
 
function TaskManager() { 
 const [tasks, setTasks] = useState([]); 
 const [taskInput, setTaskInput] = useState(""); 
 const [filter, setFilter] = useState("all"); // "all", "completed", "pending" 
 
 const addTask = () => { 
 if (taskInput.trim()) { 
     setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]); 
     setTaskInput(""); 
   } 
 }; 
 
 const toggleTask = (id) => { 
   setTasks( 
     tasks.map((task) => 
       task.id === id ? { ...task, completed: !task.completed } : task 
     ) 
   ); 
 }; 
 
 const removeTask = (id) => { 
   setTasks(tasks.filter((task) => task.id !== id)); 
 }; 
 
 const filteredTasks = tasks.filter((task) => { 
   if (filter === "completed") return task.completed; 
   if (filter === "pending") return !task.completed; 
   return true; 
 }); 
 
 return ( 
   <div className="container"> 
     <h2>Task Manager</h2> 
     <input 
       type="text" 
       value={taskInput} 
       onChange={(e) => setTaskInput(e.target.value)} 
       placeholder="Enter a task..." 
     /> 
     <button onClick={addTask}>Add Task</button> 
 
     <div className="filters">
  <button 
    onClick={() => setFilter("all")}
    style={{ background: filter === "all" ? "#cccccc" : "" }}
  >
    All
  </button>
  <button 
    onClick={() => setFilter("completed")}
    style={{ background: filter === "completed" ? "#cccccc" : "" }}
  >
    Completed
  </button>
  <button 
    onClick={() => setFilter("pending")}
    style={{ background: filter === "pending" ? "#cccccc" : "" }}
  >
    Pending
  </button>
</div>
 
     <ul> 
       {filteredTasks.map((task) => ( 
         <li key={task.id} className={task.completed ? "completed" : ""}>
         <input 
           type="checkbox" 
           checked={task.completed} 
           onChange={() => toggleTask(task.id)} 
         />
         <span>{task.text}</span>
         <button onClick={() => removeTask(task.id)}>❌</button>
       </li>
       ))} 
     </ul> 
   </div> 
 ); 
} 
 
export default TaskManager;