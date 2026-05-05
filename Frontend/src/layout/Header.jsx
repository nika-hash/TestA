import React from 'react'
import logo from '../assets/logos/logo_300x300.webp'
import shop from '../assets/logos/shopping-bag (1).png'
import '../style/style.css'
import { Link } from "react-router-dom";
import settings from '../assets/logos/settings (1).png'

function Header() {
  return (
    <header>
      <div className="search-section">
        <img src={logo} alt="" className='header__img'/>
      <input className='search_btn' type="search" placeholder='Search Our Store'/>
      <button className='item-selector_btn'>
        <img className='shop__img' src={shop} alt="" />
        <div className="item-price-and-amout">
          <p>item</p>
          <p>price</p>
        </div>
      </button>
      </div>
    <nav>
      <div className="navigations">
        <Link to="/"><b>Home</b></Link>
        <Link to="/Shop"><b>Shop</b></Link>
        <Link to="/SingleProduct"><b>Products</b></Link>
        <Link to="/Blog"><b>Blog</b></Link>
        <Link to="/Contact"><b>Contact</b></Link>
        <Link to="/about"><b>About Us</b></Link>
      </div>
        <button>
            <img src={settings} alt="" />
        </button>
    </nav>
    </header>
  )
}

export default Header