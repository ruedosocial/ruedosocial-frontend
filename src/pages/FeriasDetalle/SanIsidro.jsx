import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function SanIsidro() {
  return (
    <FeriaPlantilla
      titulo="Feria de San Isidro"
      ciudad="Madrid"
      plaza="Plaza de Toros de Las Ventas"
      imagen="/Galeria/ferias/fsi01.png"
      descripcion="La Feria de San Isidro es el núcleo de la temporada taurina mundial, considerada la cita más exigente por la afición de Madrid."
      historia="Creada en 1947, San Isidro se consolidó rápidamente como el ciclo taurino más largo y competitivo del planeta, con un mes completo de festejos y un público reconocido por su rigor."
      ganaderias={[
        "Victorino Martín",
        "Jandilla",
        "Fuente Ymbro",
        "Garcigrande",
        "El Pilar"
      ]}
      toreros={[
        "Morante de la Puebla",
        "El Juli",
        "Roca Rey",
        "Manzanares",
        "Emilio de Justo"
      ]}
    />
  );
}
