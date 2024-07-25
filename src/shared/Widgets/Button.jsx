import React from 'react'
import './Button.css';
const Button = ({val,fn,}) => {


  return (
   
    <button className='square-button' onClick={fn} >{val}</button>
   
  )
}

export default Button;