import React from "react";
import "./Skill.css";
import Footer from "../../components/Footer";



function Redis() {
  return (
    <div className="skill-container">
      <h1 className="skill-title">Redis</h1>
      <div className="skill-description">
        <p>
          Redis is an in-memory data store used for caching and fast
          retrieval. I use it to improve application performance and
          handle session management.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Redis;
