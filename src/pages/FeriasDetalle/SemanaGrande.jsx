import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function SemanaGrande() {
  return (
    <FeriaPlantilla
      titulo="Feria Semana Grande"
      ciudad="Bilbao"
      plaza="Plaza de Toros de Vista Alegre"
      imagen="/Galeria/ferias/fbb01.png"
      descripcion="La Semana Grande de Bilbao es uno de los ciclos más respetados por la afición, con ganaderías de máxima exigencia."
      historia="La feria bilbaína adquirió renombre a lo largo del siglo XX por su apuesta por encierros serios y públicos muy conocedores, estableciendo un criterio firme para medir la bravura."
      ganaderias={[
        "Victorino Martín",
        "Miura",
        "Jandilla",
        "Garcigrande",
        "Daniel Ruiz"
      ]}
      toreros={[
        "El Juli",
        "Roca Rey",
        "Manzanares",
        "Talavante",
        "Emilio de Justo"
      ]}
    />
  );
}
