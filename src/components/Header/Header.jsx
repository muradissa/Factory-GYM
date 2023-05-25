import React from 'react'
import './header.css';
import Logo from '../../assets/logoF.png';

function Header() {
  return (
      <div className="header">
        <img src={Logo} alt="" className='logo'></img>

        <ul className='header-menu'>
          <li>בית</li>
          <li>תוכניות</li>
          <li>למה אנחנו</li>
          <li>מחירים</li>
          <li>המלצות</li>
        </ul>

      </div>
    )
}

export default Header