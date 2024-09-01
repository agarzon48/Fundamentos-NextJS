"use client";

import { useState } from "react";
import { LoginContext } from "./LoginContext";

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email: string) => {
    setEmail(email);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setEmail("");
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ email, isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
