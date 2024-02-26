import styled from "styled-components";

export const StyledMovieCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 28px 0 76px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 0;
  }
`;

export const StyledMovieListItem = styled.li`
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
    filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.5));
  }

  .movie--list--item {
    &__texts {
      padding-bottom: 8px;
    }

    &__image {
      width: 147px;
      height: 188px;
    }
  }
`;

export const StyledMovieListItemTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.extrasmall};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.extrasmall};
  text-align: center;
`;

export const StyledMovieListItemValue = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  text-align: center;
`;
