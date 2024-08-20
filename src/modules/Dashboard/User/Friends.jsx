import React, { useContext } from 'react'
import { AddFriend } from './AddFriend';
import Button from '../../../shared/Widgets/Button';
import { BillContext } from '../Bill/context/bill-context';

export const Friends = ({user,userFriendList}) => {
  const context = useContext(BillContext)
  const heading={
    textAlign:"center",
    backgroundColor:"#131e25",
    color:"white"
  }
  const border={
    border:"1px solid grey",
    margin:"3px",
    padding:"3px"
  }

const sendData=()=>{
  context.sendData();
}
// friends.forEach((friend)=>{friends}.push(friend));
  return (
    <div style={border}>
        <div>
          <h3 style={heading}>Add Friend</h3>
          <i>your friend list</i>
        </div>
    <div className='row'>
 
    {userFriendList.map((friend,index)=> <AddFriend friend={friend} key={index} ></AddFriend>)}
    </div>

   
     <Button fn={sendData} val={"Add friends to bill"}></Button>
   
    
    </div>
  )
}
