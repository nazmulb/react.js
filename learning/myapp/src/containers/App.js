import React, { Component } from "react";

import classes from "./App.module.css";
import Div from "../hoc/Div";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

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
    changeCounter: 0,
    authenticated: false,
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

    this.setState((previousState, props) => ({
      persons,
      changeCounter: previousState.changeCounter + 1,
    }));
  };

  toggleHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
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
      <Div className={classes.App}>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.toggleHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Div>
    );
  }
}

export default App;
