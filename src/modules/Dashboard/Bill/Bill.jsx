import React,{useContext} from 'react'
import { BillContext } from './context/bill-context'
import { FriendList } from './FriendList'

export const Bill = ({bill,activity,share, friendGroup}) => {

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
      <div style={cen}>{bill}</div>
      </div>
      <div style={dis}>
    <h3>Description:&nbsp;{activity}</h3>
    </div>
    </div>
    <div className="friend-list">
    <div className="friends">
      <FriendList share={share} friendGroup={friendGroup}></FriendList>
     </div>
    </div>
    </div>
  )
}
