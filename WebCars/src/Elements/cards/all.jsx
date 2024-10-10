import React from 'react'
import './card.css'
import Card from './card.jsx'
import './all.css'
import C1 from '../../assets/c1.jpg'
import C2 from '../../assets/c2.jpg'
import C3 from '../../assets/c3.webp'
import C4 from '../../assets/c4.jpg'
import C5 from '../../assets/c5.webp'
import C6 from '../../assets/c6.jpg'



let array = [
    {img:C1, head: "Harry Potter and the Philosopher's Stone", cost: "Rs 650"},
    {img:C2, head: "To Kill a Mockingbird", cost: "Rs 500"},
   
    {img:C3 , head: "The Great Gatsby", cost: "Rs 550"},
    {img:C4, head: "Pride and Prejudice", cost: "Rs 600"},
    {img:C5 , head: "The Catcher in the Rye", cost: "Rs 480"},
    {img:C1, head: "Harry Potter and the Philosopher's Stone", cost: "Rs 650"},
    {img:C2, head: "To Kill a Mockingbird", cost: "Rs 500"},
   
    {img:C3 , head: "The Great Gatsby", cost: "Rs 550"},
    {img:C4, head: "Pride and Prejudice", cost: "Rs 600"},
    {img:C5 , head: "The Catcher in the Rye", cost: "Rs 480"},
    
];

function All() {
  console.log("all ok")
  return (

    <>
    {/* <div className="header-tagline"><h1> Where Every Book Finds a Reader </h1></div> */}

    <div className='cards'>
      {/* <Card data={array[0]} />
      <Card data={array[1]} />
      <Card data={array[2]} />
      <Card data={array[3]} />
      <Card data={array[4]} /> */}

    {array.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
    </>
  )
}

export default All
