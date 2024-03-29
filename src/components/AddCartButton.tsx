import React from "react";

//Styles
import {
  PrimaryButton,
  MiniCart,
  Counter,
  LabelButton,
} from "../styles/components/PrimaryButton";

//Types
import { AddCartButtonProps } from "../types";

const AddCartButton: React.FC<AddCartButtonProps> = ({
  onClick,
  cartQuantity,
}) => {
  return (
    <PrimaryButton onClick={onClick}>
      <MiniCart>
        <img
          className="mini-cart--infos__icon"
          src="/src/assets/mini-cart-icon.svg"
          alt="ícone de mini-sacola"
        />
        <Counter>{cartQuantity}</Counter>
      </MiniCart>
      <LabelButton>Adicionar ao carrinho</LabelButton>
    </PrimaryButton>
  );
};

export default AddCartButton;
