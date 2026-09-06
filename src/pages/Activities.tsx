import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getApiBase } from '../config';
import './Activities.css';

const API_BASE = getApiBase();

type ActivityItem = {
  id: number;
  title_key: string;
  date: string;
  location: string;
  summary_key: string;
  sort_order: number;
  type: string;
};

function Activities() {
  const { t } = useTranslation();
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`${API_BASE}/api/activities`)
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data: ActivityItem[]) => {
        if (active && Array.isArray(data)) {
          setActivities(data);
          setError(false);
        }
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  const translateKey = (key: string, prefix = ''): string => {
    if (!key) return '';
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const translated = t(fullKey);
    if (translated && translated !== fullKey) return translated;
    const direct = t(key);
    if (direct && direct !== key) return direct;
    return key;
  };

  const calls = activities.filter((a) => a.type === 'call');
  const events = activities.filter((a) => a.type !== 'call');

  // Group events by year
  const eventsByYear: Record<string, ActivityItem[]> = {};
  events.forEach((ev) => {
    const year = ev.date?.slice(0, 4) || t('activities.unknown_year', '其他');
    if (!eventsByYear[year]) eventsByYear[year] = [];
    eventsByYear[year].push(ev);
  });
  const sortedYears = Object.keys(eventsByYear).sort((a, b) => b.localeCompare(a));

  if (loading) {
    return (
      <div className="page-container activities-page">
        <header className="activities-header">
          <h1 className="page-title">{t('activities.title')}</h1>
          <p className="activities-subtitle">{t('activities.subtitle')}</p>
        </header>
        <p className="activities-loading">{t('activities.loading')}</p>
      </div>
    );
  }

  return (
    <div className="page-container activities-page">
      <header className="activities-header">
        <h1 className="page-title">{t('activities.title')}</h1>
        <p className="activities-subtitle">{t('activities.subtitle')}</p>
      </header>

      {error && (
        <p className="activities-error">{t('activities.error')}</p>
      )}

      {calls.length > 0 && (
        <section className="activities-calls-section">
          <h2 className="section-title">{t('activities.calls_title')}</h2>
          <div className="activities-calls-grid">
            {calls.map((act) => (
              <article key={act.id} className="activity-card activity-card--call">
                <div className="activity-call-badge">{t('activities.call_badge')}</div>
                <div className="card-top">
                  <span className="activity-date">
                    <span className="meta-label">{t('homepage.date')}:</span> {act.date}
                  </span>
                  {act.location && (
                    <span className="activity-location">
                      <span className="meta-label">{t('homepage.location')}:</span> {act.location}
                    </span>
                  )}
                </div>
                <h3 className="activity-title">
                  {translateKey(act.title_key, 'activities_data')}
                </h3>
                <p className="activity-summary">
                  {translateKey(act.summary_key, 'activities_data')}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="activities-events-section">
        {calls.length > 0 && (
          <h2 className="section-title">{t('activities.past_title')}</h2>
        )}
        {sortedYears.map((year) => (
          <div key={year} className="activities-year-group">
            <h3 className="activities-year-label">{year}</h3>
            <div className="activities-grid">
              {eventsByYear[year].map((act) => (
                <article key={act.id} className="activity-card">
                  <div className="card-top">
                    <span className="activity-date">
                      <span className="meta-label">{t('homepage.date')}:</span> {act.date}
                    </span>
                    {act.location && (
                      <span className="activity-location">
                        <span className="meta-label">{t('homepage.location')}:</span> {act.location}
                      </span>
                    )}
                  </div>
                  <h3 className="activity-title">
                    {translateKey(act.title_key, 'activities_data')}
                  </h3>
                  <p className="activity-summary">
                    {translateKey(act.summary_key, 'activities_data')}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
        {events.length === 0 && !error && (
          <p className="activities-empty">{t('activities.empty')}</p>
        )}
      </section>
    </div>
  );
}

export default Activities;
