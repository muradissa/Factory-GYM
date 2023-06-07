import React from 'react'
import './hero.css';
import Header from '../Header/Header';
import hero_image4 from '../../assets/hero_image4.png';
import hero_image_back from '../../assets/hero_image_back.png';
import hero_background from '../../assets/hero_background.jpg';
// import hero_image_back2 from '../../assets/bluee.png';
import Heart2 from '../../assets/heartt.gif';
import chart from '../../assets/chart.gif';




function Hero() {
  return (
     <>
     <div className='hero' style={{background:hero_background}}>
        <div className="left-h">
            {/* Navbar */}
            <Header/>
            
            <div className="the-best-ad">
              <div></div>
              <span>
                מכון כושר ברמת חול
              </span>
            </div>
            {/* <div className='hero-text'>
              <div>
                <span className='stroke-text'>Shape </span>
                <span> Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              <div className='span'>
                כאן נעזור לך לעצב ולבנות את הגוף האידיאלי שלך ולחיות את חייך במלואם
              </div>
            </div> */}
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>המקום המושלם </span>
                <span> להשקפת</span>
              </div>
              <div>
                <span> כושר ושיפור ביכולת הגופנית</span>
              </div>
              <div className='span'>
                כאן נעזור לך לעצב ולבנות את הגוף האידיאלי שלך ולחיות את חייך במלואם
              </div>
            </div>
            {/* figures */}
            {/* <div className='figures'>
              <div>
                <span>+40</span>
                <span>מכשירי כושר</span>
              </div>
              <div>
                <span>+ 200</span>
                <span>משתתפים</span>
              </div>
              <div>
                <span>+50</span>
                <span>תוכניות כושר</span>
              </div>
            </div> */}
            {/* hero-buttons */}
            {/* <div className='hero-buttons'>
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div> */}
        </div>
        <div className="right-h">
          
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
          
    

        </div>
        {/* figures */}
        {/* <div className='figures'>
              <div>
                <span>+40</span>
                <span>מכשירי כושר</span>
              </div>
              <div>
                <span>+ 200</span>
                <span>משתתפים</span>
              </div>
              <div>
                <span>+50</span>
                <span>תוכניות כושר</span>
              </div>
            </div> */}
    </div>
    <div className='figures'>
      <div>
        <span>40+</span>
        <span>מכשירי כושר</span>
      </div>
      <div>
        <span>200+</span>
        <span>משתתפים</span>
      </div>
      <div>
        <span>50+</span>
        <span>תוכניות כושר</span>
      </div>
    </div>
   </>
  )
}

export default Hero