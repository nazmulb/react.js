import React, { Component } from "react";
import Validation from "./Validation/Validation";
import "./App.css";

class App extends Component {
  state = {
    userInput: "",
  };

  changeHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.changeHandler}
        />
        <Validation inputLength={this.state.userInput.length} />
      </div>
    );
  }
}

export default App;
