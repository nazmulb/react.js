import React from "react";
import classes from "./Burger.module.css";
import Burgeringredient from "./Burgeringredient/Burgeringredient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Burgeringredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((prevVal, currentVal) => {
      return prevVal.concat(currentVal);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <Burgeringredient type="bread-top" />
      {transformedIngredients}
      <Burgeringredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
