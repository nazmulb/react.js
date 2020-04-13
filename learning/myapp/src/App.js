import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Nazmul", age: 39 },
      { id: 2, name: "Nabil", age: 10 },
      { id: 3, name: "Nahiyan", age: 9 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => () => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({
      persons,
    });
  };

  changeNameHandler = id => event => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons,
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
              click={this.deletePersonHandler(index)}
              changed={this.changeNameHandler(person.id)}
              name={person.name}
              age={person.age}
              key={person.id}
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
