// TODO: sustituir datos mock por llamadas a services/* cuando backend esté activo
import { createContext, useContext } from "react";

const PrivateContext = createContext(null);

export function PrivateProvider({ children }) {
  const user = {
    alias: "ToreroDigital",
    nivel: 7,
    puntos: 3420,
    ranking: 12,
    temporada: {
      progreso: 65,
      puntos: 980,
      objetivos: 5
    }
  };

  const faenas = [
    { id: 1, nombre: "Corrida Sevilla", puntos: 120, fecha: "2025-03-01" },
    { id: 2, nombre: "San Isidro", puntos: 180, fecha: "2025-03-10" },
    { id: 3, nombre: "Feria Abril", puntos: 90, fecha: "2025-03-18" }
  ];

  const ranking = [
    { pos: 10, alias: "ElCapote", puntos: 1510 },
    { pos: 11, alias: "MediaVerónica", puntos: 1460 },
    { pos: 12, alias: "ToreroDigital", puntos: 1420 },
    { pos: 13, alias: "ToroBravo", puntos: 1380 }
  ];

  const estadisticas = {
    aciertos: 128,
    puntosTotales: 3420,
    mejorRacha: 7,
    temporadas: 4
  };

  return (
    <PrivateContext.Provider value={{ user, faenas, ranking, estadisticas }}>
      {children}
    </PrivateContext.Provider>
  );
}

export function usePrivate() {
  return useContext(PrivateContext);
}
