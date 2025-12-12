export async function getToreoImages() {
  try {
    const res = await fetch("/Galeria/toreo/lista.json");
    const files = await res.json();
    return files.map(f => `/Galeria/toreo/${f}`);
  } catch (e) {
    return [];
  }
}
