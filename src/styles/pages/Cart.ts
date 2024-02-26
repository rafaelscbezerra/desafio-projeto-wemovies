import styled from "styled-components";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 0 76px;

  @media (max-width: 600px) {
    padding: 0 0 16px;
  }

  .cart--content {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    background: ${({ theme }) => theme.colors.white};
    padding: 24px;

    @media (max-width: 700px) {
      padding: 16px;
    }

    &--header {
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

      &__text {
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
      }
    }

    &--totals {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 700px) {
        flex-direction: column-reverse;
        align-items: flex-end;
        gap: 16px;
      }

      &__texts {
        display: flex;
        align-items: center;
        gap: 32px;

        @media (max-width: 700px) {
          padding-right: 16px;
        }

        &__title {
          color: ${({ theme }) => theme.colors.secondary};
          font-size: ${({ theme }) => theme.fontSizes.small};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          line-height: ${({ theme }) => theme.lineHeight.small};
          text-transform: uppercase;
        }

        &__value {
          color: ${({ theme }) => theme.colors.background};
          font-size: ${({ theme }) => theme.fontSizes.extralarge};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          line-height: ${({ theme }) => theme.lineHeight.extralarge};
        }
      }

      button {
        max-width: 235px;
      }
    }
  }

  .movie--list {
    &--item {
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
        display: flex;
        flex-direction: column;
        gap: 8px;

        &__mobile {
          display: flex;
          align-items: baseline;
          gap: 20px;
        }

        @media (max-width: 700px) {
          flex-direction: row;
          justify-content: space-between;
          gap: 16px;
        }

        &__title {
          color: ${({ theme }) => theme.colors.background};
          font-size: ${({ theme }) => theme.fontSizes.small};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          line-height: ${({ theme }) => theme.lineHeight.small};
        }

        &__value {
          display: block;
          color: ${({ theme }) => theme.colors.background};
          font-size: ${({ theme }) => theme.fontSizes.medium};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          line-height: ${({ theme }) => theme.lineHeight.medium};
        }
      }

      &__quantity {
        display: flex;
        align-items: flex-end;
        gap: 11px;

        &__options {
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

        &__counter {
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
        }
      }

      &__subtotal {
        color: ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: ${({ theme }) => theme.lineHeight.medium};

        &__mobile {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
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
    }
  }
`;
