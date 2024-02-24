import React from "react";

//Styles
import { StyledFinishButton } from "../styles/components/FinishButton";

interface FinishButtonProps {
  onClick: () => void;
}

const FinishButton: React.FC<FinishButtonProps> = ({ onClick }) => {
  return (
    <StyledFinishButton onClick={onClick}>
      <p className="label--button">Finalizar pedido</p>
    </StyledFinishButton>
  );
};

export default FinishButton;
