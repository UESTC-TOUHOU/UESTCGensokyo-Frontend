/**
 * Centralized API base URL resolution.
 * - Prioritizes VITE_API_BASE environment variable if provided.
 * - In browser environment, automatically uses the current window's hostname with port 18080.
 * - Defaults to http://localhost:18080.
 */
export const getApiBase = (): string => {
  if (import.meta.env.VITE_API_BASE) {
    return import.meta.env.VITE_API_BASE;
  }
  if (typeof window !== 'undefined' && window.location && window.location.hostname) {
    const host = window.location.hostname;
    const proto = window.location.protocol; // http: or https:
    return `${proto}//${host}:18080`;
  }
  return 'http://localhost:18080';
};
