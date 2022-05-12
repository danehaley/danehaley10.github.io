import React from "react";

// Icons Import
import iconC from "../assets/img/Skills/icons-c.svg";
import iconCSharp from "../assets/img/Skills/icons-csharp.svg";
import iconFlask from "../assets/img/Skills/icons-flask.svg";
import iconExpress from "../assets/img/Skills/icons-express.svg";
import iconJavascript from "../assets/img/Skills/icons-javascript.svg";
import iconNext from "../assets/img/Skills/icons-next.svg";
import iconNode from "../assets/img/Skills/icons-node.svg";
import iconPython from "../assets/img/Skills/icons-python.svg";
import iconReact from "../assets/img/Skills/icons-react.svg";
import iconSwift from "../assets/img/Skills/icons-swift.svg";

const iconsDirectory = {
  C: iconC,
  CSharp: iconCSharp,
  Flask: iconFlask,
  Express: iconExpress,
  Javascript: iconJavascript,
  Next: iconNext,
  Node: iconNode,
  Python: iconPython,
  React: iconReact,
  Swift: iconSwift,
};

const stringDirectory = {
  C: "C",
  CSharp: "C#",
  Flask: "Flask",
  Express: "Express",
  Javascript: "Javascript",
  Next: "Next.js",
  Node: "Node.js",
  Python: "Python",
  React: "React.js",
  Swift: "Swift",
};

const SkillIcon = (props) => {
  const skillName = stringDirectory[props.skill];
  const skillIcon = iconsDirectory[props.skill];
  return (
    <div className="skill-icon">
      <img alt={`Icon for ${skillName}`} src={skillIcon} />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillIcon;
