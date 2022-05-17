import puppy from "../assets/img/Welcome/puppy.png";
import tree from "../assets/img/Welcome/tree.png";
import { Suspense } from "react";
import Scene from "../components/Globe";
import { Canvas } from "@react-three/fiber";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="home container">
      <Navbar />
      <div className="media">
        <Canvas className="media-3dMoon" shadows={true}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        <div className="media-images">
          <img class="media-images__puppy" src={puppy} alt="A puppy." />
          <img class="media-images__tree" src={tree} alt="A tree drawing." />
        </div>
        <div className="media-headings">
          <h1 className="media-headings__bigboy">Dane Haley</h1>
          <h2 className="media-headings__smallboy">Web Developer</h2>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
