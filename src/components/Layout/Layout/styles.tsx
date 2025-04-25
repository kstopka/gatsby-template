import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Test = styled.p`
  color: ${(props) => props.theme.colors.primary[10]};
`;

export const Main = styled.main`
  margin: 0 auto;
  max-width: ${(props) => props.theme.layout.maxWidth};
  padding: 0 ${(props) => props.theme.layout.paddingXMobile};
  width: 100%;
  overflow: hidden;
  flex-grow: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 ${(props) => props.theme.layout.paddingX};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    overflow: visible;
  }
`;
