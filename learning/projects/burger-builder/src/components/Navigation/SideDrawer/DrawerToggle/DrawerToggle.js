import React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  return <div className={classes.DrawerToggle} onClick={props.clicked}>MENU</div>;
};

export default DrawerToggle;
