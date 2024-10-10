import React from 'react';
import './home.css';

function Container2({ img, title, author, summary }) {
  return (
    <div className="container-2">
      <div className="left">
        <h1 className='title'>{title}</h1>
        <h2 className='author'>Author: {author}</h2>
        <p className='summary'>{summary}</p>
        <button className="purchase-button">Purchase</button>
      </div>
      <div className="right">
        <img src={img} alt={title} />
      </div>
    </div>
  );
}

export default Container2;
