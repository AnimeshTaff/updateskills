import React from "react";
import "./Skill.css";
import Footer from "../../components/Footer";



function Strapi() {
  return (
    <div className="skill-container">
      <h1 className="skill-title">Strapi</h1>
      <div className="skill-description">
        <p>
          Strapi is a headless CMS I use to build APIs, manage content, and
          integrate with modern frontends like React and Next.js.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Strapi;
