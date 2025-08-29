import { useTranslation } from 'react-i18next';
import './Homepage.css';

function Homepage() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <section className="homepage-section">
        <h1>{t('homepage.title')}</h1>
        <p>{t('homepage.mission_text')}</p>
      </section>
      <section className="homepage-section">
        <h2>{t('homepage.mission_title')}</h2>
        <p>{t('homepage.mission_text')}</p>
      </section>
      <section className="homepage-section">
        <h2>{t('homepage.team_title')}</h2>
        <p>{t('homepage.team_text')}</p>
      </section>
    </div>
  );
}

export default Homepage;