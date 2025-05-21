import styled from "styled-components";

const baseButtonStyles = `
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: ${(props: { theme: { transitions: { standard: string } } }) =>
    props.theme.transitions.standard};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const ToggleButton = styled.button`
  ${baseButtonStyles}
  background: none;
  border: 1px solid ${(props) => props.theme.colors.neutral[70]};
  color: ${(props) => props.theme.colors.neutral[30]};
  padding: 0.3rem 0.6rem;
  margin: 0.5rem 0;
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.fonts.size.small};

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.neutral[90]};
    border-color: ${(props) => props.theme.colors.neutral[50]};
    color: ${(props) => props.theme.colors.neutral[10]};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin: 0;
    margin-left: 0.5rem;
    width: auto;
    text-align: left;
  }
`;

export const CTAButton = styled.button`
  ${baseButtonStyles}
  background-color: ${(props) => props.theme.colors.primary[60]};
  color: ${(props) => props.theme.colors.neutral[0]};
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: ${(props) => props.theme.fonts.size.medium};

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.primary[70]};
  }

  &:active:not(:disabled) {
    background-color: ${(props) => props.theme.colors.primary[80]};
  }
`;
