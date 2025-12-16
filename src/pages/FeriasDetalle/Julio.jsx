import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function Julio() {
  return (
    <FeriaPlantilla
      titulo="Feria de Julio"
      ciudad="Valencia"
      plaza="Plaza de Toros de Valencia"
      imagen="/Galeria/ferias/fvc01.png"
      descripcion="La Feria de Julio combina tradición y modernidad, siendo uno de los ciclos estivales con más historia."
      historia="Instituida en 1871, su carácter veraniego, festivo y abierto la ha convertido en un referente con carteles variados y presencia de figuras."
      ganaderias={[
        "Jandilla",
        "Victoriano del Río",
        "Juan Pedro Domecq",
        "El Pilar"
      ]}
      toreros={[
        "El Juli",
        "Roca Rey",
        "José María Manzanares",
        "Paco Ureña"
      ]}
    />
  );
}
