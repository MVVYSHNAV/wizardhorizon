// src/components/SocialMedia.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function SocialMedia ()  {
  return (
    <div className="social-media-section bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <h5>Follow on Social Media</h5>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <FaFacebookF size={40} className="mx-3" />
          </Col>
          <Col xs="auto">
            <FaWhatsapp size={40} className="mx-3" />
          </Col>
          <Col xs="auto">
            <FaTwitter size={40} className="mx-3" />
          </Col>
          <Col xs="auto">
            <FaLinkedinIn size={40} className="mx-3" />
          </Col>
          <Col xs="auto">
            <FaInstagram size={40} className="mx-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SocialMedia;
