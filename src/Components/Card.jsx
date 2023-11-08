import React from 'react';
import "./styles/Card.scss"
const Card = (props) => {
  return (
    <div>
        <img className='card' src={props.img} alt='' />
        
    </div>
  )
}

export default Card;