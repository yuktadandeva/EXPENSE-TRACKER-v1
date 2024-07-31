import Header from "../../shared/Components/Header"
import Footer from "../../shared/Components/Footer"
import { Profile } from "./User/Profile"
import { Bill } from "./Bill/Bill"
import { useState, useEffect } from "react"

import { BillContext } from "./Bill/context/bill-context"
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
const [errors, setErrors] = useState(null);
const[login, setLogin]= useState(false);
const [foundUser, setFoundUser] = useState(null);

const [username, setUsername]= useState();
const [password, setPassword]= useState();

// const addInList = (friend)=>{
//   const friendsClone = [...friendGroup];
//       friendsClone.push(friend);
//       setGroup(friendsClone);
//}

//on loading website getting users do this from backend
// useEffect(()=>{
//   getUsers();
// },[])

// const getUsers = async () => {
//   try {
//     const USERS_ENDPOINT = import.meta.env.VITE_USERS_URL;
//     const usersData = await getApiCall(USERS_ENDPOINT);
//     console.log("Users are being fetched:", usersData);
//     setUsers(usersData); 

//   } catch (err) {
//     setErrors(err);
//     console.log("Error fetching users:", err);
//   }
// };


//handles login
const reset = ()=>{
  setLogin(false);
}

const onLogin =async (data)=>{
  
  const userid = data.userid;
  const password = data.passWord;

  console.log("user id entered is",userid,"password entered is", password )

  try{
    const response = await axios.post(import.meta.env.VITE_GETUSER_URL, {
      userId : userid,
      password: password
    })

    console.log(response.data);

    if(response.statusText(OK)){
     setUser(response.data.user);
     setFriendList(response.data.user.friendList);
     setLogin(true);
    }
    else{
     console.log("login failed");
     setLogin(false);
    }
  }catch(error){
    console.log("error in fetching user")
  }

  // console.log(username,password)

  // if (users && users.length > 0) {
  //   const fetchedUser =  getUser(users, username, password);
  //   if(fetchedUser){
  //     setLogin(true);
  //   }
  //   console.log("User is being fetched:", fetchedUser);
  //   setUser(fetchedUser);
  //   setFriendList(getUserFriendList(users, username));
    
  // }
}

const getUser = (users, userId, password) => {
  const userProfile = users.find((user) => user.userId === userId && user.password === password);
  return userProfile ? userProfile :notfound();
};

const notfound = ()=>{
  alert("WRONG DETAILS OR USER NOT REGISTERED");
  setLogin(false)
}

const getUserFriendList = (users,userId)=>{
const user = users.find((user)=> user.userId == userId);
return user ? user.friendList : console.log("user not found");
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
      { login?
    <div className="container" >
      {/* <BillContext.Provider value={{friends:friendGroup, addInList:addInList}}> */}
        <div className="row" style={margin}>
            <div className="col-8" >
                <div className="totalMoney">
                 <Bill bill={totalBill} activity={activity} share={share} friendGroup={friendGroup}></Bill>
                </div>
            </div>
            <div className="col-4" style={myStyle}>
                {user?<Profile user={user} billHandled={handleBill} splitBill={handleClick} activityHandled={handleActivity} userFriendList={friendList} user={user} add={handleAdd} ></Profile>:<p>Loading</p>}
            </div>
        </div>
        {/* </BillContext.Provider> */}
    </div>:<Login onLogin={onLogin} ></Login>}
    <Footer></Footer>
    </div>
  )
}
