import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <p>{t('footer.copyright')}</p>
    </footer>
  );
}

export default Footer;