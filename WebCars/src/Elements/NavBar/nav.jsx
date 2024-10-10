import React from 'react'
import './nav.css'
import logo from '../../assets/logo-React.png'

function Nav() {

   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">

<div class="header1">
          {/* <div className="menu" onClick={toggleMenu}>
            <ion-icon name="menu-outline"></ion-icon>
          </div> */}
    <a href="#" className="logo"><img src={logo}/></a>

    <form action="" className="search">
        <input type="search" name="" placeholder="search hear...." id="searchBar"/>
        <label for="searchBar" className="fa fa-search"></label>
    </form>



<div className="icons">
    {/* <div id="search-btn" class="fas fa-search"></div> */}
    <a href="#" className="fas fa-heart"></a>
    <a href="#" className="fas fa-shopping-cart"></a>
    <div id="login-btn" className="fas fa-user"></div>
</div>

</div>


<div className="header-2">
<nav className="navbar">
    <a href="#home">Home</a>
    <a href="#featured">Featured</a>
    <a href="#arrivals">Arrival</a>
    <a href="#reviews">Reviews</a>
    <a href="#contact">Contact</a>
</nav>
</div>

</header>
    </div>
  )
}

export default Nav
