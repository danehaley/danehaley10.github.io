import { useContext, React, useRef } from "react";
import "./assets/styles/App.scss";
import { ReactComponent as Ball } from "./assets/images/Ball.svg";
import Pointer from "./components/Pointer";
import SkillCard from "./components/SkillCard";
import AppContext from "./contexts/AppContext";

function App() {
  const context = useContext(AppContext);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToElement = (ref) => {
    if (ref === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (ref === "education") {
      educationRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (ref === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      throw new Error(`Input Ref ${ref} does not exist or is not a string`);
    }
  };

  const skillTags = (categoryArr) => {
    return categoryArr.map((skill) => {
      return <p className="tag" key={`${skill}`}>{`${skill}`}</p>;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <section className="ball-row-center-animated header-grid-mid-center align-self-mid">
          <Ball
            alt="Purple ball representing skills."
            className="category-skills ball-100 align-self-mid"
            onClick={() => {
              scrollToElement("skills");
            }}
          />
          <Ball
            alt="Green ball representing education."
            className="category-education ball-100 align-self-mid"
            onClick={() => {
              scrollToElement("education");
            }}
          ></Ball>
          <Ball
            alt="Red ball representing projects."
            className="category-projects ball-100 align-self-mid"
            onClick={() => {
              scrollToElement("projects");
            }}
          ></Ball>
        </section>
        {Pointer("down", "header-grid-bot-center align-self-bot")}
      </header>
      <main>
        <article className="category-article-skills" ref={skillsRef}>
          <h1>Skills & Interests</h1>
          <section className="card-row align-self-mid">
            {SkillCard("Introduction", context.skills.introduction)}
            {SkillCard("Languages", skillTags(context.skills.languages))}
            {SkillCard("Tools", skillTags(context.skills.tools))}
            {SkillCard("Miscellaneous", skillTags(context.skills.misc))}
          </section>
        </article>
        <article className="category-article-education" ref={educationRef}>
          <h1>Education</h1>
          <h2>{`${context.education.degree}`}</h2>
          <h3>{`${context.education.university}, ${context.education.location}`}</h3>
          <h3>{`Major in ${context.education.major}`}</h3>
          <h3>{`Minors in ${context.education.minors[0]} & ${context.education.minors[1]}`}</h3>
          <p>{`${context.education.startDate} - ${context.education.endDate}`}</p>
        </article>
        <article className="category-article-projects" ref={projectsRef}>
          <h1>Projects</h1>
          {context.projects.map((project) => {
            return (
              <div>
                <div className="flex no-margin">
                  <h2>{project.name}</h2>
                  <h3>{project.subheading}</h3>
                </div>
                <h3>{project.technologies}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </div>
            );
          })}
        </article>
      </main>
      <footer>
        <nav>
          <ul>
            <div className="ball-row-left-stacked">
              <Ball
                alt="Purple ball representing skills."
                className="category-skills ball-25"
                onClick={() => {
                  scrollToElement("skills");
                }}
              />
              <Ball
                alt="Green ball representing education."
                className="category-education ball-25"
                onClick={() => {
                  scrollToElement("education");
                }}
              ></Ball>
              <Ball
                alt="Red ball representing projects."
                className="category-projects ball-25 no-margin"
                onClick={() => {
                  scrollToElement("projects");
                }}
              ></Ball>
            </div>
            <h1 className="text-xs font-bold pl-1">Dane Dobra</h1>
            <h3 className="text-xxs font-bold pl-1">
              Copyright © {context.appYear} {context.createdBy}
            </h3>
            <h3 className="text-xxs font-bold pl-1">
              Contact at{" "}
              <a
                className="hover:underline"
                href={`mailto:${context.createdByEmail}`}
              >
                {context.createdByEmail}
              </a>
            </h3>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
