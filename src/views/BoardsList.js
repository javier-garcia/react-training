import React from "react";
import BoardCard from "../components/BoardCard";

const BoardsList = ({ history }) => {
  function onBoardClick() {
    history.push("board/a5d9707e-e74e-4e4a-92c6-0872c5e1945d");
  }

  return (
    <div className="boardsListView">
      <header>
        <h1>Trello Clone</h1>
        <div className="boardsList">
          <BoardCard
            title="This is the title"
            description="This is the description of the card."
            onClick={onBoardClick}
          />
          <BoardCard
            title="This is the title"
            description="This is the description of the card."
            onClick={onBoardClick}
          />
          <BoardCard
            title="This is the title"
            description="This is the description of the card."
            onClick={onBoardClick}
          />
          <BoardCard
            title="This is the title"
            description="This is the description of the card."
            onClick={onBoardClick}
          />
        </div>
      </header>
    </div>
  );
};

export default BoardsList;
