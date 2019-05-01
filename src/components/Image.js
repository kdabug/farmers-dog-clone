import React from "react";
import styled from "styled-components";

export const Image = styled.img`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${props => props.height};
  width: ${props => props.width};
  margin-right: 10px;
  padding: 0;
`;
