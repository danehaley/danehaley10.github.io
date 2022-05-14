import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="link-container">
      <li className="links">
        {window.location.pathname !== "/" && (
          <ul>
            <Link to="/">Home</Link>
          </ul>
        )}
        {window.location.pathname !== "/skills" && (
          <ul>
            <Link to="/skills">Skills</Link>
          </ul>
        )}
        <ul>
          <Link to="/education">Education</Link>
        </ul>
        {window.location.pathname !== "/projects" && (
          <ul>
            <Link to="/projects">Projects</Link>
          </ul>
        )}
      </li>
    </nav>
  );
}
