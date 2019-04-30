import React from "react";
import styled from "styled-components";

export const Container = styled.section`
  color: ${props => props.theme.salmon};
`;

export const App = props => {
  console.log(props);
  return <Container>hello world</Container>;
};
