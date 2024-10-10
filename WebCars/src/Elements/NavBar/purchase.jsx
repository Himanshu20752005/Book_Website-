import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './purchase.css';

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="page-container">
      <div className="container-6">
        <div className="product-image">
          <img src={product.image} alt="Product-6" />
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-author">by {product.author}</p>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-summary">{product.summary}</p>
          <div className="product-reviews">
            <span className="stars">{"★".repeat(product.reviews.stars)}{"☆".repeat(5 - product.reviews.stars)}</span>
            <span className="review-count">({product.reviews.count} reviews)</span>
          </div>
          <div className="quantity-container">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-input">
              <input 
                type="number" 
                id="quantity" 
                name="quantity" 
                min="1" 
                value={quantity} 
                onChange={handleQuantityChange}
              />
              <button className="increment-button" onClick={incrementQuantity}>+</button>
              <button className="purchase-button2">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
