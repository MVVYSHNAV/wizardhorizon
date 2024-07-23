import React from 'react';
import { motion } from 'framer-motion';
import './Section1.css';
import sec1img from '../../Assets/section1img1.jpg';
import sec1img2 from '../../Assets/section1img2.png';
import sec1img3 from '../../Assets/section1img3.png';

function sec1() {
  return (
    <header className="headerr">
      <div className="container2">
        <div className="row align-items-center ">
          <div className="col-md-12 d-flex flex-column justify-content-center text-container">
            <motion.div 
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="textsec1">We Provide The Great <br/> Solution For Your Business Development</h2>
            </motion.div>
          </div> 
          <div className="col-md-4 d-flex justify-content-center">
            <motion.div 
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={sec1img} alt="" className="mt-4 mb-5 img-fluid rounded" />
            </motion.div>
          </div> 
          <div className="col-md-4 d-flex justify-content-center">
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={sec1img2} alt="" className="mt-5 mb-5 img-fluid rounded" />
            </motion.div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={sec1img3} alt="" className="mt-5 mb-5 img-fluid rounded" />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default sec1;
