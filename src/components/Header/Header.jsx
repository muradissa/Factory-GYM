
import React, { useState } from 'react';
import './header.css';
// import Logo from '../../assets/logoF.png';
import Logo from '../../assets/icon2.jpg';


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div >
    <div className="header">
      {/* <img src={Logo} alt="" className='logo' /> */}
      <h3 style={{margin:"0 0"}}>GYM</h3>

      <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`header-menu ${showMenu ? 'show' : ''}`}>
        <a href='#home'>בית</a>
        <a href='#programs'>תוכניות</a>
        <a href='#whyus'>למה אנחנו</a>
        <a href='#results'>תוצאות</a>
        <a href='#schedule'>שעות עבודה</a>
        <a href='#prices'>מחירים</a>
      </ul>
    </div>
    </div>
  );
}

export default Header;
