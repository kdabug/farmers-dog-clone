import React from "react";
import styled from "styled-components";
import { Nav, NavItems } from "./Nav";
import { Button } from "./Button";
//import HeroText from "./HeroText";

export const Container = styled.section`
  color: ${props => props.theme.salmon};
  font-family: ${props => props.theme.primaryFont};
  margin: 0;
  padding: 0;
`;

export const App = props => {
  console.log(props);
  return (
    <Container>
      <Nav>
        {" "}
        <span>You've been gifed 20% off your first purchase</span>{" "}
        <NavItems>
          <h3>FAQ</h3>
          <h3>LOG IN</h3>
          <Button width={"147px"} scrolled={true}>
            discount button
          </Button>
        </NavItems>
      </Nav>
    </Container>
  );
};
