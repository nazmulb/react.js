import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 1rem auto;
  padding: 1rem;
  border: 0.1rem solid #eee;
  box-shadow: 0 0.2rem 0.3rem #ccc;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} />
    </StyledDiv>
  );
};

export default Person;
