import React from 'react';
import './NavBar.css';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

function NavBar() {
  return (
    <Navbar expand='sm' className='position-absolute w-100 z-2 justify-content-center'>
      <Container>
        <motion.a
          className='navbar-brand text-light'
          href='./'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Logo}
            alt='logo'
            className='me-2'
            style={{ width: '60px', height: '50px' }}
            icon={Logo}
            size='xl'
          />
        </motion.a>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='p-3 p-lg-0 mt-2 mt-lg-0'>
          <motion.ul
            className='navbar-nav me-auto justify-content-center w-100'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Nav.Link href='#' className='text-black' >
              What We Do
            </Nav.Link>
            <Nav.Link href='#' className='text-black '>
              Who We Are
            </Nav.Link>
            <Nav.Link href='#' className='text-black '>
              Our Works
            </Nav.Link>
            <Nav.Link  as={Link} to= '/Contact' element={Contact} href='#' className='text-black '>
              Contact
            </Nav.Link>
          </motion.ul>
          <span className='text-uppercase fw-bold text-purple'>Wizard</span>
          <span className='text-uppercase fw-bold text-purple'> Horizon </span>
          <motion.div
            className='ms-0 ms-lg-2 mt-3 mt-lg-0'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            
          </motion.div>

          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
