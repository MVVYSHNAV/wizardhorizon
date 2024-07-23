import React from 'react';
import './Section.css';
import imgsl2 from '../../Assets/section4img1.png';
import Button   from '../Button/Button';
const Section4 = () => {
  return (
    <div className="section4 d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="image-container">
          <img src={imgsl2} alt="Team working" className="img-fluid rounded" />
        </div>
        <div className="text-container ml-4">
          <h2>Why Choose Us</h2>
          <p>We work closely with our clients to define, design.</p>
          <Button/>
        </div>
      </div>
    </div>
  );
}

export default Section4;
