import React, { useContext, useState } from 'react'
import { Input } from '../../../shared/Widgets/Input'
import Button from '../../../shared/Widgets/Button'
import { BillContext } from '../context/bill-context';

export const BillForm = () => {
const [amount , setAmount] = useState();
const [activity , setActivity] = useState();

const context = useContext(BillContext);

const billHandled = (e)=>{
console.log(e.target.value)
setAmount(e.target.value);
}

const activityHandled = (e)=>{
console.log(e.target.value)
setActivity(e.target.value);
}

const addBill = ()=>{
  const bill = {billAmount:amount , billActivity: activity}
  console.log("bill form inside", bill)
  context.addBill(bill);
}

    const beauty={
      margin:"2px",
      padding:"0px 5px",
      color:"black",
      width:"100px"
    }
    const heading={
      textAlign:"center",
      backgroundColor:"#131e25",
      color:"white",
    }
    const pad={
      padding:"20px 15px",
    }
    const IPmargin={
      margin:"2px"
    } 
    
  return (
    <div>
      <div>
        <h3 style={heading}>Add Bill</h3>
      </div>
      <div style={pad}>
       <label htmlFor="" style={beauty}>TOTAL BILL </label>
        <Input fn={billHandled} style={IPmargin} val="Enter Amount"></Input><br></br>
        <label htmlFor="" style={beauty}>ACTIVITY</label>
        <Input fn={activityHandled} style={IPmargin}></Input><br>
        </br>
        <Button val="ADD BILL" fn={addBill} ></Button>
        </div>
    </div>
    
  )
}
