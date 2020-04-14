import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
  }, []);

  const assignedClasses = [];
  let btnClasses = "";

  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
