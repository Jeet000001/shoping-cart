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
      if(e.key === "cart"){
        try {
          const newCart = JSON.parse(e.newValue || "[]")
          setCart(newCart)
        } catch (error) {
          console.error("Faild to parse cart from localStorage.", error)
        }
      }
    }
    window.addEventListener("Storage", handelStorage)
    return () => window.removeEventListener("storage", handelStorage)
  }, [])

};

export default useCart;
