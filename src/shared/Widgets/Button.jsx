import React from 'react'
import './Button.css';
const Button = ({val,fn,id, type}) => {


  return (
   
    <button type={type} className='square-button' id={id} onClick={fn} >{val}</button>
   
  )
}

export default Button;