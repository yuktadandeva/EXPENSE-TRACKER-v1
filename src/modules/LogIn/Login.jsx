import React, { useState } from 'react'
import { Registration } from '../Registration/Registration';
import Button from '../../shared/Widgets/Button';


export const Login = ({onLogin,rStatus}) => {
const [userId, setUserId]= useState();
const [password, setPassword]= useState();
const [registration, setRegistration] = useState(false);

const getPassword = (e)=>{
    setPassword(e.target.value);
}
const getUserId = (e)=>{
    setUserId(e.target.value);
    console.log(e.target.value)
}

const submitInfo =(e)=>{
    const userData = {userid: userId , passWord :password}
    onLogin(userData);
}

const toggleRegistration =(e)=>{
    setRegistration(false);
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

const atag={
    color:"black",
    textDecoration:"underline"
}


  return (
    <div style={myStyle}>
        {!registration?
    <div className="inner-login">
     <h1>Login</h1>

     <form action="#">
        <label style={block} for="#username">UserId:</label>
        <input onChange={getUserId} type='text' id="username" name="username" required/>
        
        <label style={block} for="#password">Password:</label>
        <input onChange={getPassword} type="password" id="password" name="password" required/>
        
        <button style={btn} onClick={submitInfo} type="submit">LOGIN</button>
       
    </form>

   <Button fn={(e)=>{setRegistration(true)}} val={"Register"}></Button>
        
     </div>
     :<Registration toggleRegistration={toggleRegistration} rStatus={rStatus}/>}
    </div>
  )
}
