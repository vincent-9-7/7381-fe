import React from 'react';
import './ServiceComponents.scss';

export default function ServiceCard({ text, description1, description2, img }) {
  console.log(text, description1, description2, img);
  return (
    <div className="customer__card">
      <img src={img} alt="card" className="customer__card--image" />
      <h3 style={{fontSize:'1.8rem',color:'#E0A604', fontWeight:'bold'}}>{text}</h3>
      <p style={{fontWeight:'bold', margin:'0'}}>{description1}</p>
      <p style={{fontWeight:'bold', marginTop:'0'}}>{description2}</p>
    </div>
  );
}
