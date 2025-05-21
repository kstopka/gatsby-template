import React, { useState } from "react";
import * as S from "./styles";
import { URL_PATHS_Arr, URL_PATHS } from "../../constants";
import {
  AppCtx,
  useActions,
  useContextState,
  IAppState,
  IAppActions,
} from "../contexted";
import { translateTheme } from "./translate";
import Button from "../atoms/Button";

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
      <S.LogoLink to={URL_PATHS.home.path}>MyApp</S.LogoLink>
      <S.HamburgerButton onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </S.HamburgerButton>

      <S.NavLinksContainer isOpen={isMobileMenuOpen}>
        {URL_PATHS_Arr.map((link) => (
          <S.NavLink
            key={link[language]}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            activeClassName="active"
          >
            {link[language]}
          </S.NavLink>
        ))}
        <Button
          onClick={toggleTheme}
          label={translateTheme[themeValue][language]}
          variant="menuToggle"
        />
        <Button
          onClick={toggleLanguage}
          label={language}
          variant="menuToggle"
        />
      </S.NavLinksContainer>
    </S.Nav>
  );
};

export default Navbar;
