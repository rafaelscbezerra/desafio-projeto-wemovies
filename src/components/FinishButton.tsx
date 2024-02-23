import React from "react";

//Styles
import { StyledFinishButton } from "../styles/components/FinishButton";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <StyledFinishButton onClick={onClick}>
      <p className="label-button">Finalizar pedido</p>
    </StyledFinishButton>
  );
};

export default Button;
