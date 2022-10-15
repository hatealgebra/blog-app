import React from "react";
import { ButtonLink } from "../atoms/links/link.styled";
import { StyledMyArticlesHeading } from "./adminHeading.styled";

const AdminHeading = ({ heading, to, buttonText }: AdminHeadingProps) => {
  return (
    <StyledMyArticlesHeading>
      <h1>{heading}</h1>
      <ButtonLink colorTheme="primary" to={to}>
        {buttonText}
      </ButtonLink>
    </StyledMyArticlesHeading>
  );
};

interface AdminHeadingProps {
  heading: string;
  buttonText: string;
  to: string;
}

export default AdminHeading;
