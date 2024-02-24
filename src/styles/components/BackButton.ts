import styled from "styled-components";

export const StyledBackButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 11px;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;
