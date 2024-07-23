import React from 'react';
import Contactimg from '../../Assets/contactimg.png';

const ContactForm = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={Contactimg} alt="Contact" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Have a Idea?<br />Let's discuss it together.</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <a href="your-linkedin-url" className="btn btn-outline-primary me-2">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="your-whatsapp-url" className="btn btn-outline-success me-2">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="your-facebook-url" className="btn btn-outline-primary">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
