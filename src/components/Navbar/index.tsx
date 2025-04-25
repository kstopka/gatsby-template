import React, { useState } from "react";
import * as S from "./styles";
import URL_PATHS from "../../constants/routes";
import {
  AppCtx,
  useActions,
  useContextState,
  IAppState,
  IAppActions,
} from "../contexted";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme: themeValue, language } = useContextState<IAppState>(AppCtx, [
    "theme",
    "language",
  ]);
  const { toggleTheme, toggleLanguage } = useActions<IAppActions>(AppCtx, [
    "toggleTheme",
    "toggleLanguage",
  ]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <S.Nav>
      <S.LogoLink to="/">MyApp</S.LogoLink>
      <S.HamburgerButton onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </S.HamburgerButton>

      <S.NavLinksContainer isOpen={isMobileMenuOpen}>
        {URL_PATHS.map((link) => (
          <S.NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            activeClassName="active"
          >
            {link.name}
          </S.NavLink>
        ))}
        <S.ToggleButton onClick={toggleTheme}>{themeValue}</S.ToggleButton>
        <S.ToggleButton onClick={toggleLanguage}>{language}</S.ToggleButton>
      </S.NavLinksContainer>
    </S.Nav>
  );
};

export default Navbar;
