import React from "react";
import PropTypes from "prop-types";
import ScrollToElement from "../utils/ScrollToElement";
import { ReactComponent as Ball } from "../assets/images/Ball.svg";

const BallGroup = React.forwardRef((props, ref) => {
  const mouseLeaveHandler = () => {
    if (props.animated.bool) props.animated.setState(false);
  };
  const mouseOverHandler = (category) => {
    if (props.animated.bool) {
      if (typeof category !== "string") {
        throw new Error("Category for Ball MouseOver event is not a string.");
      }
      category = category[0].toUpperCase() + category.substring(1);
      props.animated.setState(category);
    }
  };

  return (
    <section
      className={`ball-row-${props.ballRowAlign}${
        props.animated.bool && !props.stacked ? `-animated` : ""
      }${
        props.stacked && !props.animated.bool ? "-stacked" : ""
      } align-self-mid ${props.otherClasses}`}
    >
      <Ball
        alt="Purple ball representing skills."
        className={`category-skills ball-${props.ballSize} align-self-mid ${
          props.static ? "static" : " "
        } ${props.selected === "Skills" ? "selected" : " "}`}
        onClick={() => {
          ScrollToElement("skills", ref[0]);
        }}
        onMouseOver={() => {
          mouseOverHandler("Skills");
        }}
        onMouseLeave={() => {
          mouseLeaveHandler();
        }}
      />
      <Ball
        alt="Green ball representing education."
        className={`category-education ball-${props.ballSize} align-self-mid ${
          props.static ? "static" : " "
        } ${props.selected === "Education" ? "selected" : " "}`}
        onClick={() => {
          ScrollToElement("education", ref[1]);
        }}
        onMouseOver={() => {
          mouseOverHandler("Education");
        }}
        onMouseLeave={() => {
          mouseLeaveHandler();
        }}
      ></Ball>
      <Ball
        alt="Red ball representing projects."
        className={`category-projects ball-${props.ballSize} align-self-mid ${
          props.static ? "static" : " "
        } ${props.selected === "Projects" ? "selected" : " "}`}
        onClick={() => {
          ScrollToElement("projects", ref[2]);
        }}
        onMouseOver={() => {
          mouseOverHandler("Projects");
        }}
        onMouseLeave={() => {
          mouseLeaveHandler();
        }}
      ></Ball>
    </section>
  );
});

BallGroup.propTypes = {
  ballRowAlign: PropTypes.string,
  ballSize: PropTypes.number,
  animated: PropTypes.bool,
  stacked: PropTypes.bool,
  static: PropTypes.bool,
  otherClasses: PropTypes.string,
};

BallGroup.defaultProps = {
  ballRowAlign: "mid",
  ballSize: 100,
  animated: false,
  stacked: false,
  static: false,
  otherClasses: "",
};
export default BallGroup;
