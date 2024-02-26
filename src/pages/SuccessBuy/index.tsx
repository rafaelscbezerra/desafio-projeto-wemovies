import React from "react";
import { Link } from "react-router-dom";

//Components
import BackButton from "../../components/BackButton";

//Styles
import { StyledBuyConditions } from "../../styles/pages/BuyConditions";

const SuccessBuyPage: React.FC = () => {
  return (
    <StyledBuyConditions>
      <div className="buy--conditions--content">
        <p className="buy--conditions--content__title">
          Compra realizada com sucesso!
        </p>
        <img
          className="success--buy--image"
          src="/src/assets/success-buy-image.svg"
          alt="imagem de compra realizada com sucesso!"
        />

        <Link to="/" className="back--button">
          <BackButton />
        </Link>
      </div>
    </StyledBuyConditions>
  );
};

export default SuccessBuyPage;
