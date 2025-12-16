import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function Abril() {
  return (
    <FeriaPlantilla
      titulo="Feria de Abril"
      ciudad="Sevilla"
      plaza="Real Maestranza de Caballería"
      imagen="/Galeria/ferias/fsv01.png"
      descripcion="Elegancia, arte y liturgia forman parte de la esencia de la Feria de Abril, una de las más emblemáticas del toreo."
      historia="La feria sevillana hunde sus raíces en el siglo XIX y es el principal escaparate del toreo clásico, con un público entendido que valora el arte por encima de la estadística."
      ganaderias={[
        "Miura",
        "Victoriano del Río",
        "Núñez del Cuvillo",
        "El Parralejo",
        "Garcigrande"
      ]}
      toreros={[
        "Morante de la Puebla",
        "Manzanares",
        "Talavante",
        "Roca Rey",
        "Daniel Luque"
      ]}
    />
  );
}
