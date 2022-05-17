import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="header">
      <ul className="header-list">
        <li className="header-list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="header-list__item">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="header-list__item">
          <Link to="/education">Education</Link>
        </li>
        <li className="header-list__item">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
