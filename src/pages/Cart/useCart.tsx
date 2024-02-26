import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Types
import { CartItem } from "../../types";

const useCart = (
  cartItems: CartItem[],
  setCartItems: (items: CartItem[]) => void
) => {
  const navigate = useNavigate();
  const selectedItems = cartItems.filter((item) => item.quantity > 0);
  const [subtotals, setSubtotals] = useState<{ [key: string]: number }>({});

  const handleIncrementQuantity = (id: string) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecrementQuantity = (id: string) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (id: string) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = (quantity: number, price: number) => {
    return quantity * price;
  };

  const updateSubtotals = () => {
    const updatedSubtotals: { [key: string]: number } = {};
    selectedItems.forEach((item) => {
      updatedSubtotals[item.id] = calculateSubtotal(item.quantity, item.price);
    });
    setSubtotals(updatedSubtotals);
  };

  const handleFinishButtonClick = () => {
    navigate("/compra-realizada");
  };

  React.useEffect(() => {
    updateSubtotals();
  }, [cartItems]);

  React.useEffect(() => {
    if (selectedItems.length === 0) {
      navigate("/carrinho-vazio", { replace: true });
    }
  }, [selectedItems, navigate]);

  return {
    selectedItems,
    subtotals,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleRemoveItem,
    handleFinishButtonClick,
  };
};

export default useCart;
