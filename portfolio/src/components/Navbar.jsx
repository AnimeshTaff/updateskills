import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
            <li><Link to="/prisma">Prisma</Link></li>
            <li><Link to="/redis">Redis</Link></li>
            <li><Link to="/wordpress">WordPress</Link></li>
            <li><Link to="/github">GitHub</Link></li>
            <li><Link to="/strapi">Strapi</Link></li>
            <li><Link to="/shopify">Shopify</Link></li>
            <li><Link to="/nodejs">Node.js</Link></li>
            <li><Link to="/htmlcss">HTML & CSS</Link></li>
            <li><Link to="/react">React Basics</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
