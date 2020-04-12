import React from "react";
import './Person.css'

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
