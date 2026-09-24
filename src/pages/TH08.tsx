import { useEffect, useRef } from 'react';
import { TH08Game } from '@uestc-touhou/touhou-web-engine/th08';
import { ASSET_MANIFEST } from '@uestc-touhou/touhou-web-engine/th08';
import './TH08.css';

const assetManifest: Record<string, string> = Object.fromEntries(
  Object.entries(ASSET_MANIFEST || {}).map(([key, path]) => [
    key,
    path.startsWith('/assets/')
      ? path.replace('/assets/', '/th08-assets/')
      : `/th08-assets/${path.replace(/^\/+/, '')}`,
  ])
);

export default function TH08() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let destroyed = false;
    const game = new TH08Game({ assetManifest });

    game
      .init(container)
      .then(() => {
        if (destroyed) {
          game.destroy();
          return;
        }
        game.start();
      })
      .catch((err: unknown) => {
        if (!destroyed) {
          console.error('Failed to initialize TH08Game:', err);
        }
      });

    return () => {
      destroyed = true;
      game.destroy();
    };
  }, []);

  return (
    <div className="th08-container">
      <div ref={containerRef} id="game-root" className="th08-canvas-container" />
    </div>
  );
}
