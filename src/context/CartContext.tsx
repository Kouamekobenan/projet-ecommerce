"use client";

import React, { createContext, useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StaticImageData } from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgs: StaticImageData;
}

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  imgs: StaticImageData;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  totalCartPrice: number;
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  decrementItemInCart: (id: number) => void;
  clearCart: () => void;
  favorites: FavoriteItem[];
  favoriteCount: number;
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    toast.success(`Article "${item.name}" ajouté au panier !`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const decrementItemInCart = (id: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          toast.warn(`Article "${existingItem.name}" supprimé du panier.`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          return prevCart.filter((cartItem) => cartItem.id !== id);
        }
      }
      return prevCart;
    });
  };

  const removeItemFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((favItem) => favItem.id === item.id)) {
        
      toast.info(`L'article "${item.name}" est déjà dans les favoris.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        return prevFavorites;
      }
      toast.success(`Article "${item.name}" ajouté aux favoris avec succès !`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      const i = favoriteCount + 1;
      setFavoriteCount( i );
      return [...prevFavorites, item];
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favItem) => favItem.id !== id)
    );
    setFavoriteCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    toast.warn("Article supprimé des favoris.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        totalCartPrice,
        addItemToCart,
        decrementItemInCart,
        removeItemFromCart,
        clearCart,
        favorites,
        favoriteCount,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
