import React,{useContext} from 'react'
import { BillContext } from '../Bill/context/bill-context'

export const AddFriend = ({friend,add}) => {

  const Context = useContext(BillContext);

  const addInList = (friend)=>{
      Context.addInList({...friend});
  }

    const myStyle={
      display:"flex",
      paddingLeft:"30px"

    }
    const squareButton={
      width: '20px', // Adjust the width and height as needed
      height: '20px',
      backgroundColor: '#22313f', // Change the background color as needed
      color: 'white',
      border: 'none',
      borderRadius: '20', // Ensure corners are not rounded
      display: 'flex',
      justifyContent: 'center',
      alignItems: "right",
      cursor: 'pointer',
      paddingBottom:"25px",
      paddingTop:"0px"
    }
    const name={
      margin:"2px",
      padding:"0px 5px",
      color:"black",
      width:"150px"
    }
    const username={
      margin:"2px",
      padding:"0px 5px",
      color:"black",
      width:"150px"
    }
  return (
    <div style={myStyle}>
      <p style={name}>{friend.name} &nbsp;</p>|<p style={username}>&nbsp;{friend.id}</p> 
      <button style={squareButton} id={friend.id} onClick={add}>+</button>
    </div>
  )
}
