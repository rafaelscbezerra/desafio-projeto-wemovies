import styled from "styled-components";

export const StyledBuyConditions = styled.div`
  padding: 28px 0 76px;

  .buy--conditions--content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 64px;

    &__title {
      color: ${({ theme }) => theme.colors.background};
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      line-height: ${({ theme }) => theme.lineHeight.large};
    }

    .success--buy--image {
      width: 295px;
      height: 307px;
      animation: moveImage 4s linear infinite;
    }

    .empty--cart--image {
      width: 447px;
      height: 266px;
      animation: moveImage 4s linear infinite;
    }

    .back--button {
      max-width: 180px;
      width: 100%;
    }
  }

  @keyframes moveImage {
    0% {
      transform: translateY(-5px);
    }
    25% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(5px);
    }
    75% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;
