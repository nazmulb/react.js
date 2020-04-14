import React from "react";

const WithClass = (props) => (
  <div className={props.className}>{props.children}</div>
);

export default WithClass;
