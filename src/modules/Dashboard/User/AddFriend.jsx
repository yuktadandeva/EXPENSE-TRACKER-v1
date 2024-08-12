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

    const myStyle={
      display:"flex",
      paddingLeft:"30px"

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
      width:"20px",
      overflow:"hidden"
    }
    const img={
      width:"100%",
      height:"100%"
    }
  return (
    <div style={myStyle}>
      <div className="img">
      <img src={friend.userImg} style={img} alt="" />
      </div>
      <p style={name}>{friend.name} &nbsp;</p>|<p style={username}>&nbsp;{friend.userId}</p> 
      <Button id={friend.userId} fn={addInList} val={'+'}></Button>
    </div>
  )
}
