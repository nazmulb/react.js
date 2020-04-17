import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={{ pathname: props.link }}
        exact
        activeClassName={classes.Active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
