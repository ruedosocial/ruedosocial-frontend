import React from "react";
import FeriaPlantilla from "./FeriaPlantilla";

export default function Califas() {
  return (
    <FeriaPlantilla
      titulo="Feria de Los Califas"
      ciudad="Córdoba"
      plaza="Plaza de Toros Los Califas"
      imagen="/Galeria/ferias/fcb01.png"
      descripcion="La Feria de Los Califas es un referente del toreo clásico en Andalucía, marcada por su historia y su elegancia."
      historia="Consolidada durante el siglo XX, Córdoba siempre ha destacado por su sensibilidad taurina y por ser cuna de grandes toreros, lo que ha dado personalidad propia al ciclo."
      ganaderias={[
        "Núñez del Cuvillo",
        "Garcigrande",
        "Juan Pedro Domecq",
        "Victoriano del Río"
      ]}
      toreros={[
        "Finito de Córdoba",
        "Morante de la Puebla",
        "Roca Rey",
        "Manzanares"
      ]}
    />
  );
}
