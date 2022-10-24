import React from "react";
import StyledTopNav, { StyledTopNavLinks } from "./topNavBar.styled";
import catLogo from "../../../images/cat-logo.svg";
import MenuButton from "../../atoms/button/MenuButton";
import MobileMenu from "../../molecules/mobileMenu/MobileMenu";
import StyledLink from "../../atoms/links/link.styled";
import { navLinks } from "../../../utils/contants";
import LoginLink from "../../atoms/links/LoginLink";

const { INDEX, ABOUT } = navLinks;

const TopNavBar = ({ variant }: TopNavBarProps) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  return (
    <StyledTopNav variant={variant} className="TopNavbar">
      <div className="TopNavbar__container">
        {variant === "mobile" ? (
          <>
            <CatLogo />
            <MenuButton onClick={() => setMenuOpen(true)} />
            <MobileMenu
              isOpen={isMenuOpen}
              setClose={() => setMenuOpen(false)}
            />
          </>
        ) : variant === "tablet" ? (
          <>
            <CatLogo />
            <div className="TopNavbar__sub-container">
              <TopNavBarLinks />
              <LoginLink />
            </div>
          </>
        ) : (
          <>
            <div className="TopNavbar__sub-container">
              <CatLogo /> <TopNavBarLinks />
            </div>
            <LoginLink />
          </>
        )}
      </div>
    </StyledTopNav>
  );
};

const CatLogo = () => <img src={catLogo} alt="cat logo" height="40px" />;
const TopNavBarLinks = () => (
  <StyledTopNavLinks>
    <StyledLink variant="classic" to={INDEX}>
      Recent Articles
    </StyledLink>
    <StyledLink variant="classic" to={ABOUT}>
      About
    </StyledLink>
  </StyledTopNavLinks>
);

export interface TopNavBarProps {
  variant: "mobile" | "tablet" | "desktop";
}

export default TopNavBar;
