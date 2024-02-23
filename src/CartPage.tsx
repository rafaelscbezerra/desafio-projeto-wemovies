import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledCartPage } from "./styles/pages/CartPage";
import FinishButton from "./components/FinishButton";

interface AppCartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartPageProps {
  cartItems: AppCartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<AppCartItem[]>>;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems }) => {
  const navigate = useNavigate();
  const selectedItems = cartItems.filter((item) => item.quantity > 0);

  const handleFinishButtonClick = () => {
    navigate("/compra-realizada");
  };

  return (
    <>
      <StyledCartPage>
        <div className="cart--page--content">
          <div className="cart--page--content--header">
            <p className="cart--page--content--header__text">Produto</p>
            <p className="cart--page--content--header__text">Qtde</p>
            <p className="cart--page--content--header__text">Subtotal</p>
          </div>
          <ul className="movie--list">
            {selectedItems.map((item, index) => (
              <li className="movie--list--item" key={index}>
                <div className="movie--list--item__wrapper">
                  <img
                    className="movie--list--item__image"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="movie--list--item__texts">
                    <p className="movie--list--item__texts__title">
                      {item.title}
                    </p>
                    <span className="movie--list--item__texts__value">
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="movie--list--item__wrapper">
                  <div className="movie--list--item__quantity">
                    <button className="movie--list--item__quantity__options">
                      <svg
                        className="movie--list--item__quantity__options__minus"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 8.1V9.9H13.5V8.1H4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <span className="movie--list--item__quantity__counter">
                      {item.quantity}
                    </span>

                    <button className="movie--list--item__quantity__options">
                      <svg
                        className="movie--list--item__quantity__options__plus"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.9 4.5H8.1V8.1H4.5V9.9H8.1V13.5H9.9V9.9H13.5V8.1H9.9V4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>

                  <p className="movie--list--item__subtotal">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>

                <button className="movie--list--item__remove">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.99736 16C1.99736 17.1 3.17447 18 4.61316 18H15.0764C16.5151 18 17.6922 17.1 17.6922 16V4H1.99736V16ZM19.0001 1H14.4224L13.1145 0H6.57501L5.26711 1H0.689453V3H19.0001V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div className="cart--page--content--totals">
            <FinishButton onClick={handleFinishButtonClick} />

            <div className="cart--page--content--totals__texts">
              <span className="cart--page--content--totals__texts__title">
                Total
              </span>
              <span className="cart--page--content--totals__texts__value">
                R$ 29,90
              </span>
            </div>
          </div>
        </div>
      </StyledCartPage>
    </>
  );
};

export default CartPage;
