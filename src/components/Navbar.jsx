import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <li className="navbar-list">
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/skills">Skills</Link>
        </ul>
        <ul>
          <Link to="/education">Education</Link>
        </ul>
        <ul>
          <Link to="/projects">Projects</Link>
        </ul>
      </li>
    </nav>
  );
}
