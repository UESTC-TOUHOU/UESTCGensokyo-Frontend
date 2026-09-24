import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { mountTH08, type TH08HostHandle } from '@uestc-touhou/touhou-web-engine/th08';
import '@uestc-touhou/touhou-web-engine/th08/style.css';
import './TH08.css';

export default function TH08() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<TH08HostHandle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  const handleRetry = useCallback(() => {
    setError(null);
    setRetryKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let destroyed = false;
    // Derive asset base URL following contract: BASE_URL + 'th08-assets/'
    const baseUrl = import.meta.env.BASE_URL ?? '/';
    const resourceBase = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}th08-assets/`;

    try {
      const handle = mountTH08(container, {
        resourceBase,
        listenUrlParams: true,
        toggleBodyClass: true,
      });
      handleRef.current = handle;

      handle.ready.catch((err: unknown) => {
        if (!destroyed) {
          console.error('Failed to initialize TH08 engine:', err);
          setError(err instanceof Error ? err.message : String(err));
        }
      });
    } catch (err: unknown) {
      if (!destroyed) {
        console.error('Failed to mount TH08 host:', err);
        setError(err instanceof Error ? err.message : String(err));
      }
    }

    return () => {
      destroyed = true;
      if (handleRef.current) {
        handleRef.current.destroy();
        handleRef.current = null;
      }
    };
  }, [retryKey]);

  return (
    <div className="th08-container">
      <div
        ref={containerRef}
        id="game-root"
        className="th08-canvas-container"
        data-testid="th08-root"
      >
        {error && (
          <div className="th08-error-panel" data-testid="th08-error">
            <h3 className="th08-error-title">{t('th08.error_title')}</h3>
            <p className="th08-error-message">{error}</p>
            <button
              type="button"
              className="th08-retry-btn"
              onClick={handleRetry}
            >
              {t('th08.retry')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
