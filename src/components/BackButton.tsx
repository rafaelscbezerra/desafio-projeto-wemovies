import React from "react";

//Styles
import { StyledBackButton } from "../styles/components/BackButton";

interface ButtonProps {
  // onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({}) => {
  return (
    <StyledBackButton>
      <p className="label-button">Voltar</p>
    </StyledBackButton>
  );
};

export default Button;
