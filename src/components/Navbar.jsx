import React from 'react'
import {Link} from "react-router-dom";
const imageUrl = "https://img.icons8.com/?size=512&id=12869&format=png"


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={imageUrl} alt= "Logo" />
        </div>
        <div className='rightSide'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar;