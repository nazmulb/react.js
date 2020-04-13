import React, { Component } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
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

  deleteHandler = (charIndex) => () => {
    let text = this.state.userInput.split("");
    text.splice(charIndex, 1);
    text = text.join("");

    console.log(charIndex)

    this.setState({
      userInput: text,
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
        {this.state.userInput.split("").map((char, index) => (
          <Char
            letter={char}
            key={index}
            click={this.deleteHandler(index)}
          />
        ))}
      </div>
    );
  }
}

export default App;
