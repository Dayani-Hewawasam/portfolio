import Navbar from './Components/Navbar/navbar'
import Intro from './Components/Intro/intro'
import Skills from './Components/Skills/skills'
import Projects from './Components/Project/Project'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      {/* Sections with matching ids for scrolling */}
      <div id="about">
        <Intro />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
