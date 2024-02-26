import styled from "styled-components";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 0 76px;

  @media (max-width: 600px) {
    padding: 0 0 16px;
  }

  .movie--list--item {
    &__mobile {
      display: none;

      @media (max-width: 700px) {
        width: 100%;
        height: 82px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    &__desktop {
      @media (max-width: 700px) {
        display: none;
      }
    }

    &__wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 52px;

      @media (max-width: 700px) {
        width: 100%;
        flex: unset;
        gap: 16px;
      }

      &.mobile {
        display: none;

        @media (max-width: 700px) {
          display: flex;
          justify-content: space-between;
        }
      }

      &.desktop {
        @media (max-width: 700px) {
          display: none;
        }
      }
    }

    &__image {
      width: 89px;
      height: 114px;

      @media (max-width: 700px) {
        width: 64px;
        height: 82px;
      }
    }

    &__texts {
      &__mobile {
        display: flex;
        align-items: baseline;
        gap: 20px;
      }
    }

    &__quantity__options {
      &:hover {
        .movie--list--item__quantity__options__minus path {
          fill: darkred;
        }

        .movie--list--item__quantity__options__plus path {
          fill: ${({ theme }) => theme.colors.buttonHover};
        }
      }

      &__minus path,
      &__plus path {
        fill: ${({ theme }) => theme.colors.button};
        transition: ${({ theme }) => theme.transition.default};
      }
    }

    &__remove {
      &:hover {
        svg path {
          fill: darkred;
        }
      }

      svg path {
        fill: ${({ theme }) => theme.colors.button};
        transition: ${({ theme }) => theme.transition.default};
      }

      &.mobile {
        display: none;

        @media (max-width: 700px) {
          display: flex;
        }
      }

      &.desktop {
        @media (max-width: 700px) {
          display: none;
        }
      }
    }

    &__subtotal__mobile {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export const StyledMovieListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 52px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: 21px;
  margin-bottom: 21px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const StyledMovieListItemTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
  }
`;

export const StyledMovieListItemTextsTitle = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;

export const StyledMovieListItemTextsValue = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

export const StyledMovieListItemQuantity = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11px;
`;

export const StyledMovieListItemQuantityCounter = styled.span`
  width: 62px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

export const StyledCartContent = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background: ${({ theme }) => theme.colors.white};
  padding: 24px;

  @media (max-width: 700px) {
    padding: 16px;
  }
`;

export const StyledCartContentHeader = styled.div`
  max-width: 674px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 134px;
  padding-bottom: 21px;

  @media (max-width: 962px) {
    display: none;
  }
`;

export const StyledCartContentHeaderText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSizes.extrasmall};
    line-height: ${({ theme }) => theme.lineHeight.extrasmall};
  }

  &:first-of-type {
    flex: 1;
  }
`;

export const StyledCartContentTotals = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 16px;
  }

  button {
    max-width: 235px;
  }
`;

export const StyledCartContentTotalsTexts = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 700px) {
    padding-right: 16px;
  }
`;

export const StyledCartContentTotalsTextsTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-transform: uppercase;
`;

export const StyledCartContentTotalsTextsValue = styled.span`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.extralarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.extralarge};
`;
