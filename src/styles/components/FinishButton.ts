import styled from "styled-components";

export const StyledFinishButton = styled.button`
  max-width: 235px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 11px;
  transition: ${({ theme }) => theme.transition.default};

  @media (max-width: 700px) {
    max-width: unset;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;
