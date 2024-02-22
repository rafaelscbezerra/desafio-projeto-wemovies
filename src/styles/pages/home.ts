import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
`;

export const StyledButtonPrimary = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #009edd;
  border-radius: 4px;
  padding: 11px;

  .mini-cart--infos {
    display: flex;
    align-items: center;
    gap: 3px;

    &__icon {
      width: 14px;
      height: 14px;
    }

    &__counter {
      color: #ffffff;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }
  }

  .label-button {
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;
  }
`;

export const StyledMovieCardsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 28px 0 76px;

  .movie--list--item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    border-radius: 4px;
    background: #ffffff;
    padding: 10px 11px;

    &__image {
      width: 147px;
      height: 188px;
    }

    &__texts {
      padding-bottom: 8px;

      &__title {
        color: #333333;
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        text-align: center;
      }

      &__value {
        display: block;
        color: #2f2e41;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        text-align: center;
      }
    }
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  .company-name {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
  }

  .cart--infos {
    display: flex;
    align-items: center;
    gap: 8px;

    &--text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      &__title {
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
      }

      &__description {
        color: #999999;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
      }
    }
  }
`;
