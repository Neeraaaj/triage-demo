export function loadConfig() {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) throw new Error('API_URL is not set');
  return { apiUrl, timeoutMs: Number(process.env.TIMEOUT_MS ?? 5000) };
}