import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function SanJuan() {
  return (
    <FeriaPlantilla
      titulo="Feria de San Juan"
      ciudad="Badajoz"
      plaza="Plaza de Toros de Badajoz"
      imagen="/Galeria/ferias/fbj01.png"
      descripcion="La Feria de San Juan es un ciclo veraniego marcado por su ambiente cálido y carteles con figuras del toreo."
      historia="La feria pacense cuenta con una larga tradición y ha sido escenario habitual de presentaciones de nuevos valores y gestas de figuras consagradas."
      ganaderias={[
        "Jandilla",
        "Garcigrande",
        "El Pilar"
      ]}
      toreros={[
        "Ginés Marín",
        "Talavante",
        "Roca Rey"
      ]}
    />
  );
}
