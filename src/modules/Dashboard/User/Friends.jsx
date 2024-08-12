import React, { useContext } from 'react'
import { AddFriend } from './AddFriend';
import Button from '../../../shared/Widgets/Button';
import { BillContext } from '../Bill/context/bill-context';

export const Friends = ({userFriendList}) => {
  const context = useContext(BillContext)
  const heading={
    textAlign:"center",
    backgroundColor:"#131e25",
    color:"white"
  }
const sendData=()=>{
  context.sendData();
}
// friends.forEach((friend)=>{friends}.push(friend));
  return (
    <div>
        <div>
          <h3 style={heading}>Add Friend</h3>
          <i>your friend list</i>
        </div>
    <div className='row'>
    {userFriendList.map((friend,key)=> <AddFriend friend={friend} key={friend.userId} ></AddFriend>)}
    </div>

    <Button fn={sendData} val={"Add friends to bill"}></Button>
    </div>
  )
}
