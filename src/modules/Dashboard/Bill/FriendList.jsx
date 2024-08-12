import { Friend } from "./Friend"
import { BillContext } from "./context/bill-context";
import { useContext } from "react";

export const FriendList = ({friendGroup, share}) => {
  
const context = useContext(BillContext);


  const border={
    border:"1px solid grey",
    margin:"1px",
    // backgroundColor:"#131e25",
    // color:"white"
  }

  return (
    <div>
        <div className="row" style={border}>
          
          {friendGroup.map((friend,index)=><Friend key={index} friend={friend} share={share}/>)}
       
        </div>
    </div>
  )
}
