import React from "react";
import logo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Burger Builder" />
    </div>
  );
};

export default Logo;
