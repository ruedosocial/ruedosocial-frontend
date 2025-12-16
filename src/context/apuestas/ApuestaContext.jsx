import { createContext, useState } from "react";

export const ApuestaContext = createContext();

export function ApuestaProvider({ children }) {
  const [cesta, setCesta] = useState([]);

  const addApuesta = (apuesta) => {
    setCesta(prev => [...prev, apuesta]);
  };

  return (
    <ApuestaContext.Provider value={{ cesta, addApuesta }}>
      {children}
    </ApuestaContext.Provider>
  );
}
