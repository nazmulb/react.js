import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    // Similar to componentDidMount and componentDidUpdate
    console.log("[Cockpit.js] useEffect");

    toggleBtnRef.current.click();

    return () => {
      // Similar to componentWillUnmount
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  const assignedClasses = [];
  let btnClasses = "";

  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
