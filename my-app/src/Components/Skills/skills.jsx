import React from "react";
import "./skills.css";

const techStack = [
  { name: "HTML", src: "/html.png" },
  { name: "CSS", src: "/css.png" },
  { name: "JavaScript", src: "/javascript.png" },
  { name: "Tailwind", src: "/tailwindcss.png" },
  { name: "React", src: "/reactnative.png" },
  { name: "TypeScript", src: "/typescript.png" },
  { name: "Node.js", src: "/nodejs.png" },
  { name: "MongoDB", src: "/mongodb.png" },
  { name: "Firebase", src: "/firebase.png" },
  { name: "Docker", src: "/docker.png" },
  { name: "Figma", src: "/figma.png" },
  { name: "GitHub", src: "/github.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Tech Stacks and Tools</h2>
      <p>Every small step leads to mastering the craft</p>
      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <img key={index} src={tech.src} alt={tech.name} className="tech-icon" />
        ))}
      </div>
    </section>
  );
};

export default Skills;
