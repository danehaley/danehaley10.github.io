import * as React from "react";
import "../styles/app.scss";

// images
import hero from "../images/hero.jpeg";

// data
import { heroNavbarItems } from "../data/links";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Dane Haley | Web Developer</title>
      <div className="landing">
        <ul className="landing-nav">
          {heroNavbarItems.map((item) => (
            <li className="landing-nav__item">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <img className="landing__img" src={hero} />
        <h1 className="landing__title">Dane Haley</h1>
        <h2 className="landing__subtitle">Web Developer</h2>
      </div>
    </main>
  );
};

export default IndexPage;
