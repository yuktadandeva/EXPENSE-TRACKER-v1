import Header from "../../shared/Components/Header"
import Footer from "../../shared/Components/Footer"
import { Profile } from "./User/Profile"
import { Bill } from "./Bill/Bill"
import { useState, useEffect } from "react"
import { regisContext } from "./context/registration-context.js"
import { Login } from "../LogIn/Login"
import axios from "axios"

export const Dashboard = () => {

const [totalBill, setBill] = useState();
const [share, setShare] = useState();
const [activity, setActivity] = useState();
const [friendList , setFriendList]= useState([]);
const [friendGroup, setGroup] = useState([]);
const [user, setUser] = useState(null);
const [users, setUsers] = useState();

const[login, setLogin]= useState(false);
const [foundUser, setFoundUser] = useState(null);

const [regisInfo, setRegisInfo] = useState({});
// let regisInfo={};
const addInfo = (data)=>{
 setRegisInfo(data);
 registerUser(regisInfo)
}

const registerUser = async (info)=>{
 try{
  const response = await axios.post(import.meta.env.VITE_ADDUSER_URL,{
    info
  })
  console.log(response);
 }catch(err){
  console.log("error in registering ", err)
 }
}

// const addInList = (friend)=>{
//   const friendsClone = [...friendGroup];
//       friendsClone.push(friend);
//       setGroup(friendsClone);
// }

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
     console.log("login failed");
     setLogin(false);
     return false;
    }
  }catch(error){
    console.log("error in fetching user");
    return false
  }
}

//search handle


const searchUser=(userName)=>{
  if(users){
    console.log(userName)
const foundUser = users.find((user)=>user.name==userName);
setFoundUser(foundUser)
console.log(foundUser);
}}

const addInFriendlist = (foundUser)=>{
  console.log("function called in dashboard to add friend")
user.friendList.push(foundUser);
console.log("user added",user.friendList)

}



//bill 
const findingFriend= (userId)=>{
  const friend = friendList.find((friend)=> friend.id == userId);
  console.log('friend', friend)
  return friend;
}

useEffect(() => {
  console.log("Friends in Group:", friendGroup);
  console.log("total friends", friendGroup.length);
}, [friendGroup]);

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

    <Header reset={reset} searchUser={searchUser} foundUser={foundUser} add={addInFriendlist} login={login}></Header>

    <regisContext.Provider value={{regisInfo:regisInfo, addInfo:addInfo}}>
    {login?

    <div className="container" >
      
        <div className="row" style={margin}>
            <div className="col-8" >
                <div className="totalMoney">
                 <Bill bill={totalBill} activity={activity} share={share} friendGroup={friendGroup}></Bill>
                </div>
            </div>
            <div className="col-4" style={myStyle}>
                {user?<Profile user={user} billHandled={handleBill} splitBill={handleClick} activityHandled={handleActivity} userFriendList={friendList} add={handleAdd} ></Profile>:<p>Loading</p>}
            </div>
        </div>
     
    </div>: <Login onLogin={onLogin}/>}
    </regisContext.Provider>
    <Footer></Footer>
    </div>
  )
}
