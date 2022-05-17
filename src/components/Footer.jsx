import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <nav className="footer">
      <ul className="footer-list">
        <li className="footer-list__item">
          <Link
            to="/documents/dane_dobra_resume.pdf"
            target="_blank"
            className="flex"
          >
            Resume
          </Link>
        </li>
        <hr className="footer-list__divider"></hr>
        <li className="footer-list__item">
          <a href="mailto:danehaley22@gmail.com">Contact</a>
        </li>
        <hr className="footer-list__divider"></hr>
        <li className="footer-list__item">
          <a
            href="https://github.com/danehaley10/danehaley10.github.io"
            target="_blank"
          >
            Source
          </a>
        </li>
      </ul>
    </nav>
  );
}
