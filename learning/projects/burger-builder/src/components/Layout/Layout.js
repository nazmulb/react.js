import React from "react";
import Template from "../../hoc/Template";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Template>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Template>
);

export default Layout;
