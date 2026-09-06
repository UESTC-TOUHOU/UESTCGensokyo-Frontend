import { describe, test, expect, vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../Contact';
import { renderWithRouter } from '../../test/test-utils';

describe('Contact page', () => {
  test('renders community channel cards', () => {
    renderWithRouter([{ path: '/', element: <Contact /> }]);

    expect(screen.getByText('联系我们')).toBeInTheDocument();
    expect(screen.getByText('UESTC 东方同好交流群')).toBeInTheDocument();
    expect(screen.getByText('群号: 586011595')).toBeInTheDocument();
    expect(screen.getByText('GitHub 组织')).toBeInTheDocument();
    expect(screen.getByText('Discord 社区')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '加入 QQ 群' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '访问 GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '加入 Discord' })).toBeInTheDocument();
  });

  test('toggles and submits message form', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);

    renderWithRouter([{ path: '/', element: <Contact /> }]);

    // Click toggle to show message form
    const toggleBtn = screen.getByRole('button', { name: /商务合作 \/ 匿名留言通道/ });
    fireEvent.click(toggleBtn);

    expect(screen.getByLabelText('您的姓名')).toBeInTheDocument();
    expect(screen.getByLabelText('您的邮箱')).toBeInTheDocument();
    expect(screen.getByLabelText('留言内容')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('您的姓名'), { target: { value: '幽谷响子' } });
    fireEvent.change(screen.getByLabelText('您的邮箱'), { target: { value: 'kyouko@example.com' } });
    fireEvent.change(screen.getByLabelText('留言内容'), { target: { value: '欢迎来到命莲寺与电科！' } });
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
});
