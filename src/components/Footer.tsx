import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="幽谷响子徽章" className="footer-logo" />
          <div>
            <p className="footer-title">UESTC幻想乡</p>
            <p className="footer-sub">{t('footer.slogan')}</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>{t('footer.copyright')}</p>
          <p className="footer-disclaimer">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
