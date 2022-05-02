import myHero from "../assets/img/Welcome/myHero.png";
import "../styles/welcome.scss";

function Welcome() {
  return (
    <main className="grid-container">
      <img src={myHero} alt="A puppy." />
      <div className="text-container">
        <h1>Dane Haley</h1>
        <h2>Web Developer</h2>
      </div>
    </main>
  );
}

export default Welcome;
