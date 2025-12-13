import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState("Home")

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={assets.logo} alt="App Logo" className="logo" />

      {/* Menu */}
      <ul className="navbar-menu">
        <li
          className={menu === "Home" ? "active" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </li>

        <li
          className={menu === "Menu" ? "active" : ""}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </li>

        <li
          className={menu === "Mobile-App" ? "active" : ""}
          onClick={() => setMenu("Mobile-App")}
        >
          Mobile App
        </li>

        <li
          className={menu === "Contact-Us" ? "active" : ""}
          onClick={() => setMenu("Contact-Us")}
        >
          Contact Us
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Cart" />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
