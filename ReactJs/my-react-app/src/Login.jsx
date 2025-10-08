import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
 let [input, setInput] = useState({
  email:"",
  passWord:""
 })
  let [data, setData] = useState({})

 function fun1(e){
    let {name,value} = e.target
    setInput({...input,[name]:value})
    console.log(input);
  }
  function show(){
     setData({...input})
  }

  return (
    <div>
      <p>{data.email}</p> 
      <p>{data.passWord}</p>

      <input name='email' value={input.email} type="email" placeholder='email' onChange={fun1} /><br />
      <input name='passWord' value={input.passWord} type="password" placeholder='password' onChange={fun1} /><br />
      <button onClick={show}>Show</button>
      <button>SignUp</button>
    </div>
  )
}

export default Login