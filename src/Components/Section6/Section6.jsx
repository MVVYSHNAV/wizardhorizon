// src/components/ContactForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Section6.css';

function ContactForm () {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/send-email', { email, message });
      setSubmitted(true);
    } catch (error) {
      console.error("There was an error sending the email:", error);
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <h2>Meet Our Team</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Put a Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="btn-e">
              Email
            </Button>
            {submitted && <p className="mt-3 text-success">Email sent successfully!</p>}
          </Form>
        </Col>
        <Col md={4}>
          <h5>Location</h5>
          <p>Bangalore, India</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9620342344896!2d73.84785541532219!3d18.520430687399755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07688c3e9e3%3A0x6497889b0d4f59bd!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1605450162756!5m2!1sen!2sin"
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
