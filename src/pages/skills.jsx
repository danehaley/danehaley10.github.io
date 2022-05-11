import Navbar from "../components/Navbar";
import Logo from "../assets/img/Skills/skills.svg";
import { Link } from "react-router-dom";
function Skills() {
  return (
    <div className="skills">
      <main className="container">
        <header>
          <Link to={"/"} className="logo">
            <img src={Logo} />
          </Link>
          <h1>Dane Haley's Skills</h1>
          <hr class="solid" />
          <Navbar />
        </header>
        <body></body>
        <footer>
          <div className="logo-footer">
            <img src={Logo} />
            <h3>Dane Haley's Skills</h3>
          </div>
          <hr class="solid" />
          <p>Copyright © 2022</p>
          <p>Created with React.js & SCSS</p>
          <p>
            Contact at{" "}
            <a className="contact" href="mailto:danehaley22@gmail.com">
              danehaley22@gmail.com
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Skills;
