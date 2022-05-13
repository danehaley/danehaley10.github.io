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
        <ul>
          <Link to="/skills">Skills</Link>
        </ul>
        <ul>
          <Link to="/projects">Projects</Link>
        </ul>
        <ul>
          <Link to="/education">Education</Link>
        </ul>
        <ul>
          <Link
            to="/documents/dane_dobra_resume.pdf"
            target="_blank"
            className="flex"
          >
            Resume
          </Link>
        </ul>
        <ul>
          <a href="mailto:danehaley22@gmail.com">Contact</a>
        </ul>
      </li>
    </nav>
  );
}
