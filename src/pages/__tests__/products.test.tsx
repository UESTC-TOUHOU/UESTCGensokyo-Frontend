import { describe, test, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import Products from '../Products';
import { renderWithRouter, i18n } from '../../test/test-utils';

describe('Products page', () => {
  test('renders products title, subtitle, products cards and copyright note', () => {
    renderWithRouter([{ path: '/', element: <Products /> }]);

    expect(screen.getByText('社团作品与展会制品')).toBeInTheDocument();
    expect(screen.getByText(/历年同人志/)).toBeInTheDocument();
    expect(screen.getByText(/本站图片均为社团实物\/实拍/)).toBeInTheDocument();

    // Verify key products from different categories
    expect(screen.getByText('同人小说集《赝饮同醉》')).toBeInTheDocument();
    expect(screen.getByText('《餍饮同醉》主题纪念海报')).toBeInTheDocument();
    expect(screen.getByText('东方印签书签 · 博丽灵梦')).toBeInTheDocument();
    expect(screen.getByText('闪粉亚克力砖 · 桑尼·米尔克')).toBeInTheDocument();

    // Verify tags
    expect(screen.getAllByText('同人志').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('海报')).toBeInTheDocument();
    expect(screen.getAllByText('书签').length).toBe(6);
    expect(screen.getAllByText('亚克力制品').length).toBe(8);
  });

  test('supports language switching to English and Japanese', async () => {
    renderWithRouter([{ path: '/', element: <Products /> }]);

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
