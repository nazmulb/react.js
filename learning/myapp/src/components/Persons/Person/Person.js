import React from "react";
import PropTypes from "prop-types";

import classes from "./Person.module.css";
import Template from "../../../hoc/Template";
import withClass from "../../../hoc/withClass";

const Person = (props) => {
  console.log("[Person.js] render");
  return (
    <Template>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p> {props.children} </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </Template>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
  children: PropTypes.string
};

Person.defaultProps = {
  children: "",
};

export default withClass(Person, classes.Person);
