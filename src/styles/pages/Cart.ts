import styled from "styled-components";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 0 76px;

  .cart--content {
    border-radius: 4px;
    background: #ffffff;
    padding: 24px;

    &--header {
      max-width: 674px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 134px;
      padding-bottom: 21px;

      &__text {
        color: #999999;
        font-size: 14px;
        font-weight: 700;
        line-height: 19px;
        text-transform: uppercase;

        &:first-of-type {
          flex: 1;
        }
      }
    }

    &--totals {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__texts {
        display: flex;
        align-items: center;
        gap: 32px;

        &__title {
          color: #999999;
          font-size: 14px;
          font-weight: 700;
          line-height: 19px;
          text-transform: uppercase;
        }

        &__value {
          color: #2f2e41;
          font-size: 24px;
          font-weight: 700;
          line-height: 33px;
        }
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
      border-bottom: 1px solid #999999;
      padding-bottom: 21px;
      margin-bottom: 21px;

      &__wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 52px;
      }

      &__image {
        width: 89px;
        height: 114px;
      }

      &__texts {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &__title {
          color: #2f2e41;
          font-size: 14px;
          font-weight: 700;
          line-height: 19px;
        }

        &__value {
          display: block;
          color: #2f2e41;
          font-size: 16px;
          font-weight: 700;
          line-height: 22px;
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
              fill: #039b00;
            }
          }

          &__minus path,
          &__plus path {
            fill: #009edd;
            transition: all 0.3s ease;
          }
        }

        &__counter {
          width: 62px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2f2e41;
          font-size: 14px;
          font-weight: 400;
          line-height: 19px;
          text-align: center;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
        }
      }

      &__subtotal {
        color: #2f2e41;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
      }

      &__remove {
        &:hover {
          svg path {
            fill: darkred;
          }
        }

        svg path {
          fill: #009edd;
          transition: all 0.3s ease;
        }
      }
    }
  }
`;
