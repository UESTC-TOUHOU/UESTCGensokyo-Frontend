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
    sort_order: 1
  },
  {
    id: 2,
    name: 'products.poster_marisa_title',
    category: 'poster',
    description_key: 'products.poster_marisa_desc',
    image_url: '/products/marisa-poster.jpg',
    sort_order: 3
  },
  {
    id: 3,
    name: 'products.bookmark_reimu_title',
    category: 'bookmark',
    description_key: 'products.bookmark_reimu_desc',
    image_url: '/products/bookmark-reimu.jpg',
    sort_order: 4
  },
  {
    id: 4,
    name: 'products.acrylic_sunny_title',
    category: 'acrylic',
    description_key: 'products.acrylic_sunny_desc',
    image_url: '/products/acrylic-sunny.jpg',
    sort_order: 10
  }
];

describe('Products page', () => {
  beforeEach(() => {
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

  test('supports language switching to English and Japanese', async () => {
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
});
