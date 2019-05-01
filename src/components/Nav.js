import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import Present from "../assets/present-fill-white-712ea7.png";

export const Nav = props => {
  console.log(props);
  return (
    <>
      <NavContainer>
        {" "}
        <span>
          <Image height={"40px"} width={"40px"} src={Present} />
          You've been gifed 20% off your first purchase
        </span>{" "}
        <NavItems>
          <h3>FAQ</h3>
          <h3>LOG IN</h3>
          <Button width={"147px"} scrolled={true}>
            <p>USE YOUR DISCOUNT NOW</p>
          </Button>
        </NavItems>
      </NavContainer>
    </>
  );
};

export const NavContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 64px;
  width: 100%;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.salmon};
  font-weight: 800;
  margin: 0;
  padding: 0;

  span {
    display: flex;
    align-items: center;
  }
`;

export const NavItems = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 20px;
  }
`;
