import React, { Component } from "react";

import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

  changeNameHandler = (id) => (event) => {
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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.toggleHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
