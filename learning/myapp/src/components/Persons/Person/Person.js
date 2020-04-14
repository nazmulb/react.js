import React from "react";

import classes from "./Person.module.css";
import WithClass from "../../../hoc/WithClass";

const Person = (props) => {
  console.log("[Person.js] render");
  return (
    <WithClass classes={classes.Person}>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p> {props.children} </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </WithClass>
  );
};

export default Person;
