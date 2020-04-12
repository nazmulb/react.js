import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Nazmul", age: 39 },
      { name: "Nabil", age: 10 },
      { name: "Nahiyan", age: 9 },
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 39 },
        { name: "Nabil", age: 10.5 },
        { name: "Nahiyan", age: 9.5 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Nazmul', age: 39 },
        { name: event.target.value, age: 10.5 },
        { name: "Nahiyan", age: 9.5 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button onClick={ () => this.switchNameHandler('Nazmul!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nazmul Basher')}
          changed={this.changeNameHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
