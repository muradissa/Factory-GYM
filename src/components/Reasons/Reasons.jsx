import React from 'react';
import './reasons.css';

import image1 from '../../assets/image1.png';
// import image2 from '../../assets/image2.png';
// import image3 from '../../assets/image3.png';
// import image4 from '../../assets/image4.png';
import image5 from '../../assets/r11.jpg';
import image6 from '../../assets/r22.jpg';
import image7 from '../../assets/r33.jpg';
// import hero_background from '../../assets/hero_background.jpg';
// import tick from '../../assets/tick.png';
import tick from '../../assets/done-icon2.png';

function Reasons() {
  return (
    
    <div className='reasons-section' id="whyus">
    <div className='reasons-header'>
           <span className='stroke-text'>למה אנחנו ?</span>
    </div>   
    <div className='reasons' >
            
        <br/>
        <div className='left-r'>
            <img src={image1} alt=''/>
            <img src={image5} alt=''/>
            <img src={image7} alt=''/>     
            <img src={image6} alt=''/>
        </div>
        <div className='right-r'>
            <span>כמה סיבות</span>

            <div className='details-r'>
                
                <div>
                    <img src={tick} alt=""/>
                    <span>
                        <b>מקצועיות וניסיון</b> 
                        <br/>
                        המכון כולל צוות מאמנים מקצועיים ומנוסים שיכווין ויעזור לך להשיג את התוצאות המבוקשות
                    </span>
                </div>

                <div>
                    <img src={tick} alt=""/>
                    <span>
                        <b>אימונים מותאמים אישית</b>
                        <br/>
                        במכון הכושר שלנו תקבל תוכנית אימון אישית ומותאמת לצרכים הפיזיים והמטרות האישיות שלך
                    </span>
                </div>

                <div>
                    <img src={tick} alt=""/>
                    <span>
                        <b>ציוד מתקדם</b>
                        <br/>
                        במכון הכושר תמצא מגוון רחב של ציוד כושר מתקדם ומודרני, המספק את הכלים המיטביים לאימונים יעילים
                    </span>
                </div>

                <div>
                    <img src={tick} alt=""/>
                    <span>
                        <b>מגוון תוכניות אימון</b>
                        <br/>
                        המכון מציע מגוון רחב של תוכניות אימון, כולל אימוני כושר כללי, ספורט מותאם, אימון תרבות פיזית ועוד
                    </span>
                </div>

                <div>
                    <img src={tick} alt=""/>
                    <span>
                        <b>ייעוץ תזונת</b>
                        <br/>
                        המכון יכול לספק לך ייעוץ תזונתי מקצועי שיכוון אותך לתפריט תזונתי מאוזן ומתאים לצרכים האישיים שלך
                    </span>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Reasons