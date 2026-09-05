import { describe, test, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import Homepage from '../Homepage';
import { renderWithRouter } from '../../test/test-utils';

describe('Homepage content and API integration', () => {
  test('renders hero and real club intro sections', () => {
    // Default fetch reject to test fallback rendering
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));

    renderWithRouter([{ path: '/', element: <Homepage /> }]);

    // Titles
    expect(screen.getByText('关于社团')).toBeInTheDocument();
    expect(screen.getByText('社团简介')).toBeInTheDocument();
    expect(screen.getByText('社团活动')).toBeInTheDocument();
    expect(screen.getByText('组织架构')).toBeInTheDocument();

    // Club facts text
    expect(screen.getByText(/UESTC幻想乡（电子科技大学东方Project同好会/)).toBeInTheDocument();
    expect(screen.getByText('包容多元')).toBeInTheDocument();
    expect(screen.getByText('极客浪漫')).toBeInTheDocument();
    expect(screen.getByText('校园归属')).toBeInTheDocument();

    vi.unstubAllGlobals();
  });

  test('fetches activities and members from API and displays them', async () => {
    const mockActivities = [
      {
        id: 101,
        title_key: 'act_hyxk_2023',
        date: '2023-12-23',
        location: '九洲厅',
        summary_key: 'act_hyxk_2023_summary',
        sort_order: 1,
      },
    ];
    const mockMembers = [
      {
        id: 201,
        name: '博丽灵梦',
        role_key: 'seed_role_core',
        description_key: 'seed_member_core_summary',
        sort_order: 1,
      },
    ];

    const fetchMock = vi.fn().mockImplementation((url: string) => {
      if (url.includes('/api/activities')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockActivities),
        });
      }
      if (url.includes('/api/members')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMembers),
        });
      }
      return Promise.reject(new Error('Unknown url'));
    });

    vi.stubGlobal('fetch', fetchMock);

    renderWithRouter([{ path: '/', element: <Homepage /> }]);

    await waitFor(() => {
      expect(screen.getByText('成止「幻夜巡行」东方Project交流展')).toBeInTheDocument();
      expect(screen.getByText('博丽灵梦')).toBeInTheDocument();
    });

    vi.unstubAllGlobals();
  });

  test('handles fetch failure gracefully by showing error notice and fallback list', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('Network error'));
    vi.stubGlobal('fetch', fetchMock);

    renderWithRouter([{ path: '/', element: <Homepage /> }]);

    await waitFor(() => {
      expect(screen.getByText('未能同步最新活动，显示离线记录')).toBeInTheDocument();
      expect(screen.getByText('未能同步最新成员，显示离线记录')).toBeInTheDocument();
    });

    // Fallback data is visible
    expect(screen.getByText('UESTC幻想乡 理事会')).toBeInTheDocument();

    vi.unstubAllGlobals();
  });
});
