import React from "react";
import { useLocation } from "@reach/router";
import * as S from "./styles";

import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { AppCtx, useActions, useContextState } from "../../contexted";
import { IAppState, IAppActions } from "../../contexted/App/types";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }): JSX.Element => {
  const location = useLocation();
  const { theme: themeValue } = useContextState<IAppState>(AppCtx, ["theme"]);
  const { toggleTheme } = useActions<IAppActions>(AppCtx, ["toggleTheme"]);

  return (
    <ThemeProvider theme={theme[themeValue]}>
      <button onClick={toggleTheme}>{themeValue}</button>
      <S.Test>test</S.Test>
      <S.Layout>
        <S.Main>{children}</S.Main>
      </S.Layout>
    </ThemeProvider>
  );
};

export default Layout;
