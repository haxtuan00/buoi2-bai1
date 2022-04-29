import React from 'react'
import './styles.css'
const Bai1 = (props) => {
  return (
    <div className='wrap-btn'>
       <button className='btn'>{props.text}</button>
    </div>
  )
}

export default Bai1