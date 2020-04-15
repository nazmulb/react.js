import React from "react";
import PropTypes from "prop-types";
import classes from "./Burgeringredient.module.css";

const Burgeringredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;

    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;

    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;

    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

Burgeringredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Burgeringredient;
