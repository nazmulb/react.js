import React, { Component } from "react";

import classes from "./App.module.css";
import WithClass from "../hoc/WithClass";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("[App.js] constructor");
  }

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

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  render() {
    console.log("[App.js] render");

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
      <WithClass className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.toggleHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
