// src/Context/UserContext.jsx
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(); 

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("userToken");
    if (storedUser && storedToken) {
      setUser({ ...JSON.parse(storedUser), token: storedToken });
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userToken", token);
    setUser({ ...userData, token });
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
