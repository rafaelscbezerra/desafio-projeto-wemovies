import React from "react";

//Components
import FinishButton from "../../components/FinishButton";

//Logics
import useCart from "./useCart";

//Types
import { CartProps } from "../../types";

//Styles
import { StyledCart } from "../../styles/pages/Cart";

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  const {
    selectedItems,
    subtotals,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleRemoveItem,
    handleFinishButtonClick,
  } = useCart(cartItems, setCartItems);

  return (
    <StyledCart>
      <div className="cart--content">
        <div className="cart--content--header">
          <p className="cart--content--header__text">Produto</p>
          <p className="cart--content--header__text">Qtde</p>
          <p className="cart--content--header__text">Subtotal</p>
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
                <div className="movie--list--item__desktop">
                  <div className="movie--list--item__texts">
                    <p className="movie--list--item__texts__title">
                      {item.title}
                    </p>
                    <span className="movie--list--item__texts__value">
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="movie--list--item__mobile">
                  <div className="movie--list--item__texts">
                    <div className="movie--list--item__texts__mobile">
                      <p className="movie--list--item__texts__title">
                        {item.title}
                      </p>
                      <span className="movie--list--item__texts__value">
                        R$ {item.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      className="movie--list--item__remove mobile"
                      onClick={() => handleRemoveItem(item.id)}
                    >
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
                  </div>

                  <div className="movie--list--item__wrapper mobile">
                    <div className="movie--list--item__quantity">
                      <button
                        className="movie--list--item__quantity__options"
                        onClick={() => handleDecrementQuantity(item.id)}
                      >
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

                      <button
                        className="movie--list--item__quantity__options"
                        onClick={() => handleIncrementQuantity(item.id)}
                      >
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

                    <div className="movie--list--item__subtotal__mobile">
                      <p className="cart--content--header__text">Subtotal</p>
                      <p className="movie--list--item__subtotal">
                        R$ {(subtotals[item.id] || 0).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="movie--list--item__wrapper desktop">
                <div className="movie--list--item__quantity">
                  <button
                    className="movie--list--item__quantity__options"
                    onClick={() => handleDecrementQuantity(item.id)}
                  >
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

                  <button
                    className="movie--list--item__quantity__options"
                    onClick={() => handleIncrementQuantity(item.id)}
                  >
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
                  R$ {(subtotals[item.id] || 0).toFixed(2)}
                </p>
              </div>

              <button
                className="movie--list--item__remove desktop"
                onClick={() => handleRemoveItem(item.id)}
              >
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

        <div className="cart--content--totals">
          <FinishButton onClick={handleFinishButtonClick} />

          <div className="cart--content--totals__texts">
            <span className="cart--content--totals__texts__title">Total</span>
            <span className="cart--content--totals__texts__value">
              R${" "}
              {(
                Object.values(subtotals).reduce((acc, curr) => acc + curr, 0) ||
                0
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;
