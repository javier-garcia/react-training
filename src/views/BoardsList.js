import React from "react";
import BoardCard from "../components/BoardCard";

import boardsData from "../boardsData";

const BoardsList = ({ history }) => {
  function onBoardClick(boardId) {
    history.push(`board/${boardId}`);
  }

  return (
    <div className="boardsListView">
      <header>
        <h1>Trello Clone</h1>
        <div className="boardsList">
          {boardsData.map(board => (
            <BoardCard
              key={board._id}
              title={board.title}
              description={board.description}
              onClick={() => onBoardClick(board._id)}
            />
          ))}
        </div>
      </header>
    </div>
  );
};

export default BoardsList;
