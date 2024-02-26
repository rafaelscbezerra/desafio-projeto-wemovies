import React from "react";

//Styles
import { PrimaryButton } from "../styles/components/PrimaryButton";
import { LabelButton } from "../styles/components/PrimaryButton";

const BackButton: React.FC = () => {
  return (
    <PrimaryButton>
      <LabelButton>Voltar</LabelButton>
    </PrimaryButton>
  );
};

export default BackButton;
