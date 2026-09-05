import { describe, test, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { renderWithRouter, i18n } from '../../test/test-utils';

describe('Header', () => {
  test('renders all navigation links', () => {
    renderWithRouter([
      { path: '/', element: <Header /> },
      { path: '/home', element: <div>home</div> },
      { path: '/products', element: <div>products</div> },
      { path: '/contact', element: <div>contact</div> },
    ]);

    expect(screen.getByText('欢迎')).toBeInTheDocument();
    expect(screen.getByText('主页')).toBeInTheDocument();
    expect(screen.getByText('产品')).toBeInTheDocument();
    expect(screen.getByText('联系我们')).toBeInTheDocument();
  });

  test('switches language on button click', async () => {
    renderWithRouter([
      { path: '/', element: <Header /> },
      { path: '/home', element: <div>home</div> },
    ]);

    const enButton = screen.getByRole('button', { name: 'English' });
    enButton.click();
    // changeLanguage 是异步的：等待 i18n 状态更新并重渲染后再断言。
    await waitFor(() => {
      expect(screen.getByText('Contact')).toBeInTheDocument();
      expect(i18n.language).toBe('en');
    });
  });

  test('toggles mobile hamburger menu when toggle button is clicked', async () => {
    renderWithRouter([
      { path: '/', element: <Header /> },
      { path: '/home', element: <div>home</div> },
    ]);

    const menuToggle = screen.getByRole('button', { name: '打开菜单' });
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');

    menuToggle.click();
    await waitFor(() => {
      expect(menuToggle).toHaveAttribute('aria-expanded', 'true');
    });

    menuToggle.click();
    await waitFor(() => {
      expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
    });
  });
});

describe('Layout', () => {
  test('renders header, outlet and footer', () => {
    renderWithRouter([
      {
        path: '/',
        element: <Layout />,
      },
    ]);

    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header <header>
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer <footer>
  });
});

describe('Footer', () => {
  test('renders copyright', () => {
    renderWithRouter([{ path: '/', element: <Footer /> }]);
    expect(screen.getByText(/© 2026 UESTC幻想乡/)).toBeInTheDocument();
  });
});
