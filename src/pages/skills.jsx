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
          <div className="contact">
            <p>
              Contact at <a>danehaley22@gmail.com</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Skills;
