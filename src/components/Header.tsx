import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          UESTC-Touhou
        </NavLink>
        <nav className="main-nav">
          <NavLink to="/">{t('header.welcome')}</NavLink>
          <NavLink to="/home">{t('header.homepage')}</NavLink>
          <NavLink to="/products">{t('header.products')}</NavLink>
          <NavLink to="/contact">{t('header.contact')}</NavLink>
        </nav>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('zh')} disabled={i18n.language === 'zh'}>中</button>
          <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>EN</button>
          <button onClick={() => changeLanguage('ja')} disabled={i18n.language === 'ja'}>日</button>
        </div>
      </div>
    </header>
  );
}

export default Header;