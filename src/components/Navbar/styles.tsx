import styled from "styled-components";
import { Link } from "gatsby";

export const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral[80]};
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

export const LogoLink = styled(Link)`
  font-size: ${(props) => props.theme.fonts.size.h4};
  font-weight: bold;
  color: ${(props) => props.theme.colors.neutral[10]};
  text-decoration: none;
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: 0;
  }
`;

export const HamburgerButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 10;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.neutral[10]};
    margin: 5px 0;
    transition: ${(props) => props.theme.transitions.standard};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

interface NavLinksContainerProps {
  isOpen: boolean;
}

export const NavLinksContainer = styled.div<NavLinksContainerProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem 0;
  border-top: 1px solid ${(props) => props.theme.colors.neutral[80]};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    padding: 0;
    border-top: none;
    box-shadow: none;
    width: auto;
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.neutral[10]};
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  transition: ${(props) => props.theme.transitions.standard};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral[90]};
  }

  &.active {
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary[50]};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin: 0 0.5rem;
    width: auto;
    text-align: left;
  }
`;
