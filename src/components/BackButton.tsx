import React from "react";

//Styles
import { StyledBackButton } from "../styles/components/BackButton";

const BackButton: React.FC = () => {
  return (
    <StyledBackButton>
      <p className="label--button">Voltar</p>
    </StyledBackButton>
  );
};

export default BackButton;
