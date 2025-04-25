import React from "react";
import { useLocation } from "@reach/router";
import * as S from "./styles";

import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { AppCtx, useContextState } from "../../contexted";
import { IAppState } from "../../contexted/App/types";
import { GlobalStyles } from "../../../styles/global";
import Navbar from "../../Navbar";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }): JSX.Element => {
  const location = useLocation();
  const { theme: themeValue } = useContextState<IAppState>(AppCtx, ["theme"]);

  return (
    <ThemeProvider theme={theme[themeValue]}>
      <GlobalStyles />
      <S.Layout>
        <Navbar />
        <S.Main>{children}</S.Main>
        <div className="footer">
          <p>Foooter</p>
        </div>
      </S.Layout>
    </ThemeProvider>
  );
};

export default Layout;
