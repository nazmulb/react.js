import React from "react";

const Person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p> {props.children} </p>
    </div>
  );
};

export default Person;
