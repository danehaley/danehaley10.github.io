import React from "react";
import { ReactComponent as LanguageIcon } from "../assets/icons/LanguagesIcon.svg";
import { ReactComponent as ToolsIcon } from "../assets/icons/ToolsIcon.svg";
import { ReactComponent as MiscellaneousIcon } from "../assets/icons/MiscellaneousIcon.svg";
import { ReactComponent as IntroductionIcon } from "../assets/icons/IntroductionIcon.svg";

const Icons = (icon) => {
  if (icon === "languages")
    return <LanguageIcon className="icon"></LanguageIcon>;
  else if (icon === "tools") return <ToolsIcon className="icon"></ToolsIcon>;
  else if (icon === "miscellaneous")
    return <MiscellaneousIcon className="icon"></MiscellaneousIcon>;
  else if (icon === "introduction")
    return <IntroductionIcon className="icon"></IntroductionIcon>;
};

export default Icons;
