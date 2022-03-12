import { useContext, React, useRef, useState } from "react";
import "./assets/styles/App.scss";
import QUTLogo from "./assets/images/QUT.jpeg";
import ArtikelerLogo from "./assets/images/artikeler-black-250x.png";
import Pointer from "./components/Pointer";
import { Card } from "./components/Card";
import CategoryArticle from "./components/CategoryArticle";
import AppContext from "./contexts/AppContext";
import ArrayToBulletedList from "./utils/ArrayToBulletedList";
import BallGroup from "./components/BallGroup";

function App() {
  const context = useContext(AppContext);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const refsArray = [skillsRef, educationRef, projectsRef];
  const [ballHover, setBallHover] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <BallGroup
          ballAlign="mid"
          ballRowAlign="center"
          ballSize={100}
          animated={{ bool: true, state: ballHover, setState: setBallHover }}
          otherClasses={"header-grid-mid-center"}
          ref={refsArray}
        />
        {ballHover ? <h1 className="ball-group-text">{ballHover}</h1> : null}
        {Pointer("down", "header-grid-bot-center align-self-bot")}
      </header>
      <main>
        <CategoryArticle
          category="Skills"
          refsArray={refsArray}
          ref={skillsRef}
        >
          <div className="card-row align-self-mid article-grid-mid">
            <Card title="Introduction" icon={true}>
              {context.categories.skills.introduction}
            </Card>
          </div>
          <div className="card-row article-grid-bot-center">
            <Card title="Languages" icon={true}>
              {ArrayToBulletedList(context.categories.skills.languages)}
            </Card>
            <Card title="Tools" icon={true}>
              {ArrayToBulletedList(context.categories.skills.tools)}
            </Card>
            <Card title="Miscellaneous" icon={true}>
              {ArrayToBulletedList(context.categories.skills.misc)}
            </Card>
          </div>
        </CategoryArticle>
        <CategoryArticle
          category="Education"
          refsArray={[skillsRef, educationRef, projectsRef]}
          ref={educationRef}
        >
          <div className="card-row align-self-mid article-grid-mid">
            <Card
              title={"Education"}
              flex={false}
              customTitle={true}
              className={"card-full"}
            >
              <div className="flex-over-1000">
                <img src={QUTLogo} id="qut-logo"></img>
                <div>
                  <h2>{`${context.categories.education.degree}`}</h2>
                  <h3>{`${context.categories.education.university}, ${context.categories.education.location}`}</h3>
                  <h3>{`Major in ${context.categories.education.major}`}</h3>
                  <h3>{`Minors in ${context.categories.education.minors[0]} & ${context.categories.education.minors[1]}`}</h3>
                  <p>{`${context.categories.education.startDate} - ${context.categories.education.endDate}`}</p>
                </div>
              </div>
            </Card>
          </div>
        </CategoryArticle>
        <CategoryArticle
          category="Projects"
          refsArray={[skillsRef, educationRef, projectsRef]}
          ref={projectsRef}
        >
          <div className="card-row align-self-mid article-grid-mid">
            {context.categories.projects.map((project) => {
              return (
                <Card
                  title={`${project.name}`}
                  linked={true}
                  linkedUrl={project.link}
                  className={"card-full"}
                >
                  <div className="flex-over-1000">
                    <img src={project.logo} id="qut-logo"></img>
                    <div>
                      <h3>{project.subheading}</h3>
                      <h4>
                        {project.technologies.map((tech) => {
                          const currentTechIndex =
                            project.technologies.indexOf(tech);

                          if (
                            currentTechIndex !==
                            project.technologies.length - 1
                          ) {
                            return tech + ", ";
                          } else if (
                            currentTechIndex ===
                            project.technologies.length - 1
                          ) {
                            return tech;
                          } else {
                            throw new Error(
                              "Error with 'technologies' array, likely empty."
                            );
                          }
                        })}
                      </h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </CategoryArticle>
      </main>
      <footer>
        <nav>
          <ul>
            <BallGroup
              ballAlign="mid"
              ballRowAlign="left"
              ballSize={20}
              static={true}
              stacked={true}
              ref={[skillsRef, educationRef, projectsRef]}
            />
            <h1 className="text-xs font-bold pl-1">{context.createdBy}</h1>
            <h3 className="text-xxs font-bold pl-1">
              Copyright © {context.appYear}
            </h3>
            <h3>Created with React.js & SCSS</h3>
            <h3>All assets designed and created by me!</h3>
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
