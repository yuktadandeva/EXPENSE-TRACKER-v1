import Header from "../../shared/Components/Header"
import Footer from "../../shared/Components/Footer"

import { Profile } from "./User/Profile"
import { Bill } from "./Bill/Bill"
import { useState, useEffect } from "react"
import { regisContext } from "./context/registration-context.js"
import { BillContext } from "./Bill/context/bill-context.js"
import { Login } from "../LogIn/Login"
import axios from "axios"
import { PendingBill } from "./Pendingbill/PendingBill.jsx"

export const Dashboard = () => {

const [totalBill, setBill] = useState();
const [friendList , setFriendList]= useState([]);
const [user, setUser] = useState(null);
const [login, setLogin]= useState(false);
const [foundUser, setFoundUser] = useState();
const [regisInfo, setRegisInfo] = useState({});
const [rStatus, setStatus] = useState(false);
const [friendsBill, setFriendsBill] = useState([]);
const [friendIDs, setFriendIDs] = useState([]);
const [pendingBills, setPendingBills] = useState([]);



//adding bill information
const addNewBill =async (data)=>{
 setBill(data);
 console.log(totalBill)

}

const friendIDsClone = [...friendIDs];
const friendsClone = [...friendsBill];


const addInBillList = (friend)=>{
  console.log("data in dashboard",friend);
  friendIDsClone.push(friend.friend._id);
  setFriendIDs(friendIDsClone);
  friendsClone.push(friend.friend);
  setFriendsBill(friendsClone);
  
}
useEffect(()=>{
  console.log(friendIDs);
},[friendIDs]);
useEffect(()=>{
  console.log(friendsBill);
},[friendsBill])

const removeFromList=(friend)=>{

  const updatedFriendIDsClone = friendIDs.filter( element => {
    return element !== friend.friend._id;
  });
  setFriendIDs(updatedFriendIDsClone)
  console.log("remove from list", friend.friend._id)

  const updatedFriendsBill =friendsBill.filter(element =>{
    return element !== friend.friend;
  })
  setFriendsBill(updatedFriendsBill);
}

const sendData = ()=>{
  if(!totalBill){
    alert("enter bill details first")
  }else{
    postData();
  }
}
const postData= async ()=>{
    try{
      const data = {billId: totalBill.billId, friendIds:friendIDs}
      console.log("send data please", data)
      const response = await axios.post(import.meta.env.VITE_ADDFRIENDBILL_URL,{
      data
     })
     if(response.status==200){
      alert("friends added!")
     }else{
      alert("cannot add try again")
     }
    }catch(error){
     console.log("error in adding data", error)
    }
  }
 

//user registration
const addInfo = (data)=>{
 setRegisInfo(data);
 registerUser(regisInfo)
}

const registerUser = async (info)=>{
 try{
  const response = await axios.post(import.meta.env.VITE_ADDUSER_URL,{
    info
  })
  if(response.status==200){
    alert("successfully registered go back and login");
    setStatus(true);
  }else{
    alert("some error user id should be unique")
  }
 }catch(err){
  alert("error in registering ", err)
 }
}

//handles login
const reset = ()=>{
  setLogin(false);
}

const onLogin =async (data)=>{
  
  const userid = data.userid;
  const password = data.passWord;

  try{
    const response = await axios.post(import.meta.env.VITE_GETUSER_URL, {
      userId : userid,
      password: password
    })

    console.log(response.data);

    if(response.status==200){
     setUser(response.data.user);
     setFriendList(response.data.user.friendList);
     setPendingBills(response.data.user.userBills);
     setLogin(true);
     return true;
    }
    else{
     alert("login failed");
     setLogin(false);
     return false;
    }
  }catch(error){
    console.log("error in fetching user");
    return false
  }
}

//search handle

const searchUser= async(userName)=>{
 try{
 const response = await axios.get(import.meta.env.VITE_VIEWUSER_URL,{
  params:{
    name:userName
  }
 })
 
 if(response.status==200){
  setFoundUser(response.data.user);
  console.log("founduser is ", foundUser);
 }else{
alert("not found");
 }
 }catch(error){
  if(response.status==400){
    alert("friend already added!");
   }
 console.log("user not found", error)
 }

}

//adding searched friend in user friend list
const addInFriendlist = async (friendId)=>{
try{
const response = await axios.post(import.meta.env.VITE_ADDFRIEND_URL,{
  userId: user.userId,
  friendId: friendId
})
if(response.status==200){
  fetchUpdatedFriendlist();
}
}catch(error){
  alert("error in adding friends")
}
}

//fetching updated friend list after adding a new friend
const fetchUpdatedFriendlist =async ()=>{
  try{
    const response = await axios.get(import.meta.env.VITE_GETFRIENDLIST_URL,{
     params:{
       name:user.name
     }
    })
    if(response.status==200){
      setFriendList();
      setFriendList(response.data.user[0].friendList);
    }
    }catch(error){
    console.log("updated friend list not fetched")
    }
}


// styling css

const font={fontFamily:"Mulish", height:"100vh"}
const myStyle ={border:"1px solid grey"}
const margin ={margin:"50px"}

return (
    <div style={font}>

    <Header reset={reset} searchUser={searchUser} foundUser={foundUser} user={user} add={addInFriendlist} login={login}></Header>

    <regisContext.Provider value={{regisInfo:regisInfo, addInfo:addInfo}}>
    <BillContext.Provider value={{bill:totalBill,friends:friendsBill,addBill:addNewBill, addInList:addInBillList,removeFromList:removeFromList, sendData: sendData}}>
    
    {login ?<div className="container" >
      
        {user?<div className="row" style={margin}>
            <div className="col-8" >
                <div className="totalMoney">
                <Bill user={user}></Bill>
                </div>

                <div>
                <PendingBill pendingBills={pendingBills}></PendingBill>
                </div>

            </div>
            <div className="col-4" style={myStyle}>
               <Profile user={user} friendList={friendList}></Profile>
            </div>
        </div>:<p>loading...</p>}
     
    </div>: <Login onLogin={onLogin} rStatus={rStatus}/>}

    </BillContext.Provider>
    </regisContext.Provider>

    <Footer></Footer>
    </div>
  )
}
