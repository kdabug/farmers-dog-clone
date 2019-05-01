import React from "react";
import styled from "styled-components";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Button } from "./Button";
import { Image } from "./Image";
import { GlobalStyle } from "../theme/globalStyles";
import { PageBreak } from "./PageBreak";
import { ChangePic } from "./ChangePic";
import { Rethink } from "./Rethink";
import { Better } from "./Better";
import { Quotes } from "./Quotes";
import { Cards } from "./Cards";

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
    <>
      <GlobalStyle />
      <Container>
        <Nav />
        <Hero />
        <PageBreak />
        <ChangePic />
        <Rethink />
        <Better />
        <Cards />
        <Quotes />
      </Container>
    </>
  );
};
