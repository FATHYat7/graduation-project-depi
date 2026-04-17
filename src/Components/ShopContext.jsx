// src/Components/ShopContext.jsx
import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // 🟢 تحميل البيانات من localStorage عند أول تشغيل
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // 🟢 بيانات المستخدم
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // 🟢 حفظ cart في localStorage عند كل تعديل
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🟢 حفظ wishlist في localStorage عند كل تعديل
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // 🟢 حفظ بيانات المستخدم في localStorage عند كل تعديل
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // إضافة للـ Cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // تعديل الكمية
  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // إضافة للـ Wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  // حذف من Wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) =>
      prev.filter((item) => item.id.toString() !== id.toString())
    );
  };

  // حذف من Cart
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id.toString() !== id.toString())
    );
  };

  // 🔥 تفريغ الكارت بالكامل بعد التشيك أوت
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        user,       // ← بيانات المستخدم
        setUser,    // ← لتحديث بيانات المستخدم
        addToCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
