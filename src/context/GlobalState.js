import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Blumen", amount: -20 },
    { id: 2, text: "Gehalt", amount: 300 },
    { id: 3, text: "Buch", amount: -10 },
    { id: 4, text: "Kamera", amount: 150 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
