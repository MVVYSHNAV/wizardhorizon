import React from 'react';
import { motion } from 'framer-motion';
import './Section2.css';
import sec2img from '../../Assets/section2img1.png';
import sec2img2 from '../../Assets/section2img2.png';
import Btn from '../Button/Button';

function sec2() {
  return (
    <header className="h-100 min-vh-100 d-flex align-items-center">
      <div className="container2">
        <div className="row align-items-center ">
          <div className="col-md-6 d-flex justify-content-center">
            <motion.div 
              className="d-flex flex-column align-items-center align-items-md-start"
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={sec2img} alt="" className="mt-2 img-fluid" />
            </motion.div>
          </div> 
          <div className="col-md-6 d-flex flex-column justify-content-center text-container">
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text1">What We Do</h2>
              <h2 className="text2">We provide all the serivces that you need <br/> to boost your business up to a high level</h2>
            </motion.div>
            <Btn/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default sec2;
