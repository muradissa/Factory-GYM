import React, { useState } from 'react';
import './results.css';

import hero_background from '../../assets/hero_background.jpg';

const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
  ];

// const Results = ({ images }) => {
const Results = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className='results'>
        <span className='stroke-text'>תוצאות</span>

        <div className="slider">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                <div className="slide" key={index}>
                    <img src={hero_background} alt={`Slide ${index}`} className="slide-image" />
                </div>
                ))}
            </div>
            <button className="slider-button prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="slider-button next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
        <h2  className='results-footer-text'> תוצאות מדהימות בזמן קצר , מעקב צעד בצעד</h2>
        {/* <span className='results-footer-text'> תוצאות מדהימות בזמן קצר </span> */}
    </div>
  );
};

export default Results;
