import React,{useContext, useState} from 'react'
import { BillContext } from './context/bill-context'
import { FriendList } from './FriendList'
import Button from '../../../shared/Widgets/Button'
import axios from 'axios'

export const Bill = ({user}) => {
const [share, setShare] = useState();
const context = useContext(BillContext);

const billInfo = context.bill;
const friendGroup= context.friends;
console.log("user", {user})


const calShare = ()=>{
  const share= (billInfo.billAmount) / (friendGroup.length);
  setShare((share).toFixed(2));
  updateShare();
}

const updateShare = async ()=>{
const billId = billInfo.billId;
  try{
    const response = await axios.post(import.meta.env.VITE_UPDATESHARE_URL,{
     billId , share
    })
    console.log(response);
    if(response.status==200){
      console.log("successfully updated share")
    }else{
      console.log("error in try body")
    }
  }catch(error){
    console.log("error cannot update share do again", error)
  }
}

const myStyle={
    height:"35vh", 
    backgroundColor:"#131e25", 
    color:"white", 
    padding:"70px",
    fontSize:"50px",
    textAlign:"center",
}
const dis={
  display:"flex"
}
const cen={textAlign:"center",fontSize:"0.8em", paddingTop:"10px"}

  return (
    <div>
    <div style={myStyle}>
      <div style={dis}>
      TOTAL BILL : &nbsp;
     {billInfo?<div style={cen}>{billInfo.billAmount}</div>:<div/>} 
      </div>

      <div style={dis}>
      Description:&nbsp;
      {billInfo?<div>{billInfo.billActivity}</div>:<div/>}
      <br/>
    </div>
   
    </div>
    {billInfo?<div><i>Created by:{billInfo.createdBy.userId}</i></div>:<div/>} 
    <Button val="share" fn={calShare}></Button>
    <div className="friend-list">
    <div className="friends">
      <FriendList friendGroup={friendGroup} share={share}></FriendList>
     </div>
    </div>
    </div>
  )
}
