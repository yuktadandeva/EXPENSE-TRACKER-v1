import React from 'react'
import Button from '../../../shared/Widgets/Button'
import { Friend } from './Friend'

export const Bill = ({bill}) => {
  return (
    <div>
        <p>AMOUNT : {bill.billAmount}</p> 
        <p>Activity : {bill.billActivity}</p>
        <p>created by : {bill.createdBy.userId}</p>
        <p> friends in bill : {bill.friendGroup.map((friend)=>{
<Friend friend={friend} key={friend._id}/>
        })}</p>
        <p>YOUR SHARE : {bill.share}</p>
        <Button val={"PAY SHARE"}></Button>
    </div>
  )
}
