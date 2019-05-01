import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import Logo from "../assets/tfd-round-light-filled-e85e84.png";
import Background from "../assets/background-home-3bac0d.jpg";

export const Hero = props => {
  console.log(props);
  return (
    <>
      <HeroContainer>
        {" "}
        <Image height={"140px"} width={"140px"} src={Logo} />
        <HeroText>
          <h1>
            A smarter, <br />
            healthier pet food.
          </h1>
          <>
            <h2>Real food • Made fresh • Delivered</h2>
          </>
        </HeroText>
        <h3>
          Learn More
          <br />
          <i />
        </h3>
      </HeroContainer>
    </>
  );
};

export const HeroContainer = styled.section`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  height: 92vh;
  width: 100vw;
  color: ${props => props.theme.white};
  margin: 0;
  padding: 0;
  z-index: -1;
  img {
    margin-top: -30px;
  }
  h3 {
    position: absolute;
    text-align: center;
    bottom: 10px;
    i {
      border: solid white;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
    }
    &:hover {
      cursor: pointer;
      i {
        margin-top: 2px;
        border: solid white;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(45deg) translate(5px, 5px);
        transition: transform ease-in-out 0.4s;
      }
    }
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  line-height: 1.1;
  h1 {
    font-size: 54px;
    font-weight: 1600;
    margin: 100px auto 30px;
  }
  h2 {
    font-size: 28px;
    font-weight: 600;
    margin: 20px;
  }
`;
