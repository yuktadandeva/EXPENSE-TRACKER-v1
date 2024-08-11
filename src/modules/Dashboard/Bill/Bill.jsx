import React,{useContext} from 'react'
import { BillContext } from './context/bill-context'
import { FriendList } from './FriendList'
import Button from '../../../shared/Widgets/Button'

export const Bill = ({share, friendGroup}) => {
const context = useContext(BillContext);

const billInfo = context.bill;
console.log("inside view bill",billInfo);

const myStyle={
    height:"30vh", 
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
      TOTAL BILL : 
      <div style={cen}>{billInfo.billAmount}</div>
      </div>
      <div style={dis}>
    <h3>Description:&nbsp;{billInfo.billActivity}</h3><br />


    </div>
    {/* <i>Created by:{billInfo.createdBy}</i> */}
    </div>
    <Button val="share"></Button>
    <div className="friend-list">
    <div className="friends">
      <FriendList share={share} friendGroup={friendGroup}></FriendList>
     </div>
    </div>
    </div>
  )
}
