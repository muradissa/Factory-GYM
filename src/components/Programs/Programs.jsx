import React from 'react';
import './programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

function Programs() {
  return (
    <div className='programs' id="programs">
        {/* header */}
        <div className='programs-header'>
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className='program-categories'>
            {programsData.map((program)=>
                <div className='category'>
                    {program.image}
                    <span className=''>
                        {program.heading}
                    </span>
                    <span className=''>
                        {program.details}
                    </span>
                    <div className='read-more'>
                        <span>
                            Read More
                        </span>
                        <img src={RightArrow} alt=''/>
                    </div>
                </div>
            )}
        </div>

    </div>
  )
}

export default Programs