import React from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";

export function Card(props) {
  return (
    <div className={`card ${props.className}`}>
      {props.customTitle ? (
        ""
      ) : props.linked ? (
        <div className="flex">
          <a href={props.linkedUrl} target="_blank" rel="noopener noreferrer">
            <h2>{props.title}</h2>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 18, width: 18, marginLeft: 2 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      ) : props.icon ? (
        <div className="flex">
          {Icons(props.title.toLowerCase())}
          <h2>{props.title}</h2>
        </div>
      ) : (
        <h2>{props.title}</h2>
      )}
      <div
        className={`${!props.customTitle ? "card-content" : ""} ${
          props.flex ? "flex flex-wrap" : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  customTitle: PropTypes.bool,
  title: PropTypes.string,
  linked: PropTypes.bool,
  linkedUrl: PropTypes.string,
  icon: PropTypes.bool,
  flex: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  customTitle: false,
  title: "",
  linked: false,
  linkedUrl: "",
  icon: false,
  flex: false,
  className: "",
};
