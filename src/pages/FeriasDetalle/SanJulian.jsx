import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function SanJulian() {
  return (
    <FeriaPlantilla
      titulo="Feria de San Julián"
      ciudad="Cuenca"
      plaza="Plaza de Toros de Cuenca"
      imagen="/Galeria/ferias/fcc01.png"
      descripcion="La Feria de San Julián destaca por su ambiente veraniego y carteles equilibrados entre figuras y revelaciones."
      historia="Celebrada desde mediados del siglo XX, la feria ha sido escenario de grandes faenas y ha mantenido una notable regularidad en su programación estival."
      ganaderias={[
        "El Parralejo",
        "Garcigrande",
        "Núñez del Cuvillo"
      ]}
      toreros={[
        "Roca Rey",
        "Emilio de Justo",
        "Daniel Luque"
      ]}
    />
  );
}
