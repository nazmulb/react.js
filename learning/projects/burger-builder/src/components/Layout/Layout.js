import React from "react";
import Template from "../../hoc/Template";

const Layout = (props) => (
  <Template>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Template>
);

export default Layout;
