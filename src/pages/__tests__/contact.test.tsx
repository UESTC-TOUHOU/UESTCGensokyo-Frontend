import { describe, test, expect, vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../Contact';
import { renderWithRouter } from '../../test/test-utils';

describe('Contact form', () => {
  test('renders form fields', () => {
    renderWithRouter([{ path: '/', element: <Contact /> }]);

    expect(screen.getByLabelText('您的姓名')).toBeInTheDocument();
    expect(screen.getByLabelText('您的邮箱')).toBeInTheDocument();
    expect(screen.getByLabelText('留言内容')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '发送' })).toBeInTheDocument();
  });

  test('submits form data and shows success', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);

    renderWithRouter([{ path: '/', element: <Contact /> }]);

    fireEvent.change(screen.getByLabelText('您的姓名'), { target: { value: '铃仙' } });
    fireEvent.change(screen.getByLabelText('您的邮箱'), { target: { value: 'reisen@example.com' } });
    fireEvent.change(screen.getByLabelText('留言内容'), { target: { value: '想加入社团！' } });
    fireEvent.click(screen.getByRole('button', { name: '发送' }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/api/contact'),
        expect.objectContaining({ method: 'POST' })
      );
    });
    await waitFor(() => {
      expect(screen.getByText('发送成功！')).toBeInTheDocument();
    });

    vi.unstubAllGlobals();
  });

  test('shows error when request fails', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('network down'));
    vi.stubGlobal('fetch', fetchMock);

    renderWithRouter([{ path: '/', element: <Contact /> }]);

    fireEvent.change(screen.getByLabelText('您的姓名'), { target: { value: '琪露诺' } });
    fireEvent.change(screen.getByLabelText('您的邮箱'), { target: { value: 'cirno@example.com' } });
    fireEvent.change(screen.getByLabelText('留言内容'), { target: { value: '⑨' } });
    fireEvent.click(screen.getByRole('button', { name: '发送' }));

    await waitFor(() => {
      expect(screen.getByText('发送失败，请重试。')).toBeInTheDocument();
    });

    vi.unstubAllGlobals();
  });
});
