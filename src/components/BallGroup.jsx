import React from "react";
import PropTypes from "prop-types";
import ScrollToElement from "../utils/ScrollToElement";
import { ReactComponent as Ball } from "../assets/images/Ball.svg";

const BallGroup = React.forwardRef((props, ref) => {
  return (
    <section
      className={`ball-row-${props.ballRowAlign}${
        props.animated && !props.stacked ? `-animated` : ""
      }${props.stacked && !props.animated ? "-stacked" : ""} align-self-mid ${
        props.otherClasses
      }`}
    >
      <Ball
        alt="Purple ball representing skills."
        className={`category-skills ball-${props.ballSize} align-self-mid ${
          props.static ? "static" : ""
        }`}
        onClick={() => {
          ScrollToElement("skills", ref[0]);
        }}
      />
      <Ball
        alt="Green ball representing education."
        className={`category-education ball-${props.ballSize} align-self-mid ${
          props.static ? "static" : ""
        }`}
        onClick={() => {
          ScrollToElement("education", ref[1]);
        }}
      ></Ball>
      <Ball
        alt="Red ball representing projects."
        className={`category-projects ball-${props.ballSize} align-self-mid ${
          props.static ? "static" : ""
        }`}
        onClick={() => {
          ScrollToElement("projects", ref[2]);
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
