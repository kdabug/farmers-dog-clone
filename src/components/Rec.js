import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import { Cards } from "./Quotes";
import Bag from "../assets/package-turkey-27a9e3.png";
import Couch from "../assets/dog-sitting-3ef6b6.jpg";
import { tsConstructorType } from "@babel/types";
import { dogInfo, vetInfo } from "../assets/testimonials";

export const Rec = props => {
  return (
    <>
      <SectionContainer>
        <div className="pop">
          <h1>See Your Dog’s Recommended Plan</h1>
          <h3>
            Get fresh food conveniently delivered with our personalized meal
            plans
          </h3>
          <Button width={"147px"} scrolled={true}>
            <p>Get Started</p>
          </Button>
        </div>
      </SectionContainer>
    </>
  );
};

export const SectionContainer = styled.section`
  background-image: url(${Couch});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
  color: ${props => props.theme.grey};
  background-color: ${props => props.theme.lightgrey};
  padding: 80px 0;
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
  .pop {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 1;
    height: 298px;
    width: 450px;
    padding: 0 40px;
  }
`;
