import React from "react";

const BoardCard = props => (
  <div className="boardCard" onClick={props.onClick}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
);

export default BoardCard;
