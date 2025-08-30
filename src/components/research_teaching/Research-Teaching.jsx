import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CoolNavBar from "../navbar/CoolNavBar";
import Footer from "../footer/Footer";
import "../shared/SharedStyles.css";
import "./Research-Teaching.css";

function ResearchTeaching() {
  useEffect(() => {
    document.title = "DA | Research & Teaching";
  }, []);

  const researchProjects = [
    {
      id: 1,
      title: "Entity Matching Software Development",
      advisor: "Dr. AnHai Doan",
      description:
        "Facilitating the development of next-generation entity matching software focused on improving usability and scalability. Founded MadMatcher startup based on this research, placed 4th in competitive university pitch competition and awarded summer research fellowship.",
      duration: "September 2024 - Present",
      paperUrl: null,
      paperType: null,
    },
    {
      id: 2,
      title: "Reddit Discourse Analysis",
      advisor: "Dr. Kaiping Chen",
      description:
        "Collaborating to collect and analyze a dataset of 83,000,000 Reddit comments and 400,000 posts, building scalable PySpark pipelines for large-scale discourse analysis. Conducting topic modeling achieving coherence scores >70% and diversity scores >95%.",
      duration: "January 2025 - Present",
      paperUrl: null,
      paperType: null,
    },
    {
      id: 3,
      title: "Gradeview Dashboard Development",
      advisor: "Dr. Dan Garcia",
      description:
        "Co-authored a published poster and developed a database layer for Gradeview dashboard tracking student grades and topic comprehension. Implemented comprehensive tracking system to help instructors identify areas where students need additional support.",
      duration: "August 2023 - August 2024",
      paperUrl: "https://dl.acm.org/doi/10.1145/3626253.3635621",
      paperType: "Poster",
    },
    {
      id: 4,
      title: "AI/ML/DS Curriculum Analysis at R1 Universities",
      advisor: "Dr. Narges Norouzi, Dr. Lisa Zhang",
      description:
        "Collected data on artificial intelligence, machine learning, and data science courses from 50 universities, using clustering and principal component analysis (PCA) to understand educational pathways and inform curriculum development strategies.",
      duration: "August 2023 - August 2024",
      paperUrl: "https://ieeexplore.ieee.org/abstract/document/10893290",
      paperType: "Paper",
    },
    {
      id: 5,
      title: "Interactive Graph Traversal Tool for PrairieLearn",
      advisor: "Dr. Dan Garcia, Dr. Narges Norouzi, Armando Fox",
      description:
        "Researched, built, and assessed an educational tool for adoption into the PrairieLearn ecosystem, supporting randomness and auto-grading. Used pedagogical principles to guide implementation for formative assessments across computer science courses.",
      duration: "September 2023 - May 2024",
      paperUrl: "https://dl.acm.org/doi/abs/10.1145/3641555.3705123",
      paperType: "Poster",
    },
  ];

  const teachingExperience = [
    {
      id: 1,
      title: "Teaching Assistant - CS 564 Database Management Systems",
      institution: "University of Wisconsin-Madison",
      duration: "Spring 2025, Fall 2025",
      description:
        "Mentoring 20 students in advanced database topics including functional dependencies, SQL optimization, B+-trees, and query processing. Leading office hours and providing academic support for complex database concepts.",
    },
    {
      id: 2,
      title: "Teaching Assistant - CS 200 Programming I",
      institution: "University of Wisconsin-Madison",
      duration: "Fall 2024",
      description:
        "Spearheaded 3 lab sections weekly for programming courses, directly supporting students in mastering Java, object-oriented design, and debugging techniques. Provided hands-on guidance for 30+ students.",
    },
    {
      id: 3,
      title: "Private Tutor",
      duration: "September 2022 - March 2025",
      description:
        "Mentored students aged 9-20 in various Computer Science concepts, leveraging pedagogical research to effectively teach complex topics. Ensured students were confident and inspired through personalized sessions, managing multiple students with varying knowledge levels and subject matter expertise.",
    },
  ];

  return (
    <div className="page-container">
      <CoolNavBar />
      <Container className="content-container">
        <div className="align-center mb-5">
          <h1 className="typography-heading color-primary">
            Research & Teaching
          </h1>
          <p className=" color-muted">
            Exploring the frontiers of computer science through research and
            sharing knowledge through teaching
          </p>
        </div>

        <div className="research-section" id="research">
          <h2 className="typography-subheading color-success">
            Research Projects
          </h2>
          <div className="card-grid">
            {researchProjects.map((project) => (
              <div
                key={project.id}
                className="research-card"
                id={`research-${project.id}`}
              >
                <div className="card-accent"></div>
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-company">{project.title}</h3>
                    <p className="experience-position">
                      Advised by {project.advisor}
                    </p>
                    <span className="experience-duration">
                      {project.duration}
                    </span>
                  </div>
                </div>
                <p className="experience-description">{project.description}</p>
                {project.paperUrl && (
                  <div className="paper-link mt-3">
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="paper-link-text"
                    >
                      📄 {project.paperType}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="teaching-section" id="teaching">
          <h2 className="typography-subheading color-success">
            Teaching Experience
          </h2>
          <div className="card-grid">
            {teachingExperience.map((experience) => (
              <div
                key={experience.id}
                className="research-card"
                id={`teaching-${experience.id}`}
              >
                <div className="card-accent"></div>
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-company">{experience.title}</h3>
                    <p className="experience-position">
                      {experience.institution}
                    </p>
                    <span className="experience-duration">
                      {experience.duration}
                    </span>
                  </div>
                </div>
                <p className="experience-description">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default ResearchTeaching;
