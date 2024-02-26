import React from "react";

//Styles
import { StyledPrimaryButton } from "../styles/components/PrimaryButton";

//Types
import { AddCartButtonProps } from "../types";

const AddCartButton: React.FC<AddCartButtonProps> = ({
  onClick,
  cartQuantity,
}) => {
  return (
    <StyledPrimaryButton onClick={onClick}>
      <div className="mini-cart--infos">
        <img
          className="mini-cart--infos__icon"
          src="/src/assets/mini-cart-icon.svg"
          alt="ícone de mini-sacola"
        />
        <span className="mini-cart--infos__counter">{cartQuantity}</span>
      </div>
      <p className="label--button">Adicionar ao carrinho</p>
    </StyledPrimaryButton>
  );
};

export default AddCartButton;
