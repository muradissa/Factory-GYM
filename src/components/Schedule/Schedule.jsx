import React from 'react';
import './schedule.css';
import clock from '../../assets/clock.png'
const Schedule = () => {

  function isTimeInRange() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
  
    const startTimeRange1 = { hour: 8, minute: 0 };
    const endTimeRange1 = { hour: 13, minute: 0 };
  
    const startTimeRange2 = { hour: 13, minute: 10 };
    const endTimeRange2 = { hour: 23, minute: 0 };
  
    const start1 = new Date();
    start1.setHours(startTimeRange1.hour, startTimeRange1.minute, 0);
  
    const end1 = new Date();
    end1.setHours(endTimeRange1.hour, endTimeRange1.minute, 0);
  
    const start2 = new Date();
    start2.setHours(startTimeRange2.hour, startTimeRange2.minute, 0);
  
    const end2 = new Date();
    end2.setHours(endTimeRange2.hour, endTimeRange2.minute, 0);
  
    const currentTime = new Date();
    currentTime.setHours(currentHour, currentMinutes, 0);
  
    return (currentTime >= start1 && currentTime <= end1) || (currentTime >= start2 && currentTime <= end2);
  }

  const data = [
    { day: 'ראשון', men: '---', women: '15:00 - 20:00' },
    { day: 'שני', men: '08:00 - 13:00 \n16:00  - 23:00', women: '---' },
    { day: 'שלישי', men: '08:00 - 13:00 \n17:10  - 23:00', women: '13:10 - 17:00' },
    { day: 'רביעי', men: '13:10 - 23:00', women: '08:00 - 13:00' },
    { day: 'חמישי', men: '08:00 - 14:00 \n19:10  - 23:00', women: '14:10 - 19:00' },
    { day: 'ששי', men: '13:10 - 23:00', women: '08:00 - 13:00' },
    { day: 'שבת', men: '08:00 - 14:00 \n17:10  - 23:00', women: '14:10 - 17:00' },
    
  ];

  return (
    <div className='schedule'>
      <span className='stroke-text'>שעות עבודה</span>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>גברים</th>
              <th>נשים</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.day}</td>
                <td>{row.men}</td>
                <td>{row.women}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <span className='schedule-footer'>
        <img src={clock} alt=''/>
        {isTimeInRange() ? 
          <span className='schedule-footer-text' style={{color:"#22ff22"}}>פתוח</span> 
          : 
          <span className='schedule-footer-text' style={{color:"#ff2222"}}>סגור</span>
        }
        {/* <span className='schedule-footer-text'>פתוח \ סגור </span> */}
      </span>
      
    </div>
  );
};

export default Schedule;
