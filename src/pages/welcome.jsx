import React from "react";
import puppy from "../assets/img/Welcome/puppy.png";
import tree from "../assets/img/Welcome/tree.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ball from "../components/3dBall";
import "../styles/welcome.scss";
import Navbar from "../components/Navbar";

function Welcome() {
  return (
    <main className="container">
      <Navbar />
      <div className="frontpage-media">
        <Canvas className="canvas">
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Ball />
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
    </main>
  );
}

export default Welcome;
