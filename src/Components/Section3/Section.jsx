import React from 'react';
import './Section.css'
import Carousel from 'react-bootstrap/Carousel';
import work1 from '../../Assets/work1.png';
import work2 from '../../Assets/work2.png';

function Section3 () {
  return (
    <div className="section3">
      <div className="container">
        <h2 className="text-white">Our Works</h2>
        <Carousel indicators={false} className="custom-carousel">
          <Carousel.Item>
            <img
              className="d-block w-40"
              src={work1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Creative Solution</h3>
              <p>Holding for a hope for you.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-40"
              src={work2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Tailored Solutions</h3>
              <p>Where expertise meets tailored solutions.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-40"
              src={work1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Your Responsibility</h3>
              <p>Your company is our responsibility.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Section3;
