import React, { Component } from "react";
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
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
