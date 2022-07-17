import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './style.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-title'>
          <Link to='/'>
              Restaurant
          </Link>
        </div>
        
        <ul className='nav-links'>
          <li>
            <Link to='/'>Our menu</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/cart'>
              <AiOutlineShoppingCart/>
              <span className='cart-count'>10</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;