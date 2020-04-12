import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const App = (props) => {
  const [state, setState] = useState({
    persons: [
      { name: "Nazmul", age: 39 },
      { name: "Nabil", age: 10 },
      { name: "Nahiyan", age: 9 },
    ],
    otherState: "some other value",
  });

  const switchNameHandler = () => {
    setState({
      persons: [
        { name: "Nazmul Basher", age: 39 },
        { name: "Nabil", age: 10.5 },
        { name: "Nahiyan", age: 9.5 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>I am a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={state.persons[0].name}
        age={state.persons[0].age}
      />
      <Person name={state.persons[1].name} age={state.persons[1].age}>
        My Hobbies: Racing
      </Person>
      <Person
        name={state.persons[2].name}
        age={state.persons[2].age}
      />
    </div>
  );
};

export default App;
