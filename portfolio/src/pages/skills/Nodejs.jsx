import React from "react";
import "./Skill.css";
import Footer from "../../components/Footer";



function Nodejs() {
  return (
    <div className="skill-container">
      <h1 className="skill-title">Node.js</h1>
      <div className="skill-description">
        <p>
          I specialize in backend development using Node.js, building APIs,
          working with databases, and integrating third-party services.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Nodejs;
