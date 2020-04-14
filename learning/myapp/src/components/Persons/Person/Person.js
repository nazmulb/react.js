import React from "react";

import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

const Person = (props) => {
  console.log("[Person.js] render");
  return (
    <Aux>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p> {props.children} </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </Aux>
  );
};

export default withClass(Person, classes.Person);
