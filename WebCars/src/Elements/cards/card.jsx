import React from 'react'
import './card.css'
function Card({data}) {
  console.log(data.img);
    console.log(data.head);
    console.log(data.cost);

  return (
    
    <div>
      <div className="container">
       <div className="card1">
        <img src={data.img} alt="Card Image"/>
        <h1>{data.head}</h1>
        <h2>{data.cost}</h2>
        </div>
    </div>
    </div>
  )
}

export default Card
