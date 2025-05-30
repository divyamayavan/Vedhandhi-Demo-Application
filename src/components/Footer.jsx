import React from 'react';
import "../App.css";
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <img
              src="https://www.vedhanthitechnologies.com/Vedhanthi%20Logo%20Final_PNG_W.png"
              alt="Logo"
              className="mb-3 footer-logo"
              style={{ width: '100px', height: '50px'}}
            />

            <p>
              When do they work well, and when do they on us and finally, when do we
              actually need how can we avoid them.
            </p>
          </Col>

          <Col md={2}>
            <h5 className="text-teal">Services</h5>
            <ul className="list-unstyled">
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>Testing Service</li>
              <li>Devops</li>
              <li>Design Service</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-teal">Technologies</h5>
            <ul className="list-unstyled">
              <li>Open Source</li>
              <li>Microsoft Skills</li>
              <li>Native Mobile App</li>
              <li>Hybrid Mobile App</li>
              <li>QA Automation</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-teal">Address</h5>
            <p>
              47A Anandha Bhavanam Sashtri Street,<br />
              LIC colony, Selvapuram, Coimbatore - 26
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Map</a>


            <h5 className="text-teal">Inquiries</h5>
            <p className="fw-bold text-teal">+(91) - 63693 11519</p>
            <p>info.vedhanthitechnologies.com</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row className="justify-content-between align-items-center">
          <Col md={6}>
            <p className="mb-0">
              © 2025 <span className="text-teal">Vedhanthi Technologies</span>. All Rights Reserved
            </p>
          </Col>
          <Col md={6} className="text-end">
            <FaFacebookF className="mx-2 social-icon" />
            <FaTwitter className="mx-2 social-icon" />
            <FaLinkedinIn className="mx-2 social-icon" />
            <FaWhatsapp className="mx-2 social-icon" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
