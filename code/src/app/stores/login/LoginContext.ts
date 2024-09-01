import { createContext } from "react";

export const LoginContext = createContext({
  email: "",
  isLoggedIn: false,
  login: (_email: string) => {},
  logout: () => {},
});
