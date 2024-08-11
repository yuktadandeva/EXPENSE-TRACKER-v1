import React from 'react'
import './Button.css';
const Button = ({val,fn,id}) => {


  return (
   
    <button  className='square-button' id={id} onClick={fn} >{val}</button>
   
  )
}

export default Button;