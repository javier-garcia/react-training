import React, { Fragment } from "react";
import uuidv1 from "uuid/v1";
import { Link } from "react-router-dom";
import List from "../components/List";

import boardsData from "../boardsData";

class BoardDetail extends React.Component {
  state = {
    board: null,
    listCreation: false,
    newListTitle: ""
  };

  inputRef = React.createRef();

  componentDidMount() {
    this.setState({
      board: boardsData.find(board => board._id === this.props.match.params.id)
    });
  }

  toggleListCreation = () => {
    this.setState(
      {
        listCreation: !this.state.listCreation
      },
      () => {
        if (this.state.listCreation) {
          this.inputRef.current.focus();
        }
      }
    );
  };

  onNewListTitleChange = event => {
    this.setState({
      newListTitle: event.target.value
    });
  };

  onAddList = event => {
    event.preventDefault();

    const newList = {
      _id: uuidv1(),
      title: this.state.newListTitle,
      board_id: this.state.board._id,
      cards: []
    };

    const board = Object.assign({}, this.state.board);

    board.lists.push(newList);

    this.setState({
      board,
      listCreation: false,
      newListTitle: ""
    });
  };

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
            <Link className="backButton" to="/">
              Back to boards list
            </Link>
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
              {!this.state.listCreation ? (
                <button
                  className="toggleListCreationButton"
                  onClick={this.toggleListCreation}
                >
                  Add new list
                </button>
              ) : (
                <div className="listCreation">
                  <form onSubmit={this.onAddList}>
                    <input
                      value={this.state.newListTitle}
                      type="text"
                      placeholder="List title..."
                      onChange={this.onNewListTitleChange}
                      ref={this.inputRef}
                    />
                    <button type="submit">Add</button>
                    <button onClick={this.toggleListCreation}>X</button>
                  </form>
                </div>
              )}
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
