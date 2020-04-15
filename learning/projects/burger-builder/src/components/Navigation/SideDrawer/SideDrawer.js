import React from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Template from "../../../hoc/Template";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  return (
    <Template>
      <Backdrop show />
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Template>
  );
};

export default SideDrawer;
