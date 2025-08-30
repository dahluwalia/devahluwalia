import React from "react";
import { Navbar, Nav, NavbarToggle, NavbarCollapse } from "react-bootstrap";
import "./CoolNavBar.css";

function CoolNavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand id="navbar-brand" href="/">
        <img src="/DA.jpg" alt="DA" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="navbar-tabs">
          <Nav.Link id="navbar-links" href="/education">
            Education
          </Nav.Link>
          <Nav.Link id="navbar-links" href="/professional">
            Professional
          </Nav.Link>
          <Nav.Link id="navbar-links" href="/research-teaching">
            Research & Teaching
          </Nav.Link>
          <Nav.Link id="navbar-links" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link id="navbar-links" href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link id="navbar-links" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CoolNavBar;
