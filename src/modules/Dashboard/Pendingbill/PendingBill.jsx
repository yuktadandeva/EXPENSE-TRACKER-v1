import React from 'react'
import { Bill } from './Bill'

export const PendingBill = ({pendingBills}) => {
    
  return (
  <div>
    <h2>pending Bills</h2>
    <div>{pendingBills.map((bill, index)=><Bill key={index} bill={bill}/>)}</div>
    <hr />
  </div>
  )
}
