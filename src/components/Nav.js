import React from "react";
import styled from "styled-components";

export const Nav = styled.section`
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.salmon};
  font-weight: 800;
  margin: 0;
  padding: 0;
`;

export const NavItems = styled.div`
  display: flex;
`;
