import React,{useContext} from 'react'
import { BillContext } from '../Bill/context/bill-context'
import Button from '../../../shared/Widgets/Button';

export const AddFriend = ({friend}) => {

  const Context = useContext(BillContext);
  const friendtoAdd = {friend};

const addInList = ()=>{
    console.log(friendtoAdd)

      Context.addInList(friendtoAdd);
  }

  const display={
    display:"flex"
  }

  const borderBottom = {
    borderBottom:"1px solid grey",
    padding:"8px",
  
    margin:"3px"
  }
    const myStyle={
      display:"flex",
   
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
    
    const imgDiv ={
      border: "1px solid black",
      borderRadius:"50%",
      overflow:"hidden",
      height:"45px"
    
    }
    const img={
      width:"100%",
      height:"100%"
    }
  return (
    <div style={borderBottom}>
    <div style={myStyle}>
      <div className="img" style={imgDiv}>
      <img src={friend.userImg} style={img} alt="" />
      </div>
      <p style={name}>{friend.name} &nbsp;</p>|<p style={username}>&nbsp;{friend.userId}</p>
      </div>
      <div style={display}>
      <Button id={friend.userId} fn={addInList} val={'+'}></Button>
      <Button id={friend.userId}  val={"-"}></Button>
      </div>
      </div>
    
  )
}
