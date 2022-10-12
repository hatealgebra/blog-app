import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { BREAKPOINTS } from "../../utils/contants";
import TopNavBar from "../organisms/topNavBar/TopNavBar";
import { StyledPageTemplate } from "./templates.styled";

const PageTemplate = ({ children }: PageTemplateProps) => {
  const { width } = useWindowSize();
  const { MOBILE, LAPTOP } = BREAKPOINTS;

  return (
    <StyledPageTemplate>
      <TopNavBar
        variant={
          width >= LAPTOP ? "desktop" : width >= MOBILE ? "tablet" : "mobile"
        }
      />
      <div style={{ marginTop: "50px", height: "100%", width: "100%" }}>
        {children}
      </div>
    </StyledPageTemplate>
  );
};

interface PageTemplateProps {
  children: React.ReactNode;
}

export default PageTemplate;
