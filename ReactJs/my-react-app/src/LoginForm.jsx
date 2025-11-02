import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function fun1(){
        if (!email || !password) {
      alert("⚠️ Both fields are required!");
      return;
    }
        console.log(email);
        console.log((password));        
    }
  return (
    <div>
        <span>Name : </span>
        <input type="text" placeholder='enter your name' required /><br /><br />
        <span>Email : </span>
        <input type="email" placeholder='enter your mail'  value={email} onChange={(e) => setEmail(e.target.value)}  /><br /><br />
        <span>Password : </span>
        <input type="password" placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)}   />
        <button onClick={fun1}>Login</button>
    </div>
  )
}

export default LoginForm
