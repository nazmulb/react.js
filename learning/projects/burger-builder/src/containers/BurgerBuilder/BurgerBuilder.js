import React, { Component } from "react";
import Template from "../../hoc/Template";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Template>
        <Burger />
        <div>Build Controls</div>
      </Template>
    );
  }
}

export default BurgerBuilder;
