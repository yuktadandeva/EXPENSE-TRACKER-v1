import Header from "../../shared/Components/Header"
import Footer from "../../shared/Components/Footer"
import { Profile } from "./User/Profile"
import { Bill } from "./Bill/Bill"
import { useState, useEffect } from "react"
import { regisContext } from "./context/registration-context.js"
import { BillContext } from "./Bill/context/bill-context.js"
import { Login } from "../LogIn/Login"
import axios from "axios"

export const Dashboard = () => {

const [totalBill, setBill] = useState();
const [friendList , setFriendList]= useState([]);
const [user, setUser] = useState(null);
const [login, setLogin]= useState(false);
const [foundUser, setFoundUser] = useState();
const [regisInfo, setRegisInfo] = useState({});
const [rStatus, setStatus] = useState(false);
let bill;
const addBill = (bill)=>{
console.log("add bill in dashboard", bill);
}

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

const addInList = (friend)=>{
  const friendsClone = [...friendGroup];
      friendsClone.push(friend);
      setGroup(friendsClone);
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
setFoundUser(response.data.user);
console.log("founduser is ", foundUser);
 }catch(error){
 console.log("user not found", error)
 }

}
const addInFriendlist =async (friendId)=>{
console.log("function called in dashboard to add friend")

try{
const response = await axios.post(import.meta.env.VITE_ADDFRIEND_URL,{
  userId: user.userId,
  friendId: friendId
})
if(response.status==200){
  alert("friend added!");

}else{
  alert("error in adding friend try again!")
}

}catch(error){
console.log("error in adding", error)
}

}

//bill 
const findingFriend= (userId)=>{
  const friend = friendList.find((friend)=> friend.id == userId);
  console.log('friend', friend)
  return friend;
} 

// useEffect(() => {
//   console.log("Friends in Group:", friendGroup);
//   console.log("total friends", friendGroup.length);
// }, [friendGroup]);

const handleAdd =(e)=>{
  const userId = e.target.id; 
  console.log(userId)
  const friend = findingFriend(userId);
  if (friend) {
    setGroup((prevFriends) => [...prevFriends, friend]);
  }else {
    console.log("User not found");
  }
}

//calculation and handling bill details on enter

const handleBill= (e)=>{
 setBill(e.target.value);
}
const handleClick=()=>{
  calculateShare(totalBill);
}
const handleActivity=(e)=>{
  setActivity(e.target.value);
  console.log(e.target.value)
}
const calculateShare=()=>{
  setShare(parseFloat(totalBill/friendGroup.length).toFixed(2));
}

// styling css

const font={fontFamily:"Mulish", height:"100vh"}
const myStyle ={border:"1px solid grey"}
const margin ={margin:"50px"}

return (
    <div style={font}>

    <Header reset={reset} searchUser={searchUser} foundUser={foundUser} user={user} add={addInFriendlist} login={login}></Header>

    <regisContext.Provider value={{regisInfo:regisInfo, addInfo:addInfo}}>
    <BillContext.Provider value={{bill:bill,addBill:addBill}}>
    
    {login?<div className="container" >
      
        <div className="row" style={margin}>
            <div className="col-8" >
                <div className="totalMoney">
                 <Bill></Bill>
                </div>
            </div>
            <div className="col-4" style={myStyle}>
                {user?<Profile user={user} friendList={friendList}></Profile>:<p>Loading</p>}
            </div>
        </div>
     
    </div>: <Login onLogin={onLogin} rStatus={rStatus}/>}

    </BillContext.Provider>
    </regisContext.Provider>

    <Footer></Footer>
    </div>
  )
}
