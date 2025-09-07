import React from "react";
import "./Skill.css";
import Footer from "../../components/Footer";

function MySQL() {
  return (
    <div className="skill-container">
      <h1 className="skill-title">MySQL Skills</h1>
      <div className="skill-description">
        <p>
          I have strong knowledge of relational databases and MySQL concepts.  
          My expertise includes:
        </p>
        <ul>
          <li>✅ Writing efficient SQL queries</li>
          <li>✅ Understanding of <b>JOINS</b> (INNER, LEFT, RIGHT, FULL)</li>
          <li>✅ <b>Aggregate Functions</b> (COUNT, SUM, AVG, MAX, MIN)</li>
          <li>✅ Using <b>CASE</b> for conditional queries</li>
          <li>✅ Creating and managing <b>Views</b></li>
          <li>✅ Understanding <b>Indexes</b> for performance optimization</li>
        </ul>
        <p>
          These skills allow me to design, query, and optimize databases effectively 
          for real-world applications.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default MySQL;
