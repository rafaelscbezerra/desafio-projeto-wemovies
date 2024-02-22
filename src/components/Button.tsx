//Styles
import { StyledButtonPrimary } from "../styles/components/Button";

function Button() {
  return (
    <>
      <StyledButtonPrimary>
        <div className="mini-cart--infos">
          <img
            className="mini-cart--infos__icon"
            src="/src/assets/mini-cart-icon.svg"
            alt="ícone de mini-sacola"
          />
          <span className="mini-cart--infos__counter">0</span>
        </div>
        <p className="label-button">Adicionar ao carrinho</p>
      </StyledButtonPrimary>
    </>
  );
}

export default Button;
