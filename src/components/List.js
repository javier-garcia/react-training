import React from "react";
import Card from "./Card";

class List extends React.Component {
  state = {
    cardCreation: false,
    newCardTitle: ""
  };

  inputRef = React.createRef();

  toggleCardCreation = () => {
    this.setState(
      {
        cardCreation: !this.state.cardCreation
      },
      () => {
        if (this.state.cardCreation) {
          this.inputRef.current.focus();
        }
      }
    );
  };

  onNewCardTitleChange = event => {
    this.setState({
      newCardTitle: event.target.value
    });
  };

  onAddCard = () => {
    this.props.onAddCard(this.props.id, this.state.newCardTitle);

    this.setState({
      cardCreation: false,
      newCardTitle: ""
    });
  };

  render() {
    return (
      <div className="list">
        <h2>{this.props.title}</h2>
        {this.props.cards.map(card => (
          <Card key={card._id} title={card.title} excerpt={card.excerpt} />
        ))}
        {!this.state.cardCreation ? (
          <button
            className="toggleCardCreationButton"
            onClick={this.toggleCardCreation}
          >
            Add card
          </button>
        ) : null}
        {this.state.cardCreation ? (
          <div className="cardCreation">
            <form onSubmit={this.onAddCard}>
              <input
                value={this.state.newCardTitle}
                type="text"
                placeholder="Card title..."
                onChange={this.onNewCardTitleChange}
                ref={this.inputRef}
              />
              <button type="submit">Add</button>
              <button onClick={this.toggleCardCreation}>X</button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default List;
