import React from "react";

//Styles
import { StyledButtonPrimary } from "../styles/components/Button";
interface ButtonProps {
  onClick: () => void;
  cartQuantity: number;
}

const Button: React.FC<ButtonProps> = ({ onClick, cartQuantity }) => {
  return (
    <StyledButtonPrimary onClick={onClick}>
      <div className="mini-cart--infos">
        <img
          className="mini-cart--infos__icon"
          src="/src/assets/mini-cart-icon.svg"
          alt="ícone de mini-sacola"
        />
        <span className="mini-cart--infos__counter">{cartQuantity}</span>{" "}
      </div>
      <p className="label-button">Adicionar ao carrinho</p>
    </StyledButtonPrimary>
  );
};

export default Button;
