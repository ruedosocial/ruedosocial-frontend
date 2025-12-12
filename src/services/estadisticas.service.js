import { apiGet } from "./api";

export function getEstadisticas() {
  return apiGet("/api/estadisticas");
}
