import React, { useState } from 'react';
import './results.css';
import Result0 from '../../assets/result0.jpg';
import Result4 from '../../assets/result4.jpg';
import Result5 from '../../assets/result5.jpg';

const images = [
  Result0,
  Result4,
  Result5,
];

const Results = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className='results' id="results">
        <span className='stroke-text'>תוצאות</span>

        <div className="slider">
            <div className="slider-wrapper" style={{ transform: `translateX(${currentIndex * 100}%)` }}>
                {/* {images.map((image, index) => ( */}
                <div className="slide" key={0}>
                    <img src={Result0} alt={`Slide ${0}`} className="slide-image" />
                </div>
                <div className="slide" key={1}>
                    <img src={Result4} alt={`Slide ${1}`} className="slide-image" />
                </div>
                <div className="slide" key={2}>
                    <img src={Result5} alt={`Slide ${2}`} className="slide-image" />
                </div>
                {/* ))} */}
            </div>
            <button className="slider-button prev" onClick={nextSlide}>
                 &#10095;
            </button>
            <button className="slider-button next" onClick={prevSlide}>
            &#10094;
            </button>
        </div>
        <h2  className='results-footer-text'> תוצאות מדהימות בזמן קצר , מעקב צעד בצעד</h2>
    </div>
  );
};

export default Results;
