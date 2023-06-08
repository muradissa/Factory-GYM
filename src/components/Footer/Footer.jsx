import React from 'react';
import { FiHome, FiInfo, FiAward, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { FiPhone, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-icon">
            <FiHome />
          </div>
          <p className="footer-text">בית</p>
        </div>
        <div className="footer-column">
          <div className="footer-icon">
            <FiInfo />
          </div>
          <p className="footer-text">תוכניות</p>
        </div>
        <div className="footer-column">
          <div className="footer-icon">
            <FiAward />
          </div>
          <p className="footer-text">למה אנחנו</p>
        </div>
        <div className="footer-column">
          <div className="footer-icon">
            <FiDollarSign />
          </div>
          <p className="footer-text"> מחירים </p>
        </div>
        <div className="footer-column">
          <div className="footer-icon">
            <FiTrendingUp />
          </div>
          <p className="footer-text">תוצאות</p>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-icon">
            <FiPhone />
          </div>
          <p className="footer-text">123-456-7890</p>
        </div>
        <div className="footer-column">
          <div className="footer-icon">
            <FiMapPin />
          </div>
          <p className="footer-text">צומת משהד</p>
        </div>
        
      </div>
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-icon">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FiInstagram />
            </a>
          </div>
          {/* <div className="footer-icon vertical-line" /> */}
          </div><div className="footer-column">

          
          <div className="footer-icon">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </a>
          </div>
        </div>
      </div>
        <div className="footer-rights">
          <p className="reserved-text">© All rights reserved to Murad Issa</p>
        </div>
    </footer>
  );
};

export default Footer;