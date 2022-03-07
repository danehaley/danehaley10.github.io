import { useContext, React, useRef } from "react";
import "./assets/styles/App.scss";
import Pointer from "./components/Pointer";
import { Card, EducationCard, ProjectsCard } from "./components/Cards";
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

  const educationText = () => {
    return <div></div>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <BallGroup
          ballAlign="mid"
          ballRowAlign="center"
          ballSize={100}
          animated={true}
          otherClasses={"header-grid-mid-center"}
          ref={refsArray}
        />
        {Pointer("down", "header-grid-bot-center align-self-bot")}
      </header>
      <main>
        <CategoryArticle
          category="Skills"
          refsArray={refsArray}
          ref={skillsRef}
        >
          <div className="card-row align-self-mid article-grid-mid">
            <Card title="Introduction">
              {context.categories.skills.introduction}
            </Card>
          </div>
          <div className="card-row article-grid-bot-center">
            <Card title="Languages">
              {ArrayToBulletedList(context.categories.skills.languages)}
            </Card>
            <Card title="Tools">
              {ArrayToBulletedList(context.categories.skills.tools)}
            </Card>
            <Card title="Miscellaneous">
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
            <Card title={"Education"} flex={false}>
              <h2>{`${context.categories.education.degree}`}</h2>
              <h3>{`${context.categories.education.university}, ${context.categories.education.location}`}</h3>
              <h3>{`Major in ${context.categories.education.major}`}</h3>
              <h3>{`Minors in ${context.categories.education.minors[0]} & ${context.categories.education.minors[1]}`}</h3>
              <p>{`${context.categories.education.startDate} - ${context.categories.education.endDate}`}</p>
            </Card>
          </div>
        </CategoryArticle>
        <CategoryArticle
          category="Projects"
          refsArray={[skillsRef, educationRef, projectsRef]}
          ref={projectsRef}
        >
          {context.categories.projects.map((project) => {
            return (
              <Card
                title={`${project.name}`}
                linked={true}
                linkedUrl={project.link}
              >
                <h3>{project.subheading}</h3>
                <h4>
                  {project.technologies.map((tech) => {
                    const currentTechIndex = project.technologies.indexOf(tech);

                    if (currentTechIndex !== project.technologies.length - 1) {
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
              </Card>
            );
          })}
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
