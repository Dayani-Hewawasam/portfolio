import React, { useState, useEffect, useRef } from "react";
import "./Project.css";

const projectsData = [
  { 
    id: 1,
    name: "My Portfolio",
    description: "A relaxation app with animated breathing techniques.",
    thumbnail: "/portfolio.png",
    githubLink: "https://github.com/yourusername/breathing-exercise-app",
  },
  {
    id: 2,
    name: "Stress Free Zone",
    description: "A mental wellness app to reduce stress levels.",
    thumbnail: "/stressfreezone.png",
    githubLink: "https://github.com/nimeshayasith/StressfreeZone_Web",
  },
  {
    id: 3,
    name: "E-Commerce Web App",
    description: "A MERN stack e-commerce platform with an admin panel.",
    thumbnail: "/sandu fashion web.png",
    githubLink: "https://github.com/Dayani-Hewawasam/Sandu-Fashion",
  },
  {
    id: 4,
    name: "E-Commerce Mobile App",
    description: "A mobile shopping app using Flutter and Firebase with an admin panel",
    thumbnail: "/sandu fashion web.png",
    githubLink: "https://github.com/Dayani-Hewawasam/e-commerce",
  },
  {
    id: 5,
    name: "Student Marks Predictor",
    description: "A machine learning model for student grade prediction.",
    thumbnail: "/studentsmarkspredictor.jpg",
    githubLink: "https://github.com/Dayani-Hewawasam/StudentsMarksPredictor",
  },
  {
    id: 6,
    name: "Sports League Management System",
    description: "A system for managing sports leagues with MySQL and ER diagrams.",
    thumbnail: "/sportleaguemanagement.png",
    githubLink: "https://github.com/Lahiru-Herath/Sports-League-Management-System",
  },
];

// Duplicate the projects list for a continuous scrolling effect
const Projects = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 1.5; // Speed of scroll
    let direction = 1; // 1 for right, -1 for left

    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollAmount * direction;

        // When reaching the end, reset scroll position for seamless effect
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20); // Adjust speed for smooth scrolling

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p>Projects I have done and currently involving</p>

      <div 
        className="projects-scroll"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="projects-container">
          {/* Duplicate the project items for infinite scrolling */}
          {[...projectsData, ...projectsData].map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.thumbnail} alt={project.name} className="project-thumbnail" />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
