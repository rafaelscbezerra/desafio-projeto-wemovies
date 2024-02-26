import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 11px;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }

  .mini-cart--infos {
    display: flex;
    align-items: center;
    gap: 3px;

    &__counter {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.extrasmall};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      line-height: ${({ theme }) => theme.lineHeight.extrasmall};
    }
  }

  .label--button {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.extrasmall};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.extrasmall};
    text-transform: uppercase;
  }
`;
