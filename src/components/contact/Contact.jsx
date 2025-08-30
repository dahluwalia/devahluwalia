import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CoolNavBar from "../navbar/CoolNavBar";
import Footer from "../footer/Footer";
import "../shared/SharedStyles.css";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    document.title = "DA | Contact";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:dahluwalia@wisc.edu?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="page-container">
      <CoolNavBar />
      <Container className="content-container">
        <div className="align-center mb-5">
          <h1 className="typography-heading color-primary">Get In Touch</h1>
          <p className="color-muted">
            I'm always interested in new opportunities, collaborations, and
            interesting projects. Feel free to reach out!
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-card">
              <div className="card-accent"></div>
              <div className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="color-light">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="color-light">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="color-light">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="color-light">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <div className="align-center">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="contact-submit-btn"
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
