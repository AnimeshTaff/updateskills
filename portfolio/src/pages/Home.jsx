import React from "react";
import "./Home.css"; // ✅ use Home.css

function Home() {
  return (
    <div className="home-container">
      <h1>
        Hi, I'm Animesh Kumar mazumdar{" "}
        <span className="wave-hand">👋</span>
      </h1>
      <div className="home-description">
        A Backend Developer with 2 years of experience in building scalable web
        applications.
      </div>

      {/* Download CV Button */}
      <a
        href="/Animesh_Kumar_CV.pdf" // put CV in public folder
        download
        className="download-btn"
      >
        Download CV
      </a>
    </div>
  );
}

export default Home;
