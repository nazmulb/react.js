import React from "react";
import classes from "./Modal.module.css";
import Template from "../../../hoc/Template";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Modal = (props) => {
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

export default Modal;
