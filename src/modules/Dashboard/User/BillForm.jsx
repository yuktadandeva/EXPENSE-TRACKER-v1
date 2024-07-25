import React from 'react'
import { Input } from '../../../shared/Widgets/Input'
import Button from '../../../shared/Widgets/Button'
export const BillForm = ({billHandled,splitBill,activityHandled}) => {
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
    const ipmargin={
      margin:"2px"
    } 
    
  return (
    <div>
      <div>
        <h3 style={heading}>Add Bill</h3>
      </div>
      <div style={pad}>
       <label htmlFor="" style={beauty}>TOTAL BILL </label>
        <Input fn={billHandled} style={ipmargin} val="Enter Amount"></Input><br></br>
        <label htmlFor="" style={beauty}>ACTIVITY</label>
        <Input fn={activityHandled} style={ipmargin}></Input><br>
        </br>
        <Button val="Split Bill" fn={splitBill} ></Button>
        </div>
    </div>
    
  )
}
