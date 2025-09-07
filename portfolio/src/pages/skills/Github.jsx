import React from "react";
import "./Skill.css";
import Footer from "../../components/Footer";



function Github() {
  return (
    <div className="skill-container">
      <h1 className="skill-title">GitHub</h1>
      <div className="skill-description">
        <p>
          I use GitHub for version control, collaboration, and maintaining
          project repositories with best practices.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Github;
