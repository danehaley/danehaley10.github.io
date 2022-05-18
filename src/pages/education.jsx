import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

import photo1 from "../assets/img/Education/id3.jpg";
import photo2 from "../assets/img/Education/id6.jpg";
import qut_logo from "../assets/img/Education/qut-logo.png";

function Education() {
  // TODO Refactor into one initation, then use useContext()
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

  return (
    <main className="edu container">
      <Navbar />
      <div className="education-flex-container">
        <div className="education-wrapper">
          <div className="education-header-wrapper">
            <h1 className="education-header__title">Education</h1>
          </div>
          <img src={photo2} className="education__img--top"></img>
          <img src={photo1} className="education__img--side"></img>
          <div className="education__info">
            <div className="education__info-logo">
              <img src={qut_logo}></img>
            </div>
            <div className="education__info-text">
              {screenSize.dynamicWidth < 408 ||
              (screenSize.dynamicWidth < 1930 &&
                screenSize.dynamicWidth > 1600) ||
              (screenSize.dynamicWidth > 801 &&
                screenSize.dynamicWidth < 1105) ? (
                <h2>Bachelor of InfoTech</h2>
              ) : (
                <h2>Bachelor of Information Technology</h2>
              )}
              {screenSize.dynamicWidth < 408 ||
              (screenSize.dynamicWidth > 801 &&
                screenSize.dynamicWidth < 971) ? (
                <h3>Queensland University Tech.</h3>
              ) : (
                <h3>Queensland University of Technology (QUT)</h3>
              )}
              <h3>2020 - 2022 | Brisbane, Australia</h3>
              <p>Major in Computer Science</p>
              {screenSize.dynamicWidth < 408 ||
              (screenSize.dynamicWidth > 801 &&
                screenSize.dynamicWidth < 971) ? (
                <p>Minors in UX and Network Security</p>
              ) : (
                <p>Minors in User Experience (UX) and Networks & Security</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Education;
