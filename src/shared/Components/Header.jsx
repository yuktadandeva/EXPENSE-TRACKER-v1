import React, { useState } from 'react';
import './Header.css';
import Button from '../Widgets/Button';

const Header = ({login,reset,searchUser,foundUser,add}) => {
const [username, setUsername] = useState(null);

const myStyle ={width:"100%",position:"absolute", height:"100%", left:"0"}

  const getSearchInput = (e)=>{
    console.log(e.target.value)
    setUsername(e.target.value);
  
  }
  const search=()=>{
    searchUser(username);
  }

  const sendtoAdd=()=>{
    const friendId = foundUser.userId;
  add(friendId);

  }

  const circleIcon={border:"1px solid black", borderRadius:"50%", overflow:"hidden", position:"relative", width:"40px"}
  const display={display:"flex"}
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://static-00.iconduck.com/assets.00/money-with-wings-emoji-2048x1717-0ax0mo0h.png" alt="Logo" className="logo" />
        <span className="website-name" >FARE ENOUGH</span>
      </div>
     
      {login?
      <div className="header-center">
        <div style={display}>
        <input onChange={getSearchInput} type="text" className="search-bar" placeholder="Search..." />
        < Button fn={search} val={"Search"}></Button> 
        </div>
        <div className="dropdown">
        {foundUser?
        <div style={display}>
        <div style={circleIcon}>
        <img src={foundUser.userImg} style={myStyle}/>
        </div>
        {foundUser.name}
        <Button fn={sendtoAdd} val={"+"}></Button>
        </div>
      
        :<p>no results</p>}
        </div>
        </div>
      :null}
        
 
      <div className="header-right">      
      <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            {login?<Button fn={reset} val={"LOGOUT"}></Button>:null}
          </ul>
      </div>
    </header>
  );
};

export default Header