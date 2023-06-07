// import React from 'react'
// import './header.css';
// import Logo from '../../assets/logoF.png';

// function Header() {
//   return (
//       <div className="header">
//         <img src={Logo} alt="" className='logo'></img>

//         <ul className='header-menu'>
//           <li>בית</li>
//           <li>תוכניות</li>
//           <li>למה אנחנו</li>
//           <li>מחירים</li>
//           <li>המלצות</li>
//         </ul>

//       </div>
//     )
// }

// export default Header
// import React from 'react';
// import './header.css';
// import Logo from '../../assets/logoF.png';

// function Header() {
//   const toggleMenu = () => {
//     const menu = document.querySelector('.header-menu');
//     menu.classList.toggle('show');
//   };

//   return (
//     <div className="header">
//       <img src={Logo} alt="" className='logo' />

//       <div className="menu-toggle" onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <ul className='header-menu'>
//         <li>בית</li>
//         <li>תוכניות</li>
//         <li>למה אנחנו</li>
//         <li>מחירים</li>
//         <li>המלצות</li>
//       </ul>
//     </div>
//   )
// }

// export default Header;
import React, { useState } from 'react';
import './header.css';
import Logo from '../../assets/logoF.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <img src={Logo} alt="" className='logo' />

      <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`header-menu ${showMenu ? 'show' : ''}`}>
        <li>בית</li>
        <li>תוכניות</li>
        <li>למה אנחנו</li>
        <li>מחירים</li>
        <li>המלצות</li>
      </ul>
    </div>
  );
}

export default Header;
