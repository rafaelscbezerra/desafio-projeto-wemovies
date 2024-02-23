import styled from "styled-components";

export const StyledButtonPrimary = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #009edd;
  border-radius: 4px;
  padding: 11px;
  transition: all 0.3s ease;

  &:hover {
    background: #039b00;
  }

  .mini-cart--infos {
    display: flex;
    align-items: center;
    gap: 3px;

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
