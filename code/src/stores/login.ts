import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type LoginStore = {
  email: string;
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
};

export const useLoginStore = create<LoginStore, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      email: "",
      isLoggedIn: false,
      login: (email: string) => set({ email, isLoggedIn: true }),
      logout: () => set({ email: "", isLoggedIn: false }),
    }),
    {
      name: "login-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
