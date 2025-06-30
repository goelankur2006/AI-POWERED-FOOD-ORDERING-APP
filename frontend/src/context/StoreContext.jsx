import axios from "axios";
import { createContext, useEffect } from "react";
import React, { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Initialize cartItems from localStorage for true persistence
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : {};
  });
  const url = "http://localhost:5000";
  const [token, setToken] = useState(() => localStorage.getItem('token') || "");
  const [food_list, setFoodList] = useState([]);

  const addToCart = (itemId) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      if (!newCart[itemId]) {
        newCart[itemId] = 1;
      } else {
        newCart[itemId] += 1;
      }
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      if (newCart[itemId]) {
        newCart[itemId] -= 1;
        if (newCart[itemId] <= 0) {
          delete newCart[itemId];
        }
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find(product => product._id == itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  useEffect(() => {
    fetchFoodList();
    // Restore token if present (already handled in useState, but keep for clarity)
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
    // No need to restore cartItems here, already handled in useState
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;