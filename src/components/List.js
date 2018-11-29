import React from "react";
import Card from "./Card";

const List = props => {
  return (
    <div className="list">
      <h2>{props.title}</h2>
      {props.cards.map(card => (
        <Card title={card.title} excerpt={card.excerpt} />
      ))}
    </div>
  );
};

export default List;
