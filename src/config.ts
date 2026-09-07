/**
 * Centralized API base URL resolution.
 * - Uses VITE_API_BASE if provided (e.g. for local dev pointing at a remote backend).
 * - Otherwise returns empty string → same-origin requests via Nginx reverse proxy.
 */
export const getApiBase = (): string => {
  return import.meta.env.VITE_API_BASE || '';
};
