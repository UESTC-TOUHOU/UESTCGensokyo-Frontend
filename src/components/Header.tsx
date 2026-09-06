import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import kyoukoLogo from '../assets/kyouko-logo.png';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // 点击菜单外部或按 ESC 时收起汉堡菜单
  useEffect(() => {
    if (!menuOpen) return;
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  // 视口变宽时自动收起移动端菜单
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="site-header wafuu-pattern">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img src={kyoukoLogo} alt="幽谷响子徽章" className="logo-img" />
          <span className="logo-text">UESTC幻想乡</span>
        </NavLink>

        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} ref={navRef}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>{t('header.welcome')}</NavLink>
          <NavLink to="/home" onClick={() => setMenuOpen(false)}>{t('header.homepage')}</NavLink>
          <NavLink to="/activities" onClick={() => setMenuOpen(false)}>{t('header.activities')}</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>{t('header.products')}</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>{t('header.contact')}</NavLink>
        </nav>

        <div className="header-actions">
          <div className="language-switcher">
            <button
              className={i18n.language === 'zh' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => changeLanguage('zh')}
              aria-label="中文"
            >中</button>
            <button
              className={i18n.language === 'en' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => changeLanguage('en')}
              aria-label="English"
            >EN</button>
            <button
              className={i18n.language === 'ja' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => changeLanguage('ja')}
              aria-label="日本語"
            >日</button>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀' : '🌙'}
          </button>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
