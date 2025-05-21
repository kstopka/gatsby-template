import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  variant = "cta",
  type = "button",
  disabled = false,
}) => {
  const ButtonComponent =
    variant === "menuToggle" ? S.ToggleButton : S.CTAButton;

  return (
    <ButtonComponent
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
    >
      {label}
    </ButtonComponent>
  );
};

export default Button;
