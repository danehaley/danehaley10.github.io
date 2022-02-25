import "./assets/styles/App.scss";
import EducationBall from "./assets/images/EducationBall.svg";
import ProjectBall from "./assets/images/ProjectBall.svg";
import SkillBall from "./assets/images/SkillBall.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={EducationBall} className="ball-100"></img>
        <img src={ProjectBall} className="ball-100"></img>
        <img src={SkillBall} className="ball-100 no-margin"></img>
      </header>
    </div>
  );
}

export default App;
