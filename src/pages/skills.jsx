import Navbar from "../components/Navbar";
import Logo from "../assets/img/Skills/skills.svg";
import { Link } from "react-router-dom";
import SkillIcon from "../components/SkillIcon";
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
        <body>
          <div className="column-container">
            <div className="column">
              <div className="heading">
                <div className="spacer"></div>
                <h2>Languages</h2>
              </div>
              <div className="body">
                <SkillIcon skill="Javascript" />
                <SkillIcon skill="Python" />
                <SkillIcon skill="CSharp" />
                <SkillIcon skill="C" />
                <div className="spacer"></div>
              </div>
            </div>
            <div className="column">
              <div className="heading">
                <div className="spacer"></div>
                <h2>Tools</h2>
              </div>
              <div className="body">
                <div className="icon-wrapper">
                  <SkillIcon skill="React" />
                  <SkillIcon skill="Next" />
                  <SkillIcon skill="Node" />
                  <SkillIcon skill="Express" />
                  <SkillIcon skill="Flask" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="heading">
                <div className="spacer"></div>
                <h2>Miscellaneous</h2>
              </div>
              <div className="body">
                <div className="spacer"></div>
              </div>
            </div>
          </div>
        </body>
        <div className="spacer"></div>
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
