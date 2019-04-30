import React from "react";
import ReactDOM from "react-dom";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { App } from "./components/App";

console.log(theme);
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
