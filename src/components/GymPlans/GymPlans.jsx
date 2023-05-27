import React from 'react';
import './gymPlans.css';

const GymPlans = () => {
  const plans = [
    {
      title: 'חד פעמי',
      price: '₪39.99',
      features: ['Access to gym facilities', 'Personalized workout plans'],
    },
    {
      title: 'חודש',
      price: '₪249.99',
      features: ['Access to gym facilities', 'Personalized workout plans', 'Group fitness classes'],
    },
    {
      title: 'חודשים 3',
      price: '₪699.99',
      features: ['Access to gym facilities', 'Personalized workout plans', 'Group fitness classes', 'One-on-one personal training'],
    },
    {
      title: 'חצי שנה',
      price: '₪1199.99',
      features: ['Access to gym facilities', 'Personalized workout plans', 'Group fitness classes', 'One-on-one personal training', 'Access to all premium amenities'],
    },
    {
      title: 'שנה',
      price: '₪2199.99',
      features: ['Access to gym facilities', 'Personalized workout plans', 'Group fitness classes', 'One-on-one personal training', 'Access to all premium amenities', 'Unlimited tanning sessions'],
    },
  ];

  return (
    <>
    <div className='subscription-header'>
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
          <button className="subscribe-button">Subscribe</button>
        </div>
      ))}
    </div></>
  );
};

export default GymPlans;
