import React from "react";
import AppContext from "./AppContext";

import ArtikelerLogo from "../assets/images/artikeler-black-250x.png";
import PawlerLogo from "../assets/images/pawler-logoonly-brandcolor.png";

const dateToday = new Date();
const input = {
  appUrl: "danehaley10.github.io",
  appYear: dateToday.getFullYear(),
  appTech: ["React.js", "SASS", "Docker"],
  createdBy: "Dane Dobra",
  createdByEmail: "danehaley22@gmail.com",
  categories: {
    skills: {
      introduction:
        "Hello, I'm Dane! I'm a student developer who is currently specializing in web development. Although I am really quite interested in everything from systems programming to app development. Some of my interests outside of programming include music production (especially synthesizers), art design, and tinkering with hardware.",
      languages: [
        "JavaScript",
        "HTML",
        "CSS / SCSS",
        "Python",
        "C",
        "C#",
        "SQL",
      ],
      tools: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Flask",
        "Prisma",
      ],
      misc: [
        "Linux CLI",
        "Docker",
        "Git",
        "Postman",
        "AWS",
        "PostgreSQL",
        "RESTful APIs",
        "Adobe Photoshop",
        "Adobe XD",
      ],
    },
    education: {
      university: "Queensland University of Technology (QUT)",
      location: "Brisbane, Australia",
      degree: "Bachelor of Information Technology",
      shortenedDegree: "Bachelor of IT",
      major: "Computer Science",
      minors: ["User Experience (UX)", "Network & Security"],
      gpa: 5.47,
      startDate: "Febuary 2020",
      endDate: "November 2022",
    },
    projects: [
      {
        name: "Artikeler",
        logo: ArtikelerLogo,
        status: "Offline",
        subheading: "Interactive article aggregator",
        technologies: ["React.js", "Chakra UI", "Express.js", "Docker", "AWS"],
        description:
          "A web app that aggregates articles from news APIs and performs natural language processing to get keywords and sentiment (i.e. negative, positive) then displays it on the articles as “tags” that are used to interactively filter articles and promote article discovery.",
        link: "https://github.com/danehaley10/Artikeler",
        screenshots: [],
      },
      {
        name: "Pawler",
        logo: PawlerLogo,
        status: "WIP",
        subheading: "Smart pet adoption service",
        technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
        description:
          "A web app that will host adoption listings from adoption agencies, with the aim of increasing visibility and ensuring pets go to the right home. To achieve the latter, it’s hoped to implement an AI (GPT3) powered recommendation system that recommends listings based on the preferences and characteristics of the prospective adoptee.",
        link: "https://github.com/danehaley10/Pawler",
        screenshots: [],
      },
    ],
  },
};

function AppContextProvider({ children }) {
  return <AppContext.Provider value={input}>{children}</AppContext.Provider>;
}

export { AppContextProvider };
