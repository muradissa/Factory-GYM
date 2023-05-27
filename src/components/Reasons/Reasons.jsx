import React from 'react';
import './reasons.css';

import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import hero_background from '../../assets/hero_background.jpg';
import tick from '../../assets/tick.png';

function Reasons() {
  return (
    <div className='reasons' id="reasons">
        <div className='left-r'>
            <img src={image1} alt=''/>
            <img src={hero_background} alt=''/>
            <img src={image2} alt=''/>
            {/* <img src={image4} alt=''/> */}
        </div>
        <div className='right-r'>
            <span>Some Reasons</span>
            <div>
                <span className='stroke-text'>Why </span>
                <span className=''>Choose us ?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt=""/>
                    <span>Over 140+ Expert Coachs</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>Train Smarter and faster then before</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>1 Free Program for new memebers</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>Reliable Partners</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons