import React from "react";
import StyledButton from "./button.styled";

const Button = ({
  variant = "standard",
  size = "md",
  colorTheme = "primary",
  children,
  isBlock,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      size={size}
      colorTheme={colorTheme}
      isBlock={isBlock}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export interface ButtonProps {
  colorTheme?: "primary" | "secondary";
  variant?: "standard" | "outline" | "block";
  onClick?: (e?: React.MouseEvent<HTMLElement> | MouseEvent) => void;
  children: any;
  size?: "sm" | "md" | "lg";
  isBlock?: boolean;
  type?: "submit" | "button";
}

export default Button;
