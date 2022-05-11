import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="link-container">
      <li className="links">
        {window.location.pathname !== "/" && (
          <ul>
            <Link to="/">home</Link>
          </ul>
        )}
        <ul>
          <Link to="/skills">skills</Link>
        </ul>
        <ul>
          <Link to="/projects">projects</Link>
        </ul>
        <ul>
          <Link to="/education">education</Link>
        </ul>
        <ul>
          <Link to="/documents/dane_dobra_resume.pdf" target="_blank">
            resume
          </Link>
        </ul>
        <ul>
          <a href="mailto:danehaley22@gmail.com">contact</a>
        </ul>
      </li>
    </nav>
  );
}
