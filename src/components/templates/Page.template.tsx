import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { BREAKPOINTS } from "../../utils/contants";
import TopNavBar from "../organisms/topNavBar/TopNavBar";
import { NonFormPageContainer, StyledPageTemplate } from "./templates.styled";

const PageTemplate = ({ children, isArticle }: PageTemplateProps) => {
  const { width } = useWindowSize();
  const { MOBILE, LAPTOP } = BREAKPOINTS;

  return (
    <StyledPageTemplate>
      <TopNavBar
        variant={
          width >= LAPTOP ? "desktop" : width >= MOBILE ? "tablet" : "mobile"
        }
      />
      <NonFormPageContainer isArticle={isArticle}>
        {children}
      </NonFormPageContainer>
    </StyledPageTemplate>
  );
};

interface PageTemplateProps {
  children: React.ReactNode;
  isArticle?: boolean;
}

export default PageTemplate;
