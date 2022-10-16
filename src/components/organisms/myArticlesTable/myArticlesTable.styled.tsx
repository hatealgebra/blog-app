import styled from "styled-components";

export const StyledArticlesTable = styled.table`
  table-layout: fixed;
  border-spacing: 0px 10px;
  border-collapse: collapse;
  padding: 0;
  margin: 0;

  ${({ theme }) => theme.breakpoint.tablet} {
    border-spacing: 5px 10px;
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    border-spacing: 10px 5px;
  }
`;

export const MyArticlesForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const MyArticlesTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
