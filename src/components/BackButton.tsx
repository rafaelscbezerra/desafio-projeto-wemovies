import React from "react";

//Styles
import { PrimaryButton, LabelButton } from "../styles/components/PrimaryButton";

const BackButton: React.FC = () => {
  return (
    <PrimaryButton>
      <LabelButton>Voltar</LabelButton>
    </PrimaryButton>
  );
};

export default BackButton;
