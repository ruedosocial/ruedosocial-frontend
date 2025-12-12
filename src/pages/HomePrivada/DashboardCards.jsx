import { usePrivate } from "../../context/private/PrivateContext";
import PrivateCard from "../../components/PrivateCards/PrivateCard";

export default function DashboardCards() {
  const { user } = usePrivate();

  return (
    <>
      <PrivateCard
        primary
        icon="🎯"
        title="Estado de Mi Temporada"
        subtitle={`${user.temporada.progreso}% completado · ${user.temporada.puntos} pts`}
        to="/mi-ruedo/mi-temporada"
      />

      <PrivateCard
        icon="🐂"
        title="Últimas Faenas"
        subtitle={`${user.temporada.objetivos} activas`}
        to="/mi-ruedo/mis-faenas"
      />

      <PrivateCard
        icon="🏆"
        title="Ranking Actual"
        subtitle={`Posición #${user.ranking}`}
        to="/mi-ruedo/mi-ranking"
      />

      <PrivateCard
        icon="📊"
        title="Estadísticas Generales"
        subtitle="Rendimiento global"
        to="/mi-ruedo/estadisticas"
      />
    </>
  );
}
