import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CoolNavBar from "../navbar/CoolNavBar";
import Footer from "../footer/Footer";
import "../shared/SharedStyles.css";
import "./Professional.css";

function Professional() {
  useEffect(() => {
    document.title = "DA | Professional";
  }, []);

  const experience = [
    {
      id: 1,
      company: "Engageware",
      position: "Product Summer Intern – GenAI Team",
      duration: "May 2024 - August 2024",
      description:
        "Designed and deployed an Anticorruption Layer Service to bridge 5-year-old legacy systems with new generative AI functionalities. Upgraded a RAG system by integrating MongoDB and Vector Search technologies, resulting in 3x improvement in response times and 25% boost in output accuracy.",
    },
    {
      id: 2,
      company: "Freddie Mac",
      position: "Software Engineering & Data Intern",
      duration: "May 2023 - August 2023",
      description:
        "Supported the full software development life cycle, designing and developing a secure REST API enabling 3 client groups to retrieve structured loan data from a SQL database containing 100,000+ entries. Created validation annotations within Java codebases for quality control.",
    },
    {
      id: 3,
      company: "Berkeley Consulting",
      position: "Consultant",
      duration: "February 2023 - January 2024",
      description:
        "Steered a team of 3 technical consultants in developing predictive models for airport traffic patterns and product allocations, achieving error rates less than 5%. Conducted market analysis of the $162B philanthropic industry for Fortune 500 companies.",
    },
    {
      id: 4,
      company: "DataStory",
      position: "Vice President of Web Development",
      duration: "September 2022 - June 2023",
      description:
        "Engineered an innovative strategy to solve the Wordle game achieving an average of 3.1 guesses. Spearheaded strategic overhaul of club's mission and goals, fostering stronger community culture among 60 active members. Led full redesign and rebuild of club's official website.",
    },
  ];

  return (
    <div className="page-container">
      <CoolNavBar />
      <Container className="content-container">
        <div className="align-center mb-5">
          <h1 className="typography-heading color-primary">
            Professional Experience
          </h1>
          <p className=" color-muted">
            My journey through software engineering, research, and leadership
            roles
          </p>
        </div>

        <div className="card-grid">
          {experience.map((item) => (
            <div
              key={item.id}
              className="experience-card"
              id={`professional-${item.id}`}
            >
              <div className="card-accent"></div>

              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-company">{item.company}</h3>
                  <h4 className="experience-position">{item.position}</h4>
                  <span className="experience-duration">{item.duration}</span>
                </div>
              </div>

              <p className="experience-description">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Professional;
