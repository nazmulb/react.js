import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import Template from "../../../hoc/Template";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Modal = (props) => {
  useEffect(() => {
    console.log("[Modal.js] useEffect");
  }, [props.show]);

  return (
    <Template>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Template>
  );
};

export default React.memo(Modal);
