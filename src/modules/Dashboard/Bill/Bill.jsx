import React,{useContext, useState} from 'react'
import { BillContext } from './context/bill-context'
import { FriendList } from './FriendList'
import Button from '../../../shared/Widgets/Button'

export const Bill = () => {
const [share, setShare] = useState();
const context = useContext(BillContext);

 const billInfo = context.bill;
 const friendGroup= context.friends;
const calShare = ()=>{
  const share= (billInfo.billAmount) / (friendGroup.length);
  setShare((share).toFixed(2));
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
    {/* <i>Created by:{billInfo.createdBy}</i> */}
    </div>
    <Button val="share" fn={calShare}></Button>
    <div className="friend-list">
    <div className="friends">
      <FriendList friendGroup={friendGroup} share={share}></FriendList>
     </div>
    </div>
    </div>
  )
}
