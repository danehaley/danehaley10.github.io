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
        "Hello, I'm Dane! I'm a student developer who is currently specializing in full-stack web development. Although I am really quite interested in everything from systems programming to app development. Some of my interests outside of programming include music production (especially synthesizers), art design, and tinkering with hardware.",
      languages: [
        "JavaScript",
        "HTML",
        "CSS / SCSS",
        "Python",
        "SQL",
        "C",
        "C#",
        "Java",
      ],
      tools: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Django",
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
        technologies: ["React.js", "Chakra UI", "Express.js", "AWS"],
        description:
          "A web app completed for a “Cloud Computing” class that aggregates articles from several news APIs and performs natural language processing for keyword extraction and sentiment analysis. Keywords and sentiment were then displayed on the articles as “tags” that are used to interactively filter articles in order to promote discovery.  Using docker, this app was hosted on AWS using EC2 auto-scaling with persistence via Redis and AWS S3.",
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
          "A web app that would present adoption listings from several adoption agencies, with the aim of increasing visibility and ensuring pets go to the right home. To achieve the latter, it’s hoped to implement an AI (GPT3) powered recommendation system that recommends listings based on the preferences and characteristics of the prospective adoptee.",
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
