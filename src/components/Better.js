import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import DogBox from "../assets/dogonpackage-6b95c7.png";

export const Better = props => {
  console.log(props);
  return (
    <>
      <SectionContainer>
        <Info>
          <h1>
            Better for them. <br />
            Easier for you.
          </h1>
          <h3>
            Our vet-developed plans guide you to the best diet, while perfectly
            timed deliveries make sure you never run out. No need for middlemen
            or retail markups; we deliver the healthiest, freshest food — all at
            a reasonable price. <br /> <br />
            Smaller dogs start at less than $3/day.
          </h3>
        </Info>
        <>
          <Image height={"654px"} width={"480px"} src={DogBox} />
        </>
      </SectionContainer>
    </>
  );
};

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  color: ${props => props.theme.grey};
  background-color: ${props => props.theme.white};
  font-weight: 800;
  padding-bottom: 60px;
  img {
    align-self: flex-end;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  align-items: left;
  padding: 0 30px;
  margin-top: 40px;
  h1 {
    font-size: 40px;
    font-weight: 800;
    line-height: 1.3;
    margin: 20px 0;
  }
  h3 {
    font-size: 18px;
    font-weight: 200;
    line-height: 1.8;
  }
`;
