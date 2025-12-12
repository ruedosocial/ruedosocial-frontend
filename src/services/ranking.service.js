import { apiGet } from "./api";

export function getRanking() {
  return apiGet("/api/ranking");
}
