import React from 'react';
import './adventure.css';
import C1 from '../../../assets/A1.jpg';
import C2 from '../../../assets/A2.jpg';
import C3 from '../../../assets/A3.jpg';
import C4 from '../../../assets/A4.jpg';
import C5 from '../../../assets/A5.jpg';
import C6 from '../../../assets/A6.jpg';
import C7 from '../../../assets/A7.png';
// import C8 from '../../../assets/A8.png';

let array = [
    { img: C1, head: "The Hobbit", cost: "Rs 700" },
    { img: C2, head: "Treasure Island", cost: "Rs 550" },
    { img: C3, head: "The Adventures of Huckleberry Finn", cost: "Rs 600" },
    { img: C4, head: "Journey to the Center of the Earth", cost: "Rs 650" },
    { img: C5, head: "The Call of the Wild", cost: "Rs 500" },
    { img: C6, head: "King Solomon's Mines", cost: "Rs 550" },
    { img: C7, head: "Treasure Island", cost: "Rs 550" },
    // { img: C8, head: "The Hobbit", cost: "Rs 700" },
];

const Adventure = () => {
  return (
    <div className="adventure-container">
      {array.map((item, index) => (
        <div className="card2" key={index}>
          <img src={item.img} alt={item.head} className="card-img" />
          <div className="card-content">
            <h3 className="card-head">{item.head}</h3>
            <p className="card-cost">{item.cost}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Adventure;
