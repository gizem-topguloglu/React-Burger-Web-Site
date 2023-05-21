import React from 'react'
import {Link} from "react-router-dom";

function Home() {
  const imageUrl = "https://images.deliveryhero.io/image/fd-tr/LH/yjf3-hero.jpg"
  return (
    <div className='home'  style={{backgroundImage: `url(${imageUrl})`}}>
      <div className='headerContainer'>
        <h1>Burger</h1>
        <p>Delicious Hamburgers </p>
        <Link to="/menu">
        <button>MENU</button>
        </Link>
      </div>
    </div>
  )
}

export default Home