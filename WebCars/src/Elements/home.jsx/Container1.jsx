import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Container1({ img, title, author, summary }) {
  const navigate = useNavigate();

  const product = {
    title,
    author,
    price: "$19.99",
    description: "This is a brief description of the product. It provides essential information about the features and benefits of the product.",
    summary,
    image: img,
    reviews: {
      stars: 4,
      count: 1234
    }
  };

  const handlePurchase = () => {
    navigate('/product', { state: { product, img, title, author, summary } });
  };

  return (
    <div className="container-1">
      <div className="left">
        <img src={img} alt={title} />
      </div>
      <div className="right">
        <h1 className='title'>{title}</h1>
        <h2 className='author'>Author: {author}</h2>
        <p className='summary'>{summary}</p>
        <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
      </div>
    </div>
  );
}

export default Container1;
