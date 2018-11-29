import React, { Component } from "react";
import BoardsList from "./views/BoardsList";
import BoardDetail from "./views/BoardDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={BoardsList} />
          <Route path="/board/:id" component={BoardDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
