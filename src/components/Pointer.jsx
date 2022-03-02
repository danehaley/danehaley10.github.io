import React from "react";
import SlideIndictator from "../assets/images/SlideIndictatorRounded.svg";

function Pointer(direction, className = null, size = 10) {
  if (typeof direction === "string") {
    return (
      <div className={`slide-pointer-group-${direction} ${className}`}>
        <img src={SlideIndictator} className={`slide-pointer-${size}`}></img>
        <img src={SlideIndictator} className={`slide-pointer-${size}`}></img>
        <img src={SlideIndictator} className={`slide-pointer-${size}`}></img>
      </div>
    );
  } else {
    throw new Error("Direction input for Pointer component is not a string.");
  }
}

export default Pointer;
