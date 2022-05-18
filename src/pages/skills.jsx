import Navbar from "../components/Navbar";
import { TextSphere } from "../components/Globe";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import React, { useState, useEffect } from "react";
import SkillTag from "../components/SkillTag.jsx";
import SphereEditPanel from "../components/Editor.jsx";
import Footer from "../components/Footer";

function Skills() {
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

  const [editPanel, setEditPanel] = useState(false);

  const [sphereProperties, setSphereProperties] = useState({
    textString: "Hello World!",
    textColor: "-1",
    sphereColor: "-1",
    sphereArgW: 16,
    sphereArgH: 16,
  });

  return (
    <main className="container">
      <Navbar />
      <div className="skills-flex-container">
        <div className="skills-content-wrapper">
          <div className="skills-header">
            <Canvas className="skills-header__canvas" shadows={true}>
              <Suspense fallback={null}>
                <TextSphere
                  text={sphereProperties.textString}
                  colors={{
                    text: sphereProperties.textColor,
                    wireframe: sphereProperties.sphereColor,
                  }}
                  args={[
                    1.05,
                    sphereProperties.sphereArgW,
                    sphereProperties.sphereArgH,
                  ]}
                />
              </Suspense>
            </Canvas>
            <div className="skills-header-text">
              {!editPanel && (
                <p
                  class="skills-header-text__toggle skills-header-text__toggle--closed"
                  onClick={() => setEditPanel(true)}
                >
                  + edit
                </p>
              )}
              {editPanel && (
                <p
                  class="skills-header-text__toggle skills-header-text__toggle--opened"
                  onClick={() => setEditPanel(false)}
                >
                  - close
                </p>
              )}
              {editPanel && (
                <SphereEditPanel
                  state={sphereProperties}
                  setState={setSphereProperties}
                  screenWidth={screenSize.dynamicWidth}
                />
              )}
              {editPanel && <div className="skills-header-text__spacer"></div>}
              {!editPanel && (
                <div class="skills-header-text__title">
                  <h1 className="skills-header-text__title--big">Skills</h1>
                </div>
              )}
            </div>
          </div>
          <div className="skills-section">
            <h2 className="skills-section__title">Languages</h2>
            <hr className="skills-section__divider"></hr>
            <div className="skills-section-row">
              <SkillTag text="Javascript" />
              <SkillTag text="Python" />
              <SkillTag text="C#" />
              <SkillTag text="C" />
            </div>
          </div>
          <div className="skills-section">
            <h2 className="skills-section__title">Tools</h2>
            <hr className="skills-section__divider"></hr>
            <div className="skills-section-row">
              <SkillTag text="HTML/CSS" />
              <SkillTag text="React.js" />
              <SkillTag text="Next.js" />
              <SkillTag text="Node.js" />
              <SkillTag text="Express.js" />
              <SkillTag text="Flask" />
              <SkillTag text="Prisma" />
              <SkillTag text="SQL" />
            </div>
          </div>
          <div className="skills-section">
            <h2 className="skills-section__title">Miscellaneous</h2>
            <hr className="skills-section__divider"></hr>
            <div className="skills-section-row">
              <SkillTag
                text="Amazon Web Services (AWS)"
                altText={{
                  altText: "AWS",
                  thresholdWidth: 448,
                  currentWidth: screenSize.dynamicWidth,
                }}
              />
              <SkillTag text="Postman" />
              <SkillTag text="Docker" />
              <SkillTag text="Linux CLI" />
              <SkillTag text="Git" />
              <SkillTag text="Figma" />
              <SkillTag
                text="Adobe Photoshop"
                altText={{
                  altText: "Photoshop",
                  thresholdWidth: 448,
                  currentWidth: screenSize.dynamicWidth,
                }}
              />
              <SkillTag
                text="Adobe Illustrator"
                altText={{
                  altText: "Illustrator",
                  thresholdWidth: 448,
                  currentWidth: screenSize.dynamicWidth,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Skills;
