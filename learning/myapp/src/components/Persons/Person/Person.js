import React from "react";
import classes from "./Person.module.css";

const Person = (props) => {
  console.log("[Person.js] render");
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
