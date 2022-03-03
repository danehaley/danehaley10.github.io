import React from "react";
import { ReactComponent as SlideIndictator } from "../assets/images/SlideIndictatorRounded.svg";

function SkillCard(title, text) {
  return (
    <div className={`card`}>
      <h2>{title}</h2>
      <p className="flex flex-wrap">{text}</p>
    </div>
  );
}

export default SkillCard;
