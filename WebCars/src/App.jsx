import React from 'react';
import './App.css';
import Nav from './Elements/NavBar/nav.jsx';
import ImageSliders from './Elements/background/ImageSliders.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Purchase from './Elements/purchase.jsx';
import BDE from './Elements/home.jsx/home.jsx';
import Container1 from './Elements/home.jsx/Container1.jsx';
import ProductPage from './Elements/NavBar/purchase.jsx';
import All from './Elements/cards/all.jsx'
const HomePage = () => {
  return (
    <div>
      <ImageSliders />
      <All/>
      <BDE />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="" element={<HomePage /> } />
          <Route path="/container" element={<Container1 img="image_url" title="Book Title" author="Author Name" summary="Book Summary" />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
