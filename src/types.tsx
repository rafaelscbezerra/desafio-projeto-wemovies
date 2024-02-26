export interface Movie {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface HeaderProps {
  cartItems: CartItem[];
}

export interface AddCartButtonProps {
  onClick: () => void;
  cartQuantity: number;
}

export interface FinishButtonProps {
  onClick: () => void;
}

export interface CartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}
