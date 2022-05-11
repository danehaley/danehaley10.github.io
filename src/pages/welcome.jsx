import puppy from "../assets/img/Welcome/puppy.png";
import tree from "../assets/img/Welcome/tree.png";
import { Suspense } from "react";
import Scene from "../components/Globe";
import { Canvas } from "@react-three/fiber";
import "../styles/welcome.scss";
import Navbar from "../components/Navbar";

function Welcome() {
  return (
    <main className="container">
      <Navbar />
      <div className="media-container">
        <div className="frontpage-media">
          <Canvas className="canvas">
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
          <div className="images">
            <img id="puppy" src={puppy} alt="A puppy." />
            <img id="tree" src={tree} alt="A tree drawing." />
          </div>
          <div className="headings">
            <h1>Dane Haley</h1>
            <h2>Web Developer</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
