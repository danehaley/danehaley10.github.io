import React from "react";
import BallGroup from "./BallGroup";

const NavBar = React.forwardRef((props, ref) => {
  return (
    <BallGroup
      ballAlign="mid"
      ballRowAlign="center"
      ballSize={20}
      static={true}
      ref={props.refsArray}
      selected={props.category}
    />
  );
});

export default NavBar;
