import React from "react";
import BackButton from "./components/BackButton";
import { StyledSuccessBuyPage } from "./styles/pages/SuccessBuyPage";
import { Link } from "react-router-dom";

const SuccessBuyPage: React.FC = () => {
  return (
    <>
      <StyledSuccessBuyPage>
        <div className="success--buy--content">
          <p className="success--buy--content__title">
            Compra realizada com sucesso!
          </p>
          <img
            className="success--buy--content__image"
            src="/src/assets/success-buy-image.svg"
            alt="imagem de compra realizada com sucesso!"
          />

          <Link to="/" className="back--button">
            <BackButton />
          </Link>
        </div>
      </StyledSuccessBuyPage>
    </>
  );
};

export default SuccessBuyPage;
