import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  .company--name {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.large};
    transition: ${({ theme }) => theme.transition.default};

    &:hover {
      color: ${({ theme }) => theme.colors.button};
    }
  }

  .cart--infos {
    display: flex;
    align-items: center;
    gap: 8px;
    transition: ${({ theme }) => theme.transition.default};

    &:hover {
      .cart--infos {
        &__texts {
          &__description {
            color: ${({ theme }) => theme.colors.white};
          }
        }

        &__icon path {
          fill: ${({ theme }) => theme.colors.button};
        }
      }
    }

    &__texts {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      &__title {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.small};
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
        line-height: ${({ theme }) => theme.lineHeight.small};
      }

      &__description {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: ${({ theme }) => theme.fontSizes.extrasmall};
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
        line-height: ${({ theme }) => theme.lineHeight.extrasmall};
        transition: ${({ theme }) => theme.transition.default};
      }
    }

    &__icon path {
      fill: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transition.default};
    }
  }
`;
