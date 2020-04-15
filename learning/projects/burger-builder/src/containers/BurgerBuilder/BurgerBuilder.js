import React, { Component } from "react";
import Template from "../../hoc/Template";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Template>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Template>
    );
  }
}

export default BurgerBuilder;
