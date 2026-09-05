import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import kyoukoLogo from '../assets/kyouko-logo.png';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // 点击菜单外部时收起汉堡菜单
  useEffect(() => {
    if (!menuOpen) return;
    function onDocClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img src={kyoukoLogo} alt="幽谷响子徽章" className="logo-img" />
          <span className="logo-text">UESTC幻想乡</span>
        </NavLink>

        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} ref={navRef}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>{t('header.welcome')}</NavLink>
          <NavLink to="/home" onClick={() => setMenuOpen(false)}>{t('header.homepage')}</NavLink>
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
