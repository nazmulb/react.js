import React, { Component } from "react";
import styled from "styled-components";
import Person from "./Person/Person";
import "./App.css";

const StyleButton = styled.button`
  background-color: ${props => props.showps ? "#FF0000" : "#008000"};
  font-weight: 600;
  color: #fff;
  border: 0.07rem solid #000;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.showps ? "#FFCCCB" : "#90EE90"};
    color: #000;
  }
`;

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

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyleButton
          showps={this.state.showPersons}
          onClick={this.toggleHandler}
        >
          Toggle Persons
        </StyleButton>
        {persons}
      </div>
    );
  }
}

export default App;
