import React, { useState, createContext } from "react";

export const InputContext = createContext();

export default function InputProvider({ children }) {
  const [input, setInput] = useState("");
  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
}
