import styled from "styled-components";

export const AvatarButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const LoginStatuMenuStyled = styled.menu<{ isOpen: boolean }>`
  position: absolute;
  right: 0px;
  z-index: 5;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 150px;
  padding: 5px 0px;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadow.search_shadow};
  margin-top: 5px;
  border-radius: 2px;
  background-color: white;
  a {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    color: ${({ theme }) => theme.color.black};
    padding: 10px 10px;
    &:hover {
      text-decoration: none;
      background-color: ${({ theme }) => theme.color.mono200};
      transition: 0.4s ease-in;
    }
  }
`;

export const LoginStatusContainerStyled = styled.div``;
