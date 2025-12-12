import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function LaChata() {
  return (
    <FeriaPlantilla
      titulo="Feria de La Chata"
      ciudad="Albacete"
      plaza="Plaza de Toros de Albacete (La Chata)"
      imagen="/Galeria/ferias/fab01.png"
      descripcion="Una feria muy respetada por el público y los profesionales, con una afición exigente y conocedora."
      historia="La feria albaceteña ha mantenido durante décadas una reputación de seriedad y equilibrio, con carteles variados y encierros muy bien presentados."
      ganaderias={[
        "La Quinta",
        "Victorino Martín",
        "El Pilar",
        "Alcurrucén"
      ]}
      toreros={[
        "Rubén Pinar",
        "Roca Rey",
        "Paco Ureña",
        "Sergio Serrano"
      ]}
    />
  );
}
