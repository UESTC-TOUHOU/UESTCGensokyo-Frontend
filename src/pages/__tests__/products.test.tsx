import { describe, test, expect, beforeEach, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import Products from '../Products';
import { renderWithRouter, i18n } from '../../test/test-utils';

const mockProducts = [
  {
    id: 1,
    name: 'products.doujinshi_yanyin_title',
    category: 'doujinshi',
    description_key: 'products.doujinshi_yanyin_desc',
    image_url: '/products/doujinshi-mockup.jpg',
    sort_order: 1,
  },
  {
    id: 2,
    name: 'products.poster_marisa_title',
    category: 'poster',
    description_key: 'products.poster_marisa_desc',
    image_url: '/products/marisa-poster.jpg',
    sort_order: 3,
  },
  {
    id: 3,
    name: 'products.bookmark_reimu_title',
    category: 'bookmark',
    description_key: 'products.bookmark_reimu_desc',
    image_url: '/products/bookmark-reimu.jpg',
    sort_order: 4,
  },
  {
    id: 4,
    name: 'products.acrylic_sunny_title',
    category: 'acrylic',
    description_key: 'products.acrylic_sunny_desc',
    image_url: '/products/acrylic-sunny.jpg',
    sort_order: 10,
  },
];

const mockMultilingualProducts = [
  {
    id: 10,
    name_zh: '测试同人志',
    name_en: 'Test Doujinshi',
    name_ja: 'テスト同人誌',
    description_zh: '测试同人志中文介绍',
    description_en: 'Test Doujinshi English description',
    description_ja: 'テスト同人誌日本語説明',
    image_url: '/static/products/doujinshi-mockup.jpg',
    tag: 'doujinshi',
    sort_order: 1,
  },
  {
    id: 20,
    name_zh: '测试海报',
    name_en: 'Test Poster',
    name_ja: 'テストポスター',
    description_zh: '测试海报中文介绍',
    description_en: 'Test Poster English description',
    description_ja: 'テストポスター日本語説明',
    image_url: '/static/products/marisa-poster.jpg',
    tag: 'poster',
    sort_order: 2,
  },
];

describe('Products page', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProducts),
      })
    ) as any;
  });

  test('renders products title, subtitle, products cards and copyright note', async () => {
    renderWithRouter([{ path: '/', element: <Products /> }]);

    expect(screen.getByText('社团作品与展会制品')).toBeInTheDocument();
    expect(screen.getByText(/历年同人志/)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('同人小说集《赝饮同醉》')).toBeInTheDocument();
      expect(screen.getByText('《餍饮同醉》主题纪念海报')).toBeInTheDocument();
      expect(screen.getByText('东方印签书签 · 博丽灵梦')).toBeInTheDocument();
      expect(screen.getByText('闪粉亚克力砖 · 桑尼·米尔克')).toBeInTheDocument();
    });

    expect(screen.getByText(/本站图片均为社团实物\/实拍/)).toBeInTheDocument();
  });

  test('supports language switching to English and Japanese with i18n keys', async () => {
    renderWithRouter([{ path: '/', element: <Products /> }]);

    await waitFor(() => {
      expect(screen.getByText('同人小说集《赝饮同醉》')).toBeInTheDocument();
    });

    await i18n.changeLanguage('en');
    await waitFor(() => {
      expect(screen.getByText('Club Works & Exhibition Merch')).toBeInTheDocument();
      expect(screen.getByText('Doujin Novel Anthology "Yan Yin Tong Zui"')).toBeInTheDocument();
      expect(screen.getByText('Poster')).toBeInTheDocument();
    });

    await i18n.changeLanguage('ja');
    await waitFor(() => {
      expect(screen.getByText('サークル作品と頒布物')).toBeInTheDocument();
      expect(screen.getByText('同人小説集『贋飲同酔』')).toBeInTheDocument();
      expect(screen.getByText('ポスター')).toBeInTheDocument();
    });

    // restore to zh
    await i18n.changeLanguage('zh');
  });

  test('renders dynamic multilingual products from API response', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMultilingualProducts),
      })
    ) as any;

    renderWithRouter([{ path: '/', element: <Products /> }]);

    await waitFor(() => {
      expect(screen.getByText('测试同人志')).toBeInTheDocument();
      expect(screen.getByText('测试同人志中文介绍')).toBeInTheDocument();
      expect(screen.getByText('测试海报')).toBeInTheDocument();
    });

    await i18n.changeLanguage('en');
    await waitFor(() => {
      expect(screen.getByText('Test Doujinshi')).toBeInTheDocument();
      expect(screen.getByText('Test Doujinshi English description')).toBeInTheDocument();
      expect(screen.getByText('Test Poster')).toBeInTheDocument();
    });

    await i18n.changeLanguage('ja');
    await waitFor(() => {
      expect(screen.getByText('テスト同人誌')).toBeInTheDocument();
      expect(screen.getByText('テスト同人誌日本語説明')).toBeInTheDocument();
      expect(screen.getByText('テストポスター')).toBeInTheDocument();
    });

    await i18n.changeLanguage('zh');
  });

  test('displays loading state while waiting for API', () => {
    global.fetch = vi.fn(() => new Promise(() => {})) as any;

    renderWithRouter([{ path: '/', element: <Products /> }]);

    expect(screen.getByText('正在获取制品列表...')).toBeInTheDocument();
  });

  test('displays error state when fetch fails', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Network offline'))) as any;

    renderWithRouter([{ path: '/', element: <Products /> }]);

    await waitFor(() => {
      expect(screen.getByText('未能同步最新制品，请稍后重试')).toBeInTheDocument();
    });
  });

  test('sorts products by sort_order ascending', async () => {
    const unsortedProducts = [
      {
        id: 1,
        name_zh: '第三个制品',
        image_url: '/products/3.jpg',
        sort_order: 30,
      },
      {
        id: 2,
        name_zh: '第一个制品',
        image_url: '/products/1.jpg',
        sort_order: 10,
      },
      {
        id: 3,
        name_zh: '第二个制品',
        image_url: '/products/2.jpg',
        sort_order: 20,
      },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(unsortedProducts),
      })
    ) as any;

    renderWithRouter([{ path: '/', element: <Products /> }]);

    await waitFor(() => {
      expect(screen.getByText('第一个制品')).toBeInTheDocument();
    });

    const titles = screen.getAllByRole('heading', { level: 3 }).map((el) => el.textContent);
    expect(titles).toEqual(['第一个制品', '第二个制品', '第三个制品']);
  });
});
