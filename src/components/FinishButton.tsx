import React from "react";

//Styles
import { StyledPrimaryButton } from "../styles/components/PrimaryButton";

//Types
import { FinishButtonProps } from "../types";

const FinishButton: React.FC<FinishButtonProps> = ({ onClick }) => {
  return (
    <StyledPrimaryButton onClick={onClick}>
      <p className="label--button">Finalizar pedido</p>
    </StyledPrimaryButton>
  );
};

export default FinishButton;
