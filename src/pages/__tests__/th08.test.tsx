import { describe, test, expect, vi, beforeEach } from 'vitest';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import TH08 from '../TH08';
import { renderWithRouter } from '../../test/test-utils';
import type { TH08HostHandle, TH08HostOptions } from '@uestc-touhou/touhou-web-engine/th08';

const mountSpy = vi.fn();

vi.mock('@uestc-touhou/touhou-web-engine/th08', () => ({
  mountTH08: (container: HTMLElement, options: TH08HostOptions) => mountSpy(container, options),
}));

describe('TH08 Page and Host Lifecycle', () => {
  beforeEach(() => {
    mountSpy.mockReset();
  });

  test('mounts TH08 engine with expected options on render and destroys on unmount', async () => {
    const destroyMock = vi.fn();
    const readyPromise = Promise.resolve();
    const mockHandle: Partial<TH08HostHandle> = {
      ready: readyPromise,
      getState: () => ({ status: 'title' }),
      destroy: destroyMock,
    };

    mountSpy.mockReturnValue(mockHandle as TH08HostHandle);

    const { unmount } = renderWithRouter([{ path: '/', element: <TH08 /> }]);

    expect(screen.getByTestId('th08-root')).toBeInTheDocument();
    expect(mountSpy).toHaveBeenCalledTimes(1);

    const [containerArg, optionsArg] = mountSpy.mock.calls[0];
    expect(containerArg).toBeInstanceOf(HTMLElement);
    expect(optionsArg).toBeDefined();
    expect(optionsArg.resourceBase).toMatch(/\/th08-assets\/$/);
    expect(optionsArg.listenUrlParams).toBe(true);

    await waitFor(() => {
      expect(screen.queryByTestId('th08-error')).toBeNull();
    });

    // Verify unmount triggers handle.destroy() (preventing leaks in React 18 / StrictMode)
    unmount();
    expect(destroyMock).toHaveBeenCalledTimes(1);
  });

  test('renders error panel and allows retry when host initialization fails', async () => {
    const destroyMock = vi.fn();
    let attempt = 0;

    mountSpy.mockImplementation(() => {
      attempt++;
      if (attempt === 1) {
        return {
          getState: () => ({ status: 'destroyed' }),
          ready: Promise.reject(new Error('WebGL context lost')),
          destroy: destroyMock,
        } as unknown as TH08HostHandle;
      }

      return {
        getState: () => ({ status: 'title' }),
        ready: Promise.resolve(),
        destroy: destroyMock,
      } as unknown as TH08HostHandle;
    });

    renderWithRouter([{ path: '/', element: <TH08 /> }]);

    await waitFor(() => {
      expect(screen.getByTestId('th08-error')).toBeInTheDocument();
      expect(screen.getByText('WebGL context lost')).toBeInTheDocument();
    });

    // Click retry button
    const retryBtn = screen.getByRole('button', { name: /重新尝试|Retry|再試行/i });
    fireEvent.click(retryBtn);

    await waitFor(() => {
      expect(screen.queryByTestId('th08-error')).toBeNull();
      expect(attempt).toBe(2);
    });
  });
});
