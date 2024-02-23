import styled from "styled-components";

export const StyledSuccessBuyPage = styled.div`
  padding: 28px 0 76px;

  .success--buy--content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    background: #ffffff;
    border-radius: 4px;
    padding: 64px;

    &__title {
      color: #2f2e41;
      font-size: 20px;
      font-weight: 700;
      line-height: 27px;
    }

    &__image {
      width: 295px;
      height: 307px;
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
