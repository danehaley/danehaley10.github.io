import React from "react";

export function Card(props) {
  return (
    <div className="card">
      {props.linked ? (
        <a href={props.linkedUrl} target="_blank" rel="noopener noreferrer">
          <h2>{props.title}</h2>
        </a>
      ) : (
        <h2>{props.title}</h2>
      )}
      <div className={props.flex ? "flex flex-wrap" : ""}>{props.children}</div>
    </div>
  );
}
