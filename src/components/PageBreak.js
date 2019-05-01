import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Image } from "./Image";
import Present from "../assets/present-fill-white-712ea7.png";

// export const PageBreak = props => {
//   console.log(props);
//   return (
//     <>
//       <BreakContainer />
//     </>
//   );
// };

export const PageBreak = styled.section`
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.salmon};
  height: 95px;
  width: 100vw;
`;
