import React from "react";
import Button from "../atoms/button/Button";
import { ButtonLink } from "../atoms/links/link.styled";
import { StyledMyArticlesHeading } from "./adminHeading.styled";

const AdminHeading = ({
  heading,
  to,
  buttonText,
  onClick,
}: AdminHeadingProps) => {
  return (
    <StyledMyArticlesHeading>
      <h1>{heading}</h1>
      {to && (
        <ButtonLink colorTheme="primary" to={to}>
          {buttonText}
        </ButtonLink>
      )}
      {onClick && <Button onClick={onClick}>{buttonText}</Button>}
    </StyledMyArticlesHeading>
  );
};

interface AdminHeadingProps {
  heading: string;
  buttonText: string;
  to?: string;
  onClick?: () => void;
}

export default AdminHeading;
