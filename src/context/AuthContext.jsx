import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
 const [user, setUser] = useState(() => {
  return JSON.parse(localStorage.getItem("user")) || null;
});

const login = () => {
  const fakeUser = {
    name: "Guest User",
    email: "guest@shopzone.com",
  };

  setUser(fakeUser);
  localStorage.setItem("user", JSON.stringify(fakeUser));
};

const logout = () => {
  setUser(null);
  localStorage.removeItem("user");
};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}