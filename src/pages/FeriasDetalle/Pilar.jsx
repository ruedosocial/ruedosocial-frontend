import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function Pilar() {
  return (
    <FeriaPlantilla
      titulo="Feria del Pilar"
      ciudad="Zaragoza"
      plaza="Plaza de Toros de La Misericordia"
      imagen="/Galeria/ferias/fzg01.png"
      descripcion="La Feria del Pilar cierra la temporada taurina española, reuniendo a figuras y ganaderías muy contrastadas."
      historia="El ciclo pilarista se consolidó como gran feria de final de temporada, siempre marcada por una afición fiel y un ambiente festivo asociado a las fiestas del Pilar."
      ganaderias={[
        "El Pilar",
        "Garcigrande",
        "Jandilla",
        "Victorino Martín"
      ]}
      toreros={[
        "Roca Rey",
        "Talavante",
        "El Juli",
        "Manzanares",
        "Juan Ortega"
      ]}
    />
  );
}
