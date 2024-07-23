// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Section7.css';
import logo from '../../Assets/logo.png';

function Footer () {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container>
        <Row>
          <Col className="text-center mt-5">
            <img
              alt="Wizard Horizon Logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <h5 className="d-inline-block align-top ml-2">Wizard Horizon</h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-center d-flex">
            <p className="mb-0">@2024 wizardhorizon</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
