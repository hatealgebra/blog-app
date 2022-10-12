import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
import { MenuButtonProps } from "./MenuButton";

export const MenuButtonContainer = styled.button<MenuButtonProps>`
  display: flex;
  place-content: center;
  padding: 5px 8px;
  background: transparent;
  border: ${({ theme }) => `1.5px solid ${theme.color.mono200}`};
  border-radius: 4px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ isBlock }) => (isBlock ? "100%" : "fit-content")};
  font-weight: 300;
  color: ${({ variant, colorTheme, theme }) =>
    variant === "outline" ? colorTheme && theme.color[colorTheme] : "white"};
  border: 1px solid
    ${({ colorTheme, theme }) => colorTheme && theme.color[colorTheme]};
  border-radius: 4px;
  text-transform: capitalize;
  cursor: pointer;
  background-color: ${({ colorTheme, variant, theme }) =>
    variant === "outline"
      ? "transparent"
      : colorTheme && theme.color[colorTheme]};
  ${({ size, theme }) => {
    if (size === "lg") {
      return css`
        height: 46px;
        font-size: ${theme.typography.size.h5};
        padding: 8px 16px;
      `;
    } else if (size === "sm") {
      return css`
        height: 28px;
        font-size: ${theme.typography.size.label};
        padding: 4px 8px;
      `;
    } else {
      return css`
        height: 36px;
        font-size: ${theme.typography.size.body};
        padding: 6px 12px;
      `;
    }
  }}
`;

export default StyledButton;
