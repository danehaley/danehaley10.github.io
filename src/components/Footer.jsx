import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <nav className="footer">
      <li>
        <ul>
          <Link
            to="/documents/dane_dobra_resume.pdf"
            target="_blank"
            className="flex"
          >
            Resume
          </Link>
        </ul>
        <hr></hr>
        <ul>
          <a href="mailto:danehaley22@gmail.com">Contact</a>
        </ul>
        <hr></hr>
        <ul>
          <a
            href="https://github.com/danehaley10/danehaley10.github.io"
            target="_blank"
          >
            Source
          </a>
        </ul>
      </li>
    </nav>
  );
}
