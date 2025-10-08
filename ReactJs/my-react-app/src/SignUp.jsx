import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
 let [input, setInput] = useState({
  name:"",
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
      <p>{data.name}</p>
      <p>{data.email}</p> 
      <p>{data.passWord}</p>

      <input name='name' value={input.name} type="text" placeholder='name' onChange={fun1} /><br />
      <input name='email' value={input.email} type="email" placeholder='email' onChange={fun1} /><br />
      <input name='passWord' value={input.passWord} type="password" placeholder='password' onChange={fun1} /><br />
      <button onClick={show}>Show</button>
      <Link  to={'/login'}>  
      <button>Login</button>
      </Link>
    </div>
  )
}

export default SignUp