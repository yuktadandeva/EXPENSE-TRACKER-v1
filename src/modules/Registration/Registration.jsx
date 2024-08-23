import React, { useContext } from 'react'
import { regisContext } from '../Dashboard/context/registration-context';
import {useForm} from 'react-hook-form'
import { Login } from '../LogIn/Login';
import Button from '../../shared/Widgets/Button';

export const Registration = ({toggleRegistration, rStatus}) => {
  const context =  useContext(regisContext);
  const {register, handleSubmit} = useForm();


  const handleRegistration =(data)=>{
    context.addInfo(data);
  }

  const heading = {
    display:"flex"
  }
  const center = {
    width:"40%"
  }
  return (
    <div>
    {rStatus?<Login/>:
    <div>

        <div className="flex" style={heading}>
        <Button fn={toggleRegistration} val={"<back"}></Button>
        <h2 >REGISTRATION</h2>
        </div>


        <form onSubmit={handleSubmit(handleRegistration)}>
            <div>
            <label htmlFor="">name</label>
            <input type="text" name="" id="name" {...register("name", {required: true})}/>
            </div>
            
            <div>
            <label htmlFor="">userId</label>
            <input type="text" name="" id="userId" {...register("userId", {required: true})}/>
            </div>

            <div>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="email" {...register("email", {required: true})}/>
            </div>

            <div>
            <label htmlFor="">profile Image(Enter image address)</label>
            <input type="text" name="" id="userImg" {...register("userImg", {required: false})}/>
            </div>

            <div>
            <label htmlFor="">phoneNumber</label>
            <input type='number' name="" id="phoneNumber" {...register("phoneNumber", {required: true})}/>
            </div>

            <div>
            <label htmlFor="">password</label>
            <input type="password" name="" id="password" {...register("password", {required: true})}/>
            </div>

            <Button type={'submit'} val={"REGISTER"}></Button>
        </form>

    </div>
  }
  </div>
  )
}
