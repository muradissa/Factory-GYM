import React from 'react';
import './programs.css';
import {programsData} from '../../data/programsData';
import { CgGym } from 'react-icons/cg';
import { BiRun } from 'react-icons/bi';
import { BsFire,BsHeartPulseFill } from 'react-icons/bs';
import MovingLine from './MovingLine';
import { FcApproval } from 'react-icons/fc';



function Programs() {
  return (
    <div className='programs' id="programs">
        {/* header */}
        <div className='programs-header'>
            <span className='stroke-text'>התוכניות שלנו</span>
        </div>

        <div className='program-categories'>
         
            <div className='category'>
                <BsFire/>
                <span className=''>
                    שריפת שומנים
                </span>
                <span className=''>
                    תוכנית זו מתאימה לכם שרוצים להיפטר מהשומן ולרדת במשקל
                </span>
                <div className='read-more'>
                    <FcApproval style={{scale:"2"}}/>                   
                </div>
            </div>
            <div className='category'>
                <CgGym style={{color:"var(--blue)"}}/>
                <span className=''>
                    אימון כוח
                    בניית שרירים 
                </span>
                <span className=''>
                    בתוכנית זו, אתה מאומן לשפר את הכוח שלך באמצעות תרגילים רבים
                </span>
                <div className='read-more'>
                    <FcApproval style={{scale:"2"}}/>       
                </div>
            </div>
            <div className='category'>
                <BsHeartPulseFill/>
                <span className=''>
                    בריאות וכושר
                </span>
                <span className=''>
                    תוכנית זו מיועדת למי שמתאמן רק למען כושר גופם ולא לבניית הגוף
                </span>
                <div className='read-more'>
                    <FcApproval style={{scale:"2"}}/>
                </div>
            </div>
        </div>
        
        <MovingLine/>
    </div>
  )
}

export default Programs