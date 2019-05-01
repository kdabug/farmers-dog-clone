import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import Carrot from "../assets/bowl-ingredients-2ff5c1.jpg";

export const ChangePic = props => {
  console.log(props);
  return (
    <>
      <SectionContainer>
        <Info>
          <h1>You shouldn’t be the only one eating healthy.</h1>
          <h3>
            Like you, we love our pets and care about their health. That’s why
            we created The Farmer’s Dog — a service that delivers balanced,
            freshly made pet food with simple recipes, guided by science, and
            driven by love.
          </h3>
        </Info>
        <>
          <Image height={"554px"} width={"554px"} src={Carrot} />
        </>
      </SectionContainer>
    </>
  );
};

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 554px;
  width: 100%;
  color: ${props => props.theme.grey};
  background-color: ${props => props.theme.white};
  font-weight: 800;
  margin: 40px;
  padding: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  h1 {
    margin: 20px;
    font-size: 32px;
    font-weight: 800;
    line-height: 1.3;
  }
  h3 {
    margin: 20px;
    font-size: 16px;
    font-weight: 200;
    line-height: 1.8;
  }
`;
