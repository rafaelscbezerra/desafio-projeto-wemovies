import styled from "styled-components";

export const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 55px;
  padding: 3px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  mask: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  mask-composite: subtract;
  animation: spinner 1s infinite linear;

  @keyframes spinner {
    to {
      transform: rotate(1turn);
    }
  }
`;
