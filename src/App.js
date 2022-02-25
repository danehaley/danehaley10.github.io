import "./assets/styles/App.scss";
import EducationBall from "./assets/images/EducationBall.svg";
import ProjectBall from "./assets/images/ProjectBall.svg";
import SkillBall from "./assets/images/SkillBall.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={SkillBall}
          alt="Purple ball representing skills."
          className="ball-100 no-margin"
        ></img>
        <img
          src={EducationBall}
          alt="Green ball representing education."
          className="ball-100"
        ></img>
        <img
          src={ProjectBall}
          alt="Red ball representing projects."
          className="ball-100"
        ></img>
      </header>
    </div>
  );
}

export default App;
