import React from "react";

//Styles
import { StyledAddCartButton } from "../styles/components/AddCartButton";

interface AddCartButtonProps {
  onClick: () => void;
  cartQuantity: number;
}

const AddCartButton: React.FC<AddCartButtonProps> = ({
  onClick,
  cartQuantity,
}) => {
  return (
    <StyledAddCartButton onClick={onClick}>
      <div className="mini-cart--infos">
        <img
          className="mini-cart--infos__icon"
          src="/src/assets/mini-cart-icon.svg"
          alt="ícone de mini-sacola"
        />
        <span className="mini-cart--infos__counter">{cartQuantity}</span>
      </div>
      <p className="label--button">Adicionar ao carrinho</p>
    </StyledAddCartButton>
  );
};

export default AddCartButton;
