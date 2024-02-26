import React from "react";

//Styles
import { StyledPrimaryButton } from "../styles/components/PrimaryButton";

const BackButton: React.FC = () => {
  return (
    <StyledPrimaryButton>
      <p className="label--button">Voltar</p>
    </StyledPrimaryButton>
  );
};

export default BackButton;
