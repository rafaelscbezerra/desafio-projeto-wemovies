import React from "react";

//Styles
import { PrimaryButton } from "../styles/components/PrimaryButton";
import { LabelButton } from "../styles/components/PrimaryButton";

//Types
import { FinishButtonProps } from "../types";

const FinishButton: React.FC<FinishButtonProps> = ({ onClick }) => {
  return (
    <PrimaryButton onClick={onClick}>
      <LabelButton>Finalizar pedido</LabelButton>
    </PrimaryButton>
  );
};

export default FinishButton;
