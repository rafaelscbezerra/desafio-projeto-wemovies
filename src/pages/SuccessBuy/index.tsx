import React from "react";
import { Link } from "react-router-dom";

//Components
import BackButton from "../../components/BackButton";

//Styles
import {
  StyledBuyConditions,
  StyledBuyConditionsContent,
  StyledBuyConditionsContentTitle,
} from "../../styles/pages/BuyConditions";

const SuccessBuyPage: React.FC = () => {
  return (
    <StyledBuyConditions>
      <StyledBuyConditionsContent>
        <StyledBuyConditionsContentTitle>
          Compra realizada com sucesso!
        </StyledBuyConditionsContentTitle>
        <img
          className="success--buy--image"
          src="/src/assets/success-buy-image.svg"
          alt="imagem de compra realizada com sucesso!"
        />
        <Link to="/" className="back--button">
          <BackButton />
        </Link>
      </StyledBuyConditionsContent>
    </StyledBuyConditions>
  );
};

export default SuccessBuyPage;
