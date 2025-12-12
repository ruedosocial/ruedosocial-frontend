import { apiGet } from "./api";

export function getFaenas() {
  return apiGet("/api/faenas");
}
