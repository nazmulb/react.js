import React from "react";
import Template from "../../hoc/Template";
import classes from "./Layout.module.css";

const Layout = (props) => (
  <Template>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Template>
);

export default Layout;
