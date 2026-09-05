import { describe, test, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import AdminLogin from '../AdminLogin';
import Admin from '../Admin';
import { renderWithRouter } from '../../test/test-utils';

describe('AdminLogin page', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  test('renders login form', () => {
    renderWithRouter([{ path: '/', element: <AdminLogin /> }]);

    expect(screen.getByText('管理后台登录')).toBeInTheDocument();
    expect(screen.getByLabelText('管理员密码')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '登录' })).toBeInTheDocument();
  });

  test('submits password and stores token on success', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ token: 'mock-test-token-123' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    renderWithRouter([{ path: '/', element: <AdminLogin /> }]);

    fireEvent.change(screen.getByLabelText('管理员密码'), {
      target: { value: 'secret123' },
    });
    fireEvent.click(screen.getByRole('button', { name: '登录' }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/api/admin/login'),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({ password: 'secret123' }),
        })
      );
    });

    expect(localStorage.getItem('admin_token')).toBe('mock-test-token-123');

    vi.unstubAllGlobals();
  });

  test('shows error message on 401 unauthorized', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ error: 'Unauthorized' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    renderWithRouter([{ path: '/', element: <AdminLogin /> }]);

    fireEvent.change(screen.getByLabelText('管理员密码'), {
      target: { value: 'wrong-pass' },
    });
    fireEvent.click(screen.getByRole('button', { name: '登录' }));

    await waitFor(() => {
      expect(screen.getByText('密码错误，请重试')).toBeInTheDocument();
    });

    vi.unstubAllGlobals();
  });
});

describe('Admin dashboard', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  test('redirects to login if no token present', async () => {
    renderWithRouter([
      { path: '/', element: <Admin /> },
      { path: '/admin/login', element: <div>Redirected to Login</div> },
    ]);

    await waitFor(() => {
      expect(screen.getByText('Redirected to Login')).toBeInTheDocument();
    });
  });

  test('renders list when token exists', async () => {
    localStorage.setItem('admin_token', 'valid-token');

    const fetchMock = vi.fn().mockImplementation((url: string) => {
      if (url.includes('/api/activities')) {
        return Promise.resolve({
          ok: true,
          json: async () => [
            {
              id: 1,
              title_key: '东方红魔乡展',
              date: '2026-05-18',
              location: '活动中心',
              summary_key: '同好交流会',
              sort_order: 1,
            },
          ],
        });
      }
      if (url.includes('/api/members')) {
        return Promise.resolve({
          ok: true,
          json: async () => [
            {
              id: 1,
              name: '幽幽子',
              role_key: '社长',
              description_key: '负责社团日常',
              sort_order: 1,
            },
          ],
        });
      }
      return Promise.resolve({ ok: true, json: async () => ({}) });
    });
    vi.stubGlobal('fetch', fetchMock);

    renderWithRouter([{ path: '/', element: <Admin /> }]);

    await waitFor(() => {
      expect(screen.getByText('内容管理后台')).toBeInTheDocument();
      expect(screen.getByText('东方红魔乡展')).toBeInTheDocument();
    });

    vi.unstubAllGlobals();
  });
});
