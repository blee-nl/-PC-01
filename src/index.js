import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { ProductComparisonPage } from "~/pages";
import { theme, GlobalStyle } from "./Style";
import ReactFontLoader from "react-font-loader";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" />
      <GlobalStyle />
      <ProductComparisonPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
