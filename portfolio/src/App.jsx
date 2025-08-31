import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

// Skills
import Prisma from "./pages/skills/Prisma";
import Redis from "./pages/skills/Redis";
import Wordpress from "./pages/skills/Wordpress";
import Github from "./pages/skills/Github";
import Strapi from "./pages/skills/Strapi";
import Shopify from "./pages/skills/Shopify";
import Nodejs from "./pages/skills/Nodejs";
import HtmlCss from "./pages/skills/HtmlCss";
import ReactBasics from "./pages/skills/ReactBasics";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Skills */}
          <Route path="/prisma" element={<Prisma />} />
          <Route path="/redis" element={<Redis />} />
          <Route path="/wordpress" element={<Wordpress />} />
          <Route path="/github" element={<Github />} />
          <Route path="/strapi" element={<Strapi />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/nodejs" element={<Nodejs />} />
          <Route path="/htmlcss" element={<HtmlCss />} />
          <Route path="/react" element={<ReactBasics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
