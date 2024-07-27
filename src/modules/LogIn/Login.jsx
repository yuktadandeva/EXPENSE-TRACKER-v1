import React, { useState } from 'react'
import Button from '../../shared/Widgets/Button'

export const Login = ({onLogin}) => {
const [username, setUsername]= useState();
const [password, setPassword]= useState();

const getPassword = (e)=>{
    setPassword(e.target.value);
}
const getUsername = (e)=>{
    setUsername(e.target.value);
    console.log(e.target.value)
}

const submitInfo = (e)=>{
    const userData = {userName: username , passWord :password}
    onLogin(userData);
}


const myStyle={
    border:"1px solid grey",
    height:"50vh",
    width:"50vw",
    margin:"40px auto",
    padding:"40px",
    borderRadius:"12px",
    boxShadow:"5px 5px 5px grey"
}

const block={
    display:"block"
}

const btn={
    margin:"20px 0px",
    display:"block",
    backgroundColor:"black",
    color:"white",
    width:"150px"
}


  return (
    <div style={myStyle}>
    <div className="inner-login">
     <h1>Login</h1>

     <form action="#">
        <label style={block} for="#username">Username:</label>
        <input onChange={getUsername} type='text' id="username" name="username" required/>
        
        <label style={block} for="#password">Password:</label>
        <input onChange={getPassword} type="password" id="password" name="password" required/>
        
        <button style={btn} onClick={submitInfo} type="submit">LOGIN</button>
    </form>
     </div>
    </div>
  )
}
