import styled from "styled-components";

export const StyledMovieCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 28px 0 76px;

  .movie--list--item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    background: ${({ theme }) => theme.colors.white};
    padding: 10px 11px;
    transition: ${({ theme }) => theme.transition.default};

    &:hover {
      transform: scale(1.02);
      filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.6));
    }

    &__image {
      width: 147px;
      height: 188px;
    }

    &__texts {
      padding-bottom: 8px;

      &__title {
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSizes.extrasmall};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: ${({ theme }) => theme.lineHeight.extrasmall};
        text-align: center;
      }

      &__value {
        display: block;
        color: ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: ${({ theme }) => theme.lineHeight.medium};
        text-align: center;
      }
    }
  }
`;
