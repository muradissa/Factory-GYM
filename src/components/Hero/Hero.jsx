import React from 'react'
import './hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image2 from '../../assets/hero_image2.png';
import hero_image4 from '../../assets/hero_image4.png';



import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import hero_background from '../../assets/hero_background.jpg';
import hero_image_back2 from '../../assets/bluee.png';
import Heart2 from '../../assets/heartt.gif';
import chart from '../../assets/chart.gif';




function Hero() {
  return (
    <div className='hero' style={{background:hero_background}}>
        <div className="left-h">
            <Header/>
            
            <div className="the-best-ad">
              <div></div>
              <span>
                מכון כושר ברמת חול
              </span>
            </div>
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Shape </span>
                <span> Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              {/* <div className='span'>
                in here we woll help you to shape and build your ideal body and live up your life to fullest
              </div> */}
              <div className='span'>
                כאן נעזור לך לעצב ולבנות את הגוף האידיאלי שלך ולחיות את חייך במלואם
              </div>
            </div>
            {/* figures */}
            <div className='figures'>
              <div>
                <span>+140</span>
                <span>Expert Coaches</span>
              </div>
              <div>
                <span>+ 978</span>
                <span>Members Joined</span>
              </div>
              <div>
                <span>+50</span>
                <span>Fitness Programs</span>
              </div>
            </div>
            {/* hero-buttons */}
            <div className='hero-buttons'>
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          
          <div className='heart-calories'>

            <div className='heart-rate'>
              <img src={Heart2} alt=''></img>
              <span>Heart Rate</span>
              <span>116 bpm</span>
            </div>

            <div className='caloriess'>
              <img src={chart} alt=""/>
              {/* <div> */}
                <span>Calories Burned </span>
                <span>220 kcal</span>
              {/* </div> */}
            </div>

          </div>
          
          
          {/* hero images */}
          <img src={hero_image4} alt="" className='hero-image'/>
          {/* <img src={hero_image_back2} alt="" className='hero-image-back'/> */}
          
          {/* calories */}
          {/* <div className='calories'>
            <img src={chart} alt=""/>
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
            
          </div> */}

        </div>
    </div>
  )
}

export default Hero