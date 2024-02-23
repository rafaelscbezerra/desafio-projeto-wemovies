import React from "react";

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
  const selectedItems = cartItems.filter((item) => item.quantity > 0);

  return (
    <div>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} />
            {item.title} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
