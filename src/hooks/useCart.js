import { useEffect, useState } from "react";

const useCart = () => {
  // get cart data form localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Faild to Load cart from localStorage", error);
      return [];
    }
  });
  // set cart data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Faild to save cart to localStorage", error);
    }
  }, [cart]);

  // Sync accross the tabs
  useEffect(() => {
    const handelStorage = (e) => {
      if (e.key === "cart") {
        try {
          const newCart = JSON.parse(e.newValue || "[]");
          setCart(newCart);
        } catch (error) {
          console.error("Faild to parse cart from localStorage.", error);
        }
      }
    };
    window.addEventListener("storage", handelStorage);
    return () => window.removeEventListener("storage", handelStorage);
  }, []);

  const addToCart = (previous) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => itemid === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return[...currentCart, {...product, quantity : 1}]
    });
  };
};

export default useCart;
