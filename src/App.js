import { useContext, React } from "react";
import "./assets/styles/App.scss";
import EducationBall from "./assets/images/EducationBall.svg";
import ProjectBall from "./assets/images/ProjectBall.svg";
import SkillBall from "./assets/images/SkillBall.svg";
import Pointer from "./components/Pointer";
import AppContext from "./contexts/AppContext";

function App() {
  const context = useContext(AppContext);

  return (
    <div className="App">
      <header className="App-header">
        <section className="ball-row-center">
          <img
            src={SkillBall}
            alt="Purple ball representing skills."
            className="ball-100"
          ></img>
          <img
            src={EducationBall}
            alt="Green ball representing education."
            className="ball-100"
          ></img>
          <img
            src={ProjectBall}
            alt="Red ball representing projects."
            className="ball-100 no-margin"
          ></img>
        </section>
        <div>{Pointer("down")}</div>
      </header>
      <main>
        <article className="category-article-skills">
          <h1>Skills</h1>
          <h2>Languages</h2>
          <div className="flex">
            {context.skills.languages.map((language) => {
              return <p className="tag">{`${language} `}</p>;
            })}
          </div>
          <h2>Tools</h2>
          <div className="flex">
            {context.skills.tools.map((tool) => {
              return <p className="tag">{`${tool} `}</p>;
            })}
          </div>
          <h2>Miscellaneous</h2>
          <div className="flex">
            {context.skills.misc.map((m) => {
              return <p className="tag">{`${m} `}</p>;
            })}
          </div>
        </article>
        <article className="category-article-education">
          <h1>Education</h1>
          <h2>{`${context.education.degree}`}</h2>
          <h3>{`${context.education.university}, ${context.education.location}`}</h3>
          <h3>{`Major in ${context.education.major}`}</h3>
          <h3>{`Minors in ${context.education.minors[0]} & ${context.education.minors[1]}`}</h3>
          <p>{`${context.education.startDate} - ${context.education.endDate}`}</p>
        </article>
        <article className="category-article-projects">
          <h1>Projects</h1>
        </article>
      </main>
      <footer>
        <nav className="container flex items-center py-1 m-auto">
          <div className="py-2">
            <div className="pl-1 pb-1 w-10"></div>
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
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
