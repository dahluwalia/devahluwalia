import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="footer-links">
              <a href="mailto:dahluwalia@wisc.edu" className="footer-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dev-ahluwalia"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/dahluwalia"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <div className="footer-bottom">
              <p>&copy; 2025 Dev Ahluwalia</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
