import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Nazmul", age: 39 },
      { name: "Nabil", age: 10 },
      { name: "Nahiyan", age: 9 },
    ],
  });

  const [otherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
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
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
