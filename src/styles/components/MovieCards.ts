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
    border-radius: 4px;
    background: #ffffff;
    padding: 10px 11px;
    transition: all 0.3s ease;

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
