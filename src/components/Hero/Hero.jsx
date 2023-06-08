import React from 'react'
import './hero.css';
import hero_image4 from '../../assets/hero_image4.png';
import herooo from '../../assets/herooo.gif';


function Hero() {
  return (
     <div className='hero-section' id='home'>
     <div className='hero' >
        <div className="left-h">
            <div className="the-best-ad">
              <div></div>
              <span>
                מכון כושר ברמת חול
              </span>
            </div>
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
           
         
        </div>
        
        <div className="right-h">
          
          <div className='right-h-icon'>

            <div className='herooo'>
              <img src={herooo} alt='' style={{borderRadius:"50%"}}></img>
            </div>

          </div>
          
          <img src={hero_image4} alt="" className='hero-image'/>
          {/* <div className='home-page-img'></div> */}
        </div>

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
   </div>
  )
}

export default Hero