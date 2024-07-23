import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import Heroimg from '../../Assets/heroimg1.jpg';
import Btn from '../Button/Button';

function Hero() {
  return (
    <header className="h-100 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-6 d-flex justify-content-center">
            <motion.div 
              className="d-flex flex-column align-items-center align-items-md-start"
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={Heroimg} alt="" className="mt-5 img-fluid" />
            </motion.div>
          </div> 
          <div className="col-md-6 d-flex flex-column justify-content-center text-container">
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text1">Grow With us,</h2>
              <h2 className="text2">Creative<br/> <span>Solutions</span></h2>
            </motion.div>
            <Btn/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
