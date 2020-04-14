import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
  console.log("[Persons.js] render");
  return props.persons.map((person, index) => (
    <Person
      click={props.clicked(index)}
      changed={props.changed(person.id)}
      name={person.name}
      age={person.age}
      key={person.id}
    />
  ));
};

export default React.memo(Persons);
