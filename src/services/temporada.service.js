import { apiGet } from "./api";

export function getTemporada() {
  return apiGet("/api/temporada");
}
