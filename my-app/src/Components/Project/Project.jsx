import React, { useState, useEffect, useRef } from "react";
import "./Project.css";

const projectsData = [
  { id: 1,
    name: "My Portfolio",
    description: "A relaxation app with animated breathing techniques.",
    thumbnail:  "/public/portfolio.png",
    githubLink: "https://github.com/yourusername/breathing-exercise-app",
  },{
    id: 2,
    name: "Stress Free Zone",
    description: "A mental wellness app to reduce stress levels.",
    thumbnail: "/public/stressfreezone.png",
    githubLink: "https://github.com/nimeshayasith/StressfreeZone_Web",
  },
  {
    id: 3,
    name: "E-Commerce Web App",
    description: "A MERN stack e-commerce platform with an admin panel.",
    thumbnail: "/public/sandu fashion web.png",
    githubLink: "https://github.com/Dayani-Hewawasam/Sandu-Fashion",
  },
  {
    id: 4,
    name: "E-Commerce Mobile App",
    description: "A mobile shopping app using Flutter and Firebase with an admin panel",
    thumbnail: "/public/sandu fashion web.png",
    githubLink: "https://github.com/Dayani-Hewawasam/e-commerce",
  },
  {
    id: 5,
    name: "Student Marks Predictor",
    description: "A machine learning model for student grade prediction.",
    thumbnail: "/public/studentsmarkspredictor.jpg",
    githubLink: "https://github.com/Dayani-Hewawasam/StudentsMarksPredictor",
  },
  {
    id: 6,
    name: "Sports League Management System",
    description: "Sports League Management System: A comprehensive solution for managing players, teams, games, leagues, and sponsors. This system is designed with MySQL for efficient data storage and management, and the database structure is modeled using an Entity-Relationship (ER) diagram created in draw.io.",
    thumbnail: "/public/sportleaguemanagement.png",
    githubLink: "https://github.com/Lahiru-Herath/Sports-League-Management-System",
  },
  
   

];

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    if (!scrollRef.current) return;

    let scrollAmount = 1; // Speed of scroll
    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        scrollRef.current.scrollLeft += scrollAmount;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0; // Restart scrolling
        }
      }
    }, 30); // Adjust speed

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
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="project-thumbnail"
              />
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
