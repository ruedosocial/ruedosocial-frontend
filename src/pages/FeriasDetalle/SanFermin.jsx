import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function SanFermin() {
  return (
    <FeriaPlantilla
      titulo="Feria de San Fermín"
      ciudad="Pamplona"
      plaza="Plaza de Toros de Pamplona"
      imagen="/Galeria/ferias/fsf01.png"
      descripcion="Una de las ferias más internacionales, famosa por sus encierros y por su público vibrante."
      historia="San Fermín es una feria única por su mezcla de tradición, riesgo y proyección mundial. Sus encierros atraen a miles de personas cada año y la feria mantiene un carácter propio e irrepetible."
      ganaderias={[
        "Miura",
        "Jandilla",
        "Cebada Gago",
        "Victoriano del Río"
      ]}
      toreros={[
        "Roca Rey",
        "Emilio de Justo",
        "Talavante",
        "Rubén Pinar"
      ]}
    />
  );
}
