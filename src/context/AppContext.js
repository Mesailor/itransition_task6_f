import { useState, createContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState({ name: "" });

  const context = { user, setUser };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
