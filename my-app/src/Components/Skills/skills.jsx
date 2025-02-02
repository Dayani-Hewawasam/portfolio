import React from "react";
import "./Skills.css";

const techStack = [
  { name: "HTML", src: "/public/html.png" },
  { name: "CSS", src: "/public/css.png" },
  { name: "JavaScript", src: "/public/javascript.png" },
  { name: "Tailwind", src: "/public/tailwindcss.png" },
  { name: "React", src: "/public/reactnative.png" },
  { name: "TypeScript", src: "/public/typescript.png" },
  { name: "Node.js", src: "/public/nodejs.png" },
  { name: "MongoDB", src: "/public/mongodb.png" },
  { name: "Firebase", src: "/public/firebase.png" },
  { name: "Docker", src: "/public/docker.png" },
  { name: "Figma", src: "/public/figma.png" },
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
