import Head from "next/head";
import Image from "next/image";

import hero from "../public/hero.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dane Haley | Web Developer</title>
        <meta name="description" content="Dane Haley's portfolio site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="hero">
          <header className="nav hero__nav">
            <a
              href="/dane-dobra__resume.pdf"
              target="_blank"
              className="nav__item--left"
            >
              Resume
            </a>
            <a href="mailto: danehaley22@gmail.com" className="nav__item--left">
              Contact
            </a>
            <a
              href="https://github.com/danehaley10/danehaley10.github.io"
              target="_blank"
              rel="noreferrer"
              className="nav__item--left"
            >
              Source
            </a>
          </header>
          <Image
            src={hero}
            className="hero__img"
            alt="Image of trees imposed in front of the sky, with sun in view."
            quality={75}
            priority={true}
            layout={"raw"}
          />
          <div className="titles hero-titles">
            <h1 className="titles__heading">Dane Haley</h1>
            <h2 className="titles__subtitle">Web Developer</h2>
          </div>
        </div>

        <div className="spacer"></div>
      </main>
    </div>
  );
}
