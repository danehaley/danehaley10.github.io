import React from "react";
import puppy from "../assets/img/Welcome/puppy.png";
import tree from "../assets/img/Welcome/tree.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ball from "../components/3dBall";
import "../styles/welcome.scss";

function Welcome() {
  return (
    <main className="grid-container">
      <div className="link-container">
        <p>skills</p>
        <p>projects</p>
        <p>education</p>
        <p>resume</p>
        <p>contact</p>
      </div>
      <div className="media-container">
        <Canvas className="canvas">
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Ball />
        </Canvas>
        <div className="images">
          <img className="full-image" src={puppy} alt="A puppy." />
          <img
            className="shorter-image margin-l-10"
            src={tree}
            alt="A tree drawn via 'stick and poke' technique."
          />
        </div>
        <div className="text">
          <h1>Dane Haley</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
