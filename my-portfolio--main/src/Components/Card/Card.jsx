import React from 'react'
import './card.css'
import coding from '../../Img/coding.png';
const Card = ({emoji,heading,detail}) => {
  return (
 <div className="Card" >
     {/* <img src={coding} alt="" /> */}
     <span>{heading}</span>
     <span>{detail}</span>
     <button className='c-button'> LEARN MORE</button>
 </div>
   
  )
}

export default Card