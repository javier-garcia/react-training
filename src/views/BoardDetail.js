import React from "react";
import { Link } from "react-router-dom";
import List from "../components/List";

const BoardDetail = () => {
  return (
    <div className="boardDetailView">
      <Link to="/">Back to boards list</Link>
      <h1>Board title</h1>
      <div className="listsList">
        <List
          title="List 2 title"
          cards={[
            { title: "Card 1", excerpt: "This is the excerpt for card 1" },
            { title: "Card 2", excerpt: "This is the excerpt for card 2" }
          ]}
        />
        <List
          title="List 1 title"
          cards={[
            { title: "Card 1", excerpt: "This is the excerpt for card 1" },
            { title: "Card 2", excerpt: "This is the excerpt for card 2" },
            { title: "Card 3", excerpt: "This is the excerpt for card 3" }
          ]}
        />
      </div>
    </div>
  );
};

export default BoardDetail;
