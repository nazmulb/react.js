import React, { Component } from "react";
import Template from "../../hoc/Template";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };

  render() {
    return (
      <Template>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Template>
    );
  }
}

export default BurgerBuilder;
