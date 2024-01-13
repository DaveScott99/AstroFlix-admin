import React from "react";
import RoutesApp from "./routes/RoutesApp";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme"
import { ThemeProvider } from "styled-components";

import "./index.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesApp />
      </ThemeProvider>
    </>
  );
}

export default App;
