import React from 'react'
import { AddFriend } from './AddFriend'

export const Friends = ({userFriendList,add}) => {
  const heading={
    textAlign:"center",
    backgroundColor:"#131e25",
    color:"white"
  }
 
// friends.forEach((friend)=>{friends}.push(friend));
  return (
    <div>
        <div>
          <h3 style={heading}>Add Friend</h3>
        </div>
    <div className='row'>
    {userFriendList.map((friend,key)=> <AddFriend friend={friend} key={friend.userId} add={add}></AddFriend>)}
    </div>
    </div>
  )
}
