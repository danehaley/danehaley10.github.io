import Navbar from "../components/Navbar";
import { TextSphere } from "../components/Globe";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

function Skills() {
  const [editPanel, setEditPanel] = useState(false);
  const [textSphereState, setTextSphereState] = useState({
    textString: "Hello world!",
    textColor: "default",
    sphereArgW: 16,
    sphereArgH: 16,
    sphereColor: "default",
  });

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const EditPanel = () => {
    const handler = (event) => {
      console.log(event.target.name);
      setTextSphereState({
        ...textSphereState,
        [event.target.name]: event.target.value,
      });
    };
    return (
      <div className="edit-panel-box">
        <div className="edit-property-wrapper">
          <input
            type="text"
            name="textString"
            value={textSphereState.textString}
            onChange={handler}
          />
          <label for="sphereArgW">text</label>
        </div>
        <div className="edit-property-wrapper">
          <input
            type="range"
            name="sphereArgW"
            value={textSphereState.sphereArgW}
            onChange={handler}
            min="0"
            max="62"
          />
          <label for="sphereArgW">
            {textSphereState.sphereArgW}{" "}
            {screenSize.dynamicWidth > 448 ? "width segments" : "w seg"}
          </label>
        </div>
        <div className="edit-property-wrapper">
          <input
            type="range"
            name="sphereArgH"
            value={textSphereState.sphereArgH}
            onChange={handler}
            min="0"
            max="62"
          />
          <label for="sphereArgH">
            {textSphereState.sphereArgH}{" "}
            {screenSize.dynamicWidth > 448 ? "height segments" : "h seg"}
          </label>
        </div>
        <div className="edit-property-wrapper">
          <input
            className="color"
            type="range"
            name="sphereColor"
            value={textSphereState.sphereColor}
            onChange={handler}
            min="-1"
            max="360"
          />
          <label for="sphereColor">
            {screenSize.dynamicWidth > 448 ? "sphere color" : "ball"}
          </label>
        </div>
        <div className="edit-property-wrapper">
          <input
            className="color"
            type="range"
            name="textColor"
            value={textSphereState.textColor}
            onChange={handler}
            min="-1"
            max="360"
          />
          <label for="sphereColor">
            {screenSize.dynamicWidth > 448 ? "text color" : "text"}
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="home">
      <main className="container">
        <Navbar />
        <div className="skill-wrapper">
          <div className="sphere-heading-box">
            <Canvas className="canvas" shadows={true}>
              <Suspense fallback={null}>
                <TextSphere
                  text={textSphereState.textString}
                  colors={{
                    text: textSphereState.textColor,
                    wireframe: textSphereState.sphereColor,
                  }}
                  args={[
                    1.05,
                    textSphereState.sphereArgW,
                    textSphereState.sphereArgH,
                  ]}
                />
              </Suspense>
            </Canvas>
            <div className="sphere-text">
              {!editPanel && (
                <p
                  class="edit"
                  id="edit-closed"
                  onClick={() => setEditPanel(true)}
                >
                  + edit
                </p>
              )}
              {editPanel && (
                <p class="edit" onClick={() => setEditPanel(false)}>
                  - close
                </p>
              )}
              {editPanel && EditPanel()}
              {editPanel && <div className="spacer"></div>}
              {!editPanel && (
                <div class="heading">
                  <h2>{"</>"}</h2>
                  <h1>Skills</h1>
                </div>
              )}
            </div>
          </div>
          <div className="skill-section">
            <h2>Languages</h2>
            <hr></hr>
            <div className="skill-row">
              <div className="skill-tag">
                <h4>Javascript</h4>
              </div>
              <div className="skill-tag">
                <h4>Python</h4>
              </div>
              <div className="skill-tag">
                <h4>C#</h4>
              </div>
              <div className="skill-tag">
                <h4>C</h4>
              </div>
            </div>
          </div>
          <div className="skill-section">
            <h2>Tools</h2>
            <hr></hr>
            <div className="skill-row">
              <div className="skill-tag">
                <h4>HTML/CSS</h4>
              </div>
              <div className="skill-tag">
                <h4>React.js</h4>
              </div>
              <div className="skill-tag">
                <h4>Next.js</h4>
              </div>
              <div className="skill-tag">
                <h4>Node.js</h4>
              </div>
              <div className="skill-tag">
                <h4>Express.js</h4>
              </div>
              <div className="skill-tag">
                <h4>Flask</h4>
              </div>
              <div className="skill-tag">
                <h4>Prisma</h4>
              </div>
              <div className="skill-tag">
                <h4>SQL</h4>
              </div>
            </div>
          </div>
          <div className="skill-section">
            <h2>Miscellaneous</h2>
            <hr></hr>
            <div className="skill-row">
              <div className="skill-tag">
                <h4>
                  {screenSize.dynamicWidth < 448
                    ? "AWS"
                    : "Amazon Web Services (AWS)"}
                </h4>
              </div>
              <div className="skill-tag">
                <h4>Postman</h4>
              </div>
              <div className="skill-tag">
                <h4>Docker</h4>
              </div>
              <div className="skill-tag">
                <h4>Linux CLI</h4>
              </div>
              <div className="skill-tag">
                <h4>Git</h4>
              </div>
              <div className="skill-tag">
                <h4>Figma</h4>
              </div>
              <div className="skill-tag">
                <h4>Adobe Photoshop</h4>
              </div>
              <div className="skill-tag">
                <h4>Adobe Illustrator</h4>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Skills;
