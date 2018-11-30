import React, { Fragment } from "react";
import uuidv1 from "uuid/v1";
import { Link } from "react-router-dom";
import List from "../components/List";

import boardsData from "../boardsData";

class BoardDetail extends React.Component {
  state = {
    board: null
  };

  componentDidMount() {
    this.setState({
      board: boardsData.find(board => board._id === this.props.match.params.id)
    });
  }

  onAddCard = (listId, newCardTitle) => {
    const newCard = {
      _id: uuidv1(),
      title: newCardTitle,
      excerpt: "",
      content: ""
    };

    const board = Object.assign({}, this.state.board);

    board.lists.find(list => list._id === listId).cards.push(newCard);

    this.setState({
      board
    });
  };

  render() {
    return (
      <div className="boardDetailView">
        {this.state.board ? (
          <Fragment>
            <Link to="/">Back to boards list</Link>
            <h1>Board title</h1>
            <div className="listsList">
              {this.state.board.lists.map(list => (
                <List
                  key={list._id}
                  id={list._id}
                  title={list.title}
                  cards={list.cards}
                  onAddCard={this.onAddCard}
                />
              ))}
            </div>
          </Fragment>
        ) : (
          <p>Board not found!!!</p>
        )}
      </div>
    );
  }
}

export default BoardDetail;
