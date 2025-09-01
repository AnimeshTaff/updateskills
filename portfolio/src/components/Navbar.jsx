import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  const skills = [
    { name: "Prisma", path: "/prisma" },
    { name: "Redis", path: "/redis" },
    { name: "WordPress", path: "/wordpress" },
    { name: "GitHub", path: "/github" },
    { name: "Strapi", path: "/strapi" },
    { name: "Shopify", path: "/shopify" },
    { name: "Node.js", path: "/nodejs" },
    { name: "HTML & CSS", path: "/htmlcss" },
    { name: "React Basics", path: "/react" },
  ];

  // Filter skills based on search term (min 3 letters)
  const filteredSkills =
    searchTerm.trim().length >= 3
      ? skills.filter(skill =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        )
      : [];

  const handleSelect = path => {
    navigate(path); // Navigate to selected skill page
    setSearchTerm(""); // Clear search box
    setShowResults(false); // Hide results
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        {/* Dropdown for Skills */}
        <li className="dropdown">
          <span>Skills ▾</span>
          <ul className="dropdown-menu">
            {skills.map(skill => (
              <li key={skill.name}>
                <Link to={skill.path}>{skill.name}</Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Contact Us */}
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        {/* Search */}
        <li className="navbar-search-container">
          <input
            type="text"
            placeholder="Search skills..."
            className="navbar-search"
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setShowResults(e.target.value.trim().length >= 3);
            }}
          />
          {showResults && (
            <ul className="search-results">
              {filteredSkills.length > 0 ? (
                filteredSkills.map(skill => (
                  <li
                    key={skill.name}
                    onClick={() => handleSelect(skill.path)}
                  >
                    {skill.name}
                  </li>
                ))
              ) : (
                <li>No results found</li>
              )}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
