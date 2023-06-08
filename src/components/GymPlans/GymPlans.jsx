import React from 'react';
import './gymPlans.css';

const GymPlans = () => {
  const plans = [
    {
      title: 'חד פעמי',
      price: '₪49.99',
      features: ['אימון חד פעמי'],
    },
    {
      title: 'חודש',
      price: '₪299.99',
      features: [
         'תוכניות אימון אישיות',
          'שיעורי כושר קבוצתיים'
        ],
    },
    {
      title: 'חודשים 3',
      price: '₪799.99',
      features: [
        'תוכניות אימון אישיות',
        'שיעורי כושר קבוצתיים',
        'אימון אישי פרטני',
      ],
    },
    {
      title: 'חצי שנה',
      price: '₪1399.99',
      features: [
        'תוכניות אימון אישיות',
        'שיעורי כושר קבוצתיים',
        'אימון אישי פרטני',
        'גישה לכל הסוגים המתקדמים של המוסד',
      ],
    },
    {
      title: 'שנה',
      price: '₪2499.99',
      features: [
        'תוכניות אימון אישיות',
        'שיעורי כושר קבוצתיים',
        'אימון אישי פרטני',
        'גישה לכל הסוגים המתקדמים של המוסד',
        'סשן שזוף בלתי מוגבל',
      ],
    },
  ];
  

  return (
    <>
    <div className='subscription-header' id='prices'>
        <span className='stroke-text'>מחירים</span>
    </div>
    <div className="subscription-container">
        
      {plans.map((plan, index) => (
        <div className="subscription-card" key={index}>
          <h3 className="subscription-title">{plan.title}</h3>
          <div className="subscription-price">{plan.price}</div>
          <ul className="subscription-features">
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div style={{height:""}}>
             <button className="subscribe-button">הרשמה</button>
          </div>
         
        </div>
      ))}
    </div></>
  );
};

export default GymPlans;
