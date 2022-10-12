import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../components/particles/Theme";
import GlobalStyle from "../components/particles/GlobalStyle";

export const setupTest = (component: React.ReactElement | React.ReactNode) => {
  return render(
    <ThemeProvider theme={Theme}>
      <GlobalStyle /> {component}
    </ThemeProvider>
  );
};
