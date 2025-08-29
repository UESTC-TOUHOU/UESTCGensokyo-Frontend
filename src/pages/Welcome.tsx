import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import './Welcome.css';

function Welcome() {
  const { t } = useTranslation();

  return (
    <div className="welcome-container">
      <h1>{t('welcome.title')}</h1>
      <div className="logo-animation-wrapper">
        <img src={logo} className="animated-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Welcome;