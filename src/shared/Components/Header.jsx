import React, { useState } from 'react';
import './Header.css';

const Header = ({login,reset,searchUser,foundUser,add}) => {
const [username, setUsername] = useState(null);

const myStyle ={width:"40px"}

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

  return (
    <header className="header">
      <div className="header-left">
        <img src="https://static-00.iconduck.com/assets.00/money-with-wings-emoji-2048x1717-0ax0mo0h.png" alt="Logo" className="logo" />
        <span className="website-name" >FARE ENOUGH</span>
      </div>
     
      {login?
      <div className="header-center">
        <input onChange={getSearchInput} type="text" className="search-bar" placeholder="Search..." />
        <button onClick={search}>Search</button> 
        <div className="dropdown">
        {foundUser?
        <div>
        <img src={foundUser.userImg} style={myStyle}/>
        {foundUser.name}
        <button onClick={sendtoAdd}>add</button>
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
            {login?<button onClick={reset}>LOGOUT</button>:null}
          </ul>
      </div>
    </header>
  );
};

export default Header