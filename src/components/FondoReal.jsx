import React from "react";
import { useLocation } from "react-router-dom";
import "./FondoReal.css";

export default function FondoReal() {
  const { pathname } = useLocation();

  let fondo = "/Galeria/home/fhomepublic.png";

  if (pathname.startsWith("/ferias")) fondo = "/Galeria/ferias/ff01.jpg";
  if (pathname.startsWith("/toreros")) fondo = "/Galeria/toreros/ftoreros.png";
  if (pathname.startsWith("/ganaderias")) fondo = "/Galeria/ganaderias/fg02.jpg";
  if (pathname.startsWith("/clasificacion")) fondo = "/Galeria/clasificacion/fc01.jpg";
  if (pathname.startsWith("/resultados")) fondo = "/Galeria/resultados/fr01.jpg";
  if (pathname.startsWith("/perfil")) fondo = "/Galeria/perfil/fp01.jpg";
  if (pathname.startsWith("/acceder")) fondo = "/Galeria/acceder/fa01.jpg";
  if (pathname.startsWith("/ruedorank")) fondo = "/Galeria/ruedorank/fk01.jpg";
  if (pathname.startsWith("/noticias")) fondo = "/Galeria/noticias/fn01.jpg";
  if (pathname.startsWith("/multimedia")) fondo = "/Galeria/multimedia/fm01.jpg";
  if (pathname.startsWith("/ajustes")) fondo = "/Galeria/ajustes/fj01.jpg";

  return (
    <div
      className="fondo-real"
      style={{ backgroundImage: `url(${fondo})` }}
    ></div>
  );
}
