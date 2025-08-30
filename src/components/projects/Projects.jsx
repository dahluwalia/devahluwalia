import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import CoolNavBar from "../navbar/CoolNavBar";
import Footer from "../footer/Footer";
import "../shared/SharedStyles.css";
import "./Projects.css";

function Projects() {
  useEffect(() => {
    document.title = "DA | Projects";
  }, []);

  const [projects] = useState([
    {
      id: 1,
      title: "CourtVizion",
      description:
        "Transformed a concept into a fully functioning MVP in just 4 months. Conducted discovery interviews and built a user waitlist to validate market demand, achieving 30+ downloads in the first month. Engineered the full-stack application to be selected as a finalist in the CS Nest Pitch Competition.",
      github: null,
      live: null,
      icon: "🏀",
      category: "Mobile App",
      status: "MVP Complete",
    },
    {
      id: 2,
      title: "Database Analysis",
      description:
        "Conducted comprehensive literature review of academic and industry research on SQL, Graph, and NoSQL systems. Led end-to-end benchmarking of PostgreSQL, Neo4j, and MongoDB on a 1.6M-record social-network dataset, measuring latency, throughput, and scalability across five query workloads.",

      github: null,
      live: null,
      icon: "📊",
      category: "Research",
      status: "Report Complete",
    },

    {
      id: 3,
      title: "2048 Game",
      description:
        "Designed and programmed a Python-based recreation of the popular tile-sliding game '2048,' focusing on enhancing core gameplay mechanics and improving user interface experience.",
      github: null,
      live: null,
      icon: "🎮",
      category: "Game",
      status: "Complete",
    },
    {
      id: 4,
      title: "MealPlan",
      description:
        "Created a custom program in Python to streamline and optimize meal plan management for a fraternity, automating the processing of spreadsheet-based data for 40+ members.",
      github: null,
      live: null,
      icon: "🍽️",
      category: "Automation",
      status: "In Use",
    },
  ]);

  return (
    <div className="page-container">
      <CoolNavBar />
      <Container className="content-container">
        <div className="align-center mb-5">
          <h1 className="typography-heading color-primary">Projects</h1>
          <p className=" color-muted">
            A collection of my technical projects, research work, and software
            development endeavors
          </p>
        </div>

        <div className="card-grid" id="active">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              id={`project-${project.id}`}
            >
              <div className="card-accent"></div>

              <div className="projects-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-category">{project.category}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <h3 className="experience-company">{project.title}</h3>
              <p className="experience-description">{project.description}</p>

              <div className="project-links">
                {project.github && (
                  <Button
                    variant="outline-light"
                    size="sm"
                    href={project.github}
                    target="_blank"
                    className="project-btn"
                  >
                    <i className="bi bi-github"></i> Code
                  </Button>
                )}
                {project.live && (
                  <Button
                    variant="outline-light"
                    size="sm"
                    href={project.live}
                    target="_blank"
                    className="project-btn"
                  >
                    <i className="bi bi-box-arrow-up-right"></i> Live
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;
