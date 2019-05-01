import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import Bag from "../assets/package-turkey-27a9e3.png";
import Marble from "../assets/marble-bg-3a6763.jpg";

export const Rethink = props => {
  console.log(props);
  return (
    <>
      <SectionContainer>
        <h1>Rethinking Pet Food</h1>
        <div>
          <>
            <Image height={"506px"} width={"382px"} src={Bag} />
          </>
          <Info>
            <div>
              <h1>Tested on humans.</h1>
              <h3>
                Tested on humans Human-grade USDA ingredients means less
                processing, natural nutrients, and higher safety standards.
                Things we believe every pet deserves.
              </h3>
            </div>
            <div>
              <h1>Personalized, Ready-to-serve</h1>
              <h3>
                A plan is customized to your dog’s individual profile. Easy
                ready-to-serve meals are pre-made and pre-portioned. Just open
                and pour.
              </h3>
            </div>
            <div>
              <h1>Made fresh and delivered</h1>
              <h3>
                Your food is delivered to you within days of cooking. Never deep
                frozen. Never stored on a shelf for months.
              </h3>
            </div>
          </Info>
        </div>
      </SectionContainer>
    </>
  );
};

export const SectionContainer = styled.section`
  background-image: url(${Marble});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.grey};
  font-weight: 800;
  padding: 80px 0;
  div {
    display: flex;
  }
  h1 {
    font-size: 38px;
    font-weight: 800;
    padding-bottom: 30px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  div {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 24px;
    font-weight: 800;
    line-height: 1.3;
    padding-bottom: 0;
  }
  h3 {
    font-size: 16px;
    font-weight: 200;
    line-height: 1.8;
    margin: 20px 0;
  }
`;
