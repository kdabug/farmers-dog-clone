import React from "react";
import styled from "styled-components";

export const Button = styled.div`
  height: 44px;
  width: ${({ scrolled }) => (scrolled ? "244px" : "147px")};
  color: ${({ theme, scrolled }) => (scrolled ? theme.grey : theme.white)};
  background-color: ${({ theme, scrolled }) =>
    scrolled ? theme.white : theme.salmon};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  margin: 10px 50px 10px 20px;
  padding: 0;
  border-radius: 5px;
`;
