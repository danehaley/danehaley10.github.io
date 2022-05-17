import React, { useState } from "react";

function SphereEditPanel(props) {
  const handler = (event) => {
    props.setState({
      ...props.state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="edit-panel">
      <div className="edit-panel__property">
        <input
          type="text"
          name="textString"
          maxlength="15"
          value={props.state.textString}
          onChange={handler}
        />
        <label for="sphereArgW">text</label>
      </div>
      <div className="edit-panel__property">
        <input
          type="range"
          name="sphereArgW"
          value={props.state.sphereArgW}
          onChange={handler}
          min="0"
          max="62"
        />
        <label for="sphereArgW">
          {props.state.sphereArgW}
          {props.screenWidth > 448 ? " width segments" : " w seg"}
        </label>
      </div>
      <div className="edit-panel__property">
        <input
          type="range"
          name="sphereArgH"
          value={props.state.sphereArgH}
          onChange={handler}
          min="0"
          max="62"
        />
        <label for="sphereArgH">
          {props.state.sphereArgH}
          {props.screenWidth > 448 ? " height segments" : " h seg"}
        </label>
      </div>
      <div className="edit-panel__property">
        <input
          className="color"
          type="range"
          name="sphereColor"
          value={props.state.sphereColor}
          onChange={handler}
          min="-1"
          max="360"
        />
        <label for="sphereColor">
          {props.screenWidth > 448 ? "sphere color" : "ball"}
        </label>
      </div>
      <div className="edit-panel__property">
        <input
          className="color"
          type="range"
          name="textColor"
          value={props.state.textColor}
          onChange={handler}
          min="-1"
          max="360"
        />
        <label for="sphereColor">
          {props.screenWidth > 448 ? "text color" : "text"}
        </label>
      </div>
    </div>
  );
}

export default SphereEditPanel;
