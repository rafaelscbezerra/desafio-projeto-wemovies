import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  .company--name {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    transition: all 0.3s ease;

    &:hover {
      color: #009edd;
    }
  }

  .cart--infos {
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;

    &:hover {
      .cart--infos {
        &__texts {
          &__description {
            color: #fff;
          }
        }

        &__icon path {
          fill: #009edd;
        }
      }
    }

    &__texts {
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
        transition: all 0.3s ease;
      }
    }

    &__icon path {
      fill: #fff;
      transition: all 0.3s ease;
    }
  }
`;
