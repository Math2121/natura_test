"use client"
import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useRouter } from 'next/navigation';


type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  removeItem: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
  addCartItem: (id: number) => void
  removeAllItems: () => void

};

type CartItem = {
  id: number;
  quantity: number;
}
const ShoppingCartContext = createContext({} as ShoppingCartContext);

type ShoppingCartProviderProps = {
  children: ReactNode;
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cart",
    []
  );

  const router = useRouter()
  const getItemQuantity = (id: number) => {
    const item = cartItems && cartItems.find((item) => item.id === id);
    return item?.quantity ?? 0;
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems(
      currItems => {
        if (currItems.find(item => item.id === id) == null) {
          return [...currItems, { id, quantity: 1 }]

        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 }

            } else {
              return item;
            }
          });
        }

      }
    )
  }

  const decreaseItemQuantity = (id: number) => {
    setCartItems(
      currItems => {
        if (currItems.find(item => item.id === id)?.quantity == 1) {
          return currItems.filter(item => item.id !== id)

        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 }

            } else {
              return item;
            }
          });
        }

      }
    )
  }

  const removeItem = (id: number) => {
    setCartItems(currItems => currItems.filter(item => item.id !== id))
  }

  const cartQuantity = cartItems && cartItems.reduce((currItems, item) => item.quantity + currItems, 0)

  const addCartItem = (id: number) => {
    setCartItems(currItems => [...currItems, { id, quantity: 1 }])
  }

  const removeAllItems = () => {
    setCartItems([])
    router.push('/')
  }


  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
        cartQuantity,
        cartItems,
        addCartItem,
        removeAllItems
      }}>
      {children}

    </ShoppingCartContext.Provider>
  );
}