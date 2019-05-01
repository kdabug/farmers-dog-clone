import React from "react";
import styled from "styled-components";

export const Button = styled.div`
  height: 44px;
  width: ${({ scrolled }) => (scrolled ? "147px" : "244px")};
  color: ${({ theme, scrolled }) => (scrolled ? theme.grey : theme.white)};
  background-color: ${({ theme, scrolled }) =>
    scrolled ? theme.white : theme.salmon};
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 800;
  margin: 0;
  padding: 0;
`;
