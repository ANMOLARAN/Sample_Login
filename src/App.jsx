import { useEffect, useState } from 'react'

import { validEmail,validPassword } from './Regex'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState("")
  const [password,setValidPassword] = useState("")
  const [value,setValue]=useState("");
  const [checkEmail,setEmail]=useState();
  const [checkPassword,setPassword]=useState();
  
  useEffect(()=>{
    if(validEmail.test(name)){
      setEmail(true);
    }
    else{
      setEmail(false);
    }
    if(validPassword.test(password)){
      setPassword(true);
    }
    else{
      setPassword(false);
    }
  },[name,password])


  return (
    <>
      <div className='main'>
        <h1>Login</h1>
      <div>
        <label>Enter Email</label><br/>
        {
        name.length>0 && (checkEmail?
        <p className='correct'>Valid</p>:
        <p className='incorrect'>Must contain email</p>)
        }
        <input className='text' type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <br/>
        <div>
        <label>Enter Password</label><br/>
        {
        password.length>0 && (checkPassword?
        <p className='correct'>Valid</p>:
        <p className='incorrect'>Must contain 0-9,a-z,A-Z,@#$%^&</p>)
        }
        <input className='text' type='password' value={password} onChange={(e)=>setValidPassword(e.target.value)}></input>
        </div>
        <br/>
        <button>LogIn</button>
        <br/>
        <button onClick={()=>{
          setName("")
          setValidPassword("")
          }}>Clear</button>
        <div>{value}</div>
       </div>
    </>
  )
}

export default App
