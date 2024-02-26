import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

export const StyledCompanyName = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.large};
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    color: ${({ theme }) => theme.colors.button};
  }
`;

export const StyledCartInfos = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: ${({ theme }) => theme.transition.default};

  .cart--infos__icon path {
    fill: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transition.default};
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.white};
    }

    .cart--infos__icon path {
      fill: ${({ theme }) => theme.colors.button};
    }
  }
`;

export const StyledCartInfosTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledCartInfosTextsTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.lineHeight.small};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledCartInfosTextsDescription = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.extrasmall};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.lineHeight.extrasmall};
  transition: ${({ theme }) => theme.transition.default};
`;
