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
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({
      persons,
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Nazmul", age: 39 },
        { name: event.target.value, age: 10.5 },
        { name: "Nahiyan", age: 9.5 },
      ],
    });
  };

  toggleHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      fontWeight: "600",
      backgroundColor: "#FFF",
      border: "0.1rem solid #CCC",
      padding: "0.5rem",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={this.deletePersonHandler.bind(index)}
              name={person.name}
              age={person.age}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button style={style} onClick={this.toggleHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
