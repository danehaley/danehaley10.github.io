import React from "react";
import { ReactComponent as SlideIndictator } from "../assets/images/SlideIndictatorRounded.svg";

function Pointer(direction, className = null, size = 10) {
  if (typeof direction === "string") {
    return (
      <div className={`slide-pointer-group-${direction} ${className}`}>
        <SlideIndictator className={`slide-pointer-${size}`}></SlideIndictator>
        <SlideIndictator className={`slide-pointer-${size}`}></SlideIndictator>
        <SlideIndictator className={`slide-pointer-${size}`}></SlideIndictator>
      </div>
    );
  } else {
    throw new Error("Direction input for Pointer component is not a string.");
  }
}

export default Pointer;
