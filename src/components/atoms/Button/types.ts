export type ButtonVariant = "cta" | "menuToggle";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};
