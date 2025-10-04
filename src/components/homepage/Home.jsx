import React from "react";
import { Container } from "react-bootstrap";
import CoolNavBar from "../navbar/CoolNavBar";
import Footer from "../footer/Footer";
import "../shared/SharedStyles.css";
import "./Home.css";

function Home() {
  return (
    <div className="page-container">
      <CoolNavBar />
      <Container className="content-container">
        {/* Hero Section */}
        <div className="hero-section align-center">
          <h1 className="hero-title">
            Hi, I'm <span className="color-primary">Dev</span>!
          </h1>
          <h2 className="hero-subtitle">
            Student • Software Engineer • Researcher • Data Scientist
          </h2>
          <p className="hero-description">
            I am currently completing my Master of Science in Computer Science
            at the University of Wisconsin-Madison. My work spans research in
            entity matching and discourse analysis, teaching database systems,
            developing full-stack applications, and previous industry experience
            as a software engineer.
          </p>

          {/* Profile Image Section */}
          <div className="profile-section align-center">
            <img
              src={require("./dev-ahluwalia-bear.webp")}
              alt="Dev Ahluwalia"
              className="profile-image"
            />
          </div>

          {/* Currently Working On Section */}
          <div className="currently-working-section">
            <h3 className="currently-working-title">Currently Working On</h3>
            <div className="currently-working-grid">
              <a href="/research-teaching" className="working-item">
                <div className="working-icon">🔬</div>
                <div className="working-content">
                  <h4 className="working-label">Research</h4>
                  <p className="working-status">
                    Entity Matching Software Development
                  </p>
                  <p className="working-status">Reddit Discourse Analysis</p>
                </div>
              </a>

              <a href="/research-teaching" className="working-item">
                <div className="working-icon">📚</div>
                <div className="working-content">
                  <h4 className="working-label">Teaching</h4>
                  <p className="working-status">
                    CS 564 - Database Management Systems
                  </p>
                </div>
              </a>

              <a href="/projects" className="working-item">
                <div className="working-icon">💻</div>
                <div className="working-content">
                  <h4 className="working-label">Projects</h4>
                  <p className="working-status">Currently no active projects</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
