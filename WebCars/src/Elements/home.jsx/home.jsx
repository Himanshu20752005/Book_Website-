import React from 'react';
import './home.css';
import Container1 from './Container1';
import Container2 from './Container2';
import middle from '../../assets/middle.jpg';
import Harry from '../../assets/M1.png';
import RDAD from '../../assets/M2.png';
import ALC from '../../assets/M3.png';
import STHW from '../../assets/STHW.png';
import GOT from '../../assets/GOT.png';
import GSBM from '../../assets/GSBM.png';
import DIS from '../../assets/dis.png';

const containerData1 = [
  {
    img: RDAD,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    summary: 'Rich Dad Poor Dad" by Robert T. Kiyosaki contrasts the financial teachings of two father figures: the author\'s own father (Poor Dad), who advises traditional job security, and his friend\'s father (Rich Dad), a successful entrepreneur who advocates for financial independence through investing.'
  },
  {
    img: Harry,
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    summary: 'Harry Potter, a young boy who discovers on his eleventh birthday that he is a wizard, is invited to attend Hogwarts School of Witchcraft and Wizardry. As he enters this new world, he makes friends, learns about magic, and uncovers the truth about his past and the dark forces that threaten the wizarding world.'
  },
  {
    img: ALC,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    summary: '"The Alchemist" follows the journey of Santiago, a shepherd boy, who dreams of finding a treasure in the Egyptian pyramids. Along his journey, he encounters various characters who teach him valuable life lessons. The novel explores themes of destiny, personal legend, and the importance of following one\'s dreams.'
  },
  {
    img : middle
  },

  {
    img: GOT,
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    summary: 'In Westeros, noble families vie for control of the Iron Throne. The Stark family gets entangled in political intrigue and betrayal, while an ancient threat from beyond the Wall looms. The novel blends fantasy, politics, and drama through its rich cast of characters and complex plots.'
  },
  {
    img: STHW,
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    summary: 'Stephen Hawking explores fundamental questions about the universe, including the nature of space and time, black holes, and the Big Bang. Written for a general audience, the book delves into complex scientific concepts with accessible explanations and insightful commentary.'
  },
  {
    img: GSBM,
    title: 'Goosebumps: The Curse of the Mummy\'s Tomb',
    author: 'R.L. Stine',
    summary: 'Gabe visits his archaeologist uncle in Egypt and finds himself in a terrifying adventure involving mummies and ancient curses. The novel blends horror and adventure, appealing to young readers with its suspenseful plot and engaging storytelling.'
  }
];


function BDE() {
  // console.log(assetsArray);
  console.log("all ok")
  return (
    <div>
      {containerData1.map((data, index) => (
        index % 2 === 0 ? (
          <Container1 key={index} img={data.img} title={data.title} author={data.author} summary={data.summary} />
        ): index === 3 ? (
          <div className="middle" style={{ backgroundImage: `url(${middle})` }}>

        {/* <img className='middle' src={middle} /> */}
        <img className='discount' src={DIS} alt="Discount" />
      </div>

        ) : (
          <Container2 key={index} img={data.img} title={data.title} author={data.author} summary={data.summary} />
        )
      ))}
      
        
      
      
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam ut erat laoreet varius.</p>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default BDE;
