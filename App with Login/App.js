import './App.css';
import Modal from './components/Modal';
import React, {useState} from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleClose = ()=>{

  }

  const users = [
    {username: "john", password: "123"},
    {username: "mary", password: "456"}
  ]

  const login = ()=>{
    if(users.find((obj)=>username===obj.username && password===obj.password)){
      setIsLogin(false);
    }else{
      setShowModal(true);
    }
  }


  function Home(){
    return (
      <>
      <h1>Welcome!</h1>
      </>
    )
  }

  return (
    <div className="App">
      {!isLogin && <Home/>}
      {isLogin &&       
      <div>
      Username:<input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        /><br/>
      Password:       <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        /><br/>
      <button onClick={()=>login()}>Login</button>
      </div>}
      {showModal &&   
          <div className="modal-backdrop">
            <div className="modal">
              Invalid Username or Password!
              <br/>
              <button onClick={()=>setShowModal(false)}>Ok</button>
            </div>
          </div>
        }
    </div>
  )
}

export default App;
