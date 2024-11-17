import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header id="home">
      <Link to="" className="logo">Foodies</Link>
      <nav>
        <ul className="navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            
            <li>
                <Link to="/addtocart">Cart</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header