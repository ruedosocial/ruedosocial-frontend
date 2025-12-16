import CardGrid from "../../components/CardGrid";

export default function RuedoRank() {
  const tarjetas = [
    {
      title: "Nº1 Roca Rey",
      subtitle: "Ranking mundial",
      image: "/Galeria/test/test02.jpg",
      link: "/detalle/rank-roca"
    },
    {
      title: "Nº2 Morante",
      subtitle: "Arte puro",
      image: "/Galeria/test/test01.jpg",
      link: "/detalle/rank-morante"
    },
    {
      title: "Nº3 Talavante",
      subtitle: "Artista",
      image: "/Galeria/test/test04.jpg",
      link: "/detalle/rank-talavante"
    },
    {
      title: "Nº4 El Juli",
      subtitle: "Maestro",
      image: "/Galeria/test/test03.jpg",
      link: "/detalle/rank-juli"
    },
    {
      title: "Nº5 Manzanares",
      subtitle: "Elegancia",
      image: "/Galeria/test/test05.jpg",
      link: "/detalle/rank-manzanares"
    }
  ];

  return <CardGrid tarjetas={tarjetas} />;
}
