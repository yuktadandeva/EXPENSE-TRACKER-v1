import { BillForm } from './BillForm'
import { Friends } from './Friends'



export function Profile({billHandled,splitBill,activityHandled,userFriendList,user,add}) {
const flex={
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
}

const myStyle={
    borderRadius:"50%",
    border:"3px solid black",
    marginTop:"20px",
    position:"relative",
     width:"180px",
     height:"180px",
     overflow:"hidden"
}

const img={
    width:"100%",
    height:"100%"
}

const textAlign ={
  textAlign:"center"
}

return (
    <div>
        <div className="flex" style={flex}>
        <div className="profile-pic" style={myStyle}>
            <img style={img} src="https://th-i.thgim.com/public/incoming/90m4jh/article68100867.ece/alternates/FREE_1200/seedhe%20maut%20-%20photoshoot%202023%20-%20shot%20by%20kyabc-20%201.jpg" alt="" />
        </div>
        </div>
        <div className="user-info" style={textAlign}>
            <h3>{user.name}</h3>
          <h6><i>{user.userId}</i></h6>
        </div>
        <div className="add-bill row">
         <BillForm billHandled={billHandled} splitBill={splitBill} activityHandled={activityHandled}></BillForm>
        </div>
        <div className="add-friend">
          <Friends userFriendList={userFriendList} add={add}></Friends>
        </div>
    </div>
  )
}
