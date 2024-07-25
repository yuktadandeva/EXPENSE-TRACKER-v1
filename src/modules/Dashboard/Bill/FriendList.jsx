import { Friend } from "./Friend"
import { BillContext } from "./context/bill-context";
import { useContext } from "react";

export const FriendList = ({share,friendGroup}) => {
  
const Context = useContext(BillContext);
  const border={
    border:"1px solid grey",
    margin:"1px",
    // backgroundColor:"#131e25",
    // color:"white"
  }

  return (
    <div>
        <div className="row" style={border}>
          
          {friendGroup.map((friend,key)=><Friend key={friend.id} friend={friend} share={share} />)}
       
        </div>
    </div>
  )
}
