import React from "react";

const Char = (props) => {
  const style = {
    display: "inline-block",
    padding: "1rem",
    margin: "1rem",
    border: "0.1rem solid #000",
    textAlign: "center",
  };

  return <div style={style} onClick={props.click}>{props.letter}</div>;
};

export default Char;
