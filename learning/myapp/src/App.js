import React, { Component } from "react";
import Radium from 'radium';
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
    const style = {
      fontWeight: "600",
      backgroundColor: "#008000",
      color: "#FFF",
      border: "0.07rem solid #000",
      padding: "0.5rem",
      cursor: "pointer",
      ':hover': {
        backgroundColor: "#90EE90",
        color: '#000'
      }
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
      style.backgroundColor = "#FF0000";
      //style[":hover"]["backgroundColor"] = "#FFCCCB";
      style[':hover']['backgroundColor'] = {
        backgroundColor: "#FFCCCB",
        color: '#000'
      }
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
        <button style={style} onClick={this.toggleHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
