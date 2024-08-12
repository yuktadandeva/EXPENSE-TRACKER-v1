import React, { useContext, useState } from 'react'
import { Input } from '../../../shared/Widgets/Input'
import Button from '../../../shared/Widgets/Button'
import { BillContext } from '../Bill/context/bill-context';
import axios from 'axios';

export const BillForm = ({userId}) => {
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

const addBill =async ()=>{
  console.log(context)

  const bill = {billAmount:amount , billActivity: activity, createdBy : userId}
  console.log("bill form inside", bill)
  context.addBill(bill);
  // try{
  // const response =await axios.post(import.meta.env.VITE_ADDBILL_URL,{
  //   bill
  // });
  // if(response.status==200){
  //   alert("bill successfully added!")
  
  //   console.log(response.data.billId);
  //   bill.billId = response.data.billId;
  //   console.log(bill)
  //   context.addBill(bill);
  // }else{
  //   alert("some error try again/ check details")
  // }
  // }catch(error){
  // console.log("error in adding bill- server error",error)
  // }

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
