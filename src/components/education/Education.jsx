import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CoolNavBar from "../navbar/CoolNavBar";
import Footer from "../footer/Footer";
import "../shared/SharedStyles.css";
import "./Education.css";

function Education() {
  useEffect(() => {
    document.title = "DA | Education";
  }, []);

  // UW-Madison MS Data
  const uwMadisonData = {
    institution: "🎓 University of Wisconsin-Madison",
    degree: "Master of Science (MS) in Computer Science",
    duration: "August 2024 - May 2026",
    description:
      "Currently pursuing advanced studies in computer science with focus on machine learning, data management, and big data systems.",
    semesters: [
      {
        id: 1,
        semester: "Fall 2025",
        courses: ["Introduction to Operating Systems", "Master's Thesis"],
      },
      {
        id: 2,
        semester: "Spring 2025",
        courses: [
          "Data Exploration, Cleaning, and Integration",
          "Introduction to Big Data Systems",
          "Master's Research",
        ],
      },
      {
        id: 3,
        semester: "Fall 2024",
        courses: [
          "Machine Learning",
          "Foundations of Data Management",
          "Master's Research",
        ],
      },
    ],
  };

  const ucBerkeleyData = {
    institution: "🏛️ University of California, Berkeley",
    degree: "Bachelor of Arts (BA) in Computer Science",
    duration: "August 2021 - May 2024",
    description:
      "Graduated with a BA in Computer Science, taking a breadth of courses.",
    achievements: [
      "🏆 Certificate in Entrepreneurship & Technology (May 2024)",
    ],
    semesters: [
      {
        id: 1,
        semester: "Spring 2024",
        courses: [
          "Computer Security",
          "Special Topics in Computer Science (STAR Assessments)",
          "Supervised Independent Study",
          "Principles & Techniques of Data Science",
          "Leadership Exploration and Development",
          "Middle Eastern Worlds: the Modern Middle East",
        ],
      },
      {
        id: 2,
        semester: "Fall 2023",
        courses: [
          "Introduction to Database Systems",
          "Introduction to Artificial Intelligence",
          "Special Topics in Computer Science (STAR Assessments)",
          "Supervised Independent Study",
          "Newton Lecture Series",
          "DECODE Startup Success",
          "Society & Technology",
        ],
      },
      {
        id: 3,
        semester: "Spring 2023",
        courses: [
          "Great Ideas in Computer Architecture (Machine Structures)",
          "Efficient Algorithms and Intractable Problems",
          "Foundations of Data Science",
          "Wealth and Poverty",
        ],
      },
      {
        id: 4,
        semester: "Fall 2022",
        courses: [
          "Muslims in America",
          "Voices of the Celtic World",
          "Discrete Mathematics and Probability Theory",
          "Foundations of Signals, Dynamical Systems, and Information Processing",
        ],
      },
      {
        id: 5,
        semester: "Spring 2022",
        courses: [
          "Prolonging Life: The Short Story",
          "Data Structures",
          "Introduction to Environmental Sciences",
          "Calculus (Math 1B)",
        ],
      },
      {
        id: 6,
        semester: "Fall 2021",
        courses: [
          "Directed Group Study (Beginners Guide to the Universe )",
          "Structure and Interpretation of Computer Programs",
          "Calculus (Math 1A)",
          "Native Americans in North America to 1900",
        ],
      },
    ],
  };

  return (
    <div className="page-container">
      <CoolNavBar />
      <Container className="content-container">
        <div className="align-center mb-5">
          <h1 className="typography-heading color-primary">Education</h1>
          <p className="color-muted">
            My academic journey through computer science and data science
          </p>
        </div>

        <div className="education-content">
          {/* University of Wisconsin-Madison */}
          <div className="education-item">
            <div className="card-accent"></div>
            <h3 className="typography-subheading color-primary">
              {uwMadisonData.institution}
            </h3>
            <p className="color-success">
              <em>
                {uwMadisonData.degree} ({uwMadisonData.duration})
              </em>
            </p>
            <p className="color-light">{uwMadisonData.description}</p>

            <div className="card-grid">
              {uwMadisonData.semesters.map((semester) => (
                <div
                  key={semester.id}
                  className="education-card"
                  id={
                    semester.semester === "Spring 2025"
                      ? "spring25"
                      : semester.semester === "Fall 2025"
                      ? "fall25"
                      : semester.semester === "Fall 2024"
                      ? "fall24"
                      : ""
                  }
                >
                  <div className="card-accent"></div>
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-company">
                        {semester.semester}
                      </h3>
                      <div className="education-courses">
                        {semester.courses.map((course, index) => (
                          <p key={index} className="education-course-item">
                            {course}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* University of California, Berkeley */}
          <div className="education-item">
            <div className="card-accent"></div>
            <h3 className="typography-subheading color-primary">
              {ucBerkeleyData.institution}
            </h3>
            <p className="color-success">
              <em>
                {ucBerkeleyData.degree} ({ucBerkeleyData.duration})
              </em>
            </p>
            <p className="color-light">{ucBerkeleyData.description}</p>
            {ucBerkeleyData.achievements.map((achievement, index) => (
              <p key={index} className="color-warning">
                {achievement}
              </p>
            ))}

            <div className="card-grid">
              {ucBerkeleyData.semesters.map((semester) => (
                <div
                  key={semester.id}
                  className="education-card berkeley"
                  id={
                    semester.semester === "Spring 2024"
                      ? "berk-spring24"
                      : semester.semester === "Fall 2023"
                      ? "berk-fall23"
                      : semester.semester === "Spring 2023"
                      ? "berk-spring23"
                      : semester.semester === "Fall 2022"
                      ? "berk-fall22"
                      : ""
                  }
                >
                  <div className="card-accent"></div>
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-company">
                        {semester.semester}
                      </h3>
                      <div className="education-courses">
                        {semester.courses.map((course, index) => (
                          <p key={index} className="education-course-item">
                            {course}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Education;
