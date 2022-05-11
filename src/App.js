import React from "react";
import "styled-components/macro";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import styled from "styled-components";
import Router from "./Router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const WindowContainer = styled.div`
  display: flex;
  flex: 1;

  max-width: 60em;
  margin: 3rem auto;

  /* Portrait */
  height: calc(100vh - 6rem);
  /* simple tweaks for Portrait */
  @media screen and (max-width: 40em) {
    margin: 0;
    height: calc(100vh);
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WindowContainer>
        <Container>
          <Router />
        </Container>
      </WindowContainer>
    </ThemeProvider>
  );
}

export default App;
