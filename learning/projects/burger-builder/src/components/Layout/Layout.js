import React from "react";
import Template from "../../hoc/Template";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => (
  <Template>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Template>
);

export default Layout;
