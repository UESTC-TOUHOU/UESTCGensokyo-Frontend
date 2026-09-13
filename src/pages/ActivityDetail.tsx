import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getApiBase } from '../config';
import './DetailPage.css';

const API_BASE = getApiBase();

type ActivityData = {
  id: number;
  title_key: string;
  date: string;
  location: string;
  summary_key: string;
  type: string;
  image_url: string;
  detail_content_zh: string;
  detail_content_en: string;
  detail_content_ja: string;
  related_link: string;
};

function ActivityDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activity, setActivity] = useState<ActivityData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_BASE + '/api/activities')
      .then(res => res.json())
      .then((data: ActivityData[]) => {
        const found = data.find(a => a.id === Number(id));
        setActivity(found || null);
      })
      .catch(() => setActivity(null))
      .finally(() => setLoading(false));
  }, [id]);

  const translateKey = (key: string, prefix = ''): string => {
    if (!key) return '';
    const fullKey = prefix ? prefix + '.' + key : key;
    const translated = t(fullKey);
    if (translated && translated !== fullKey) return translated;
    const direct = t(key);
    if (direct && direct !== key) return direct;
    return key;
  };

  const resolveImageUrl = (url: string): string => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return API_BASE ? API_BASE + url : url;
  };

  if (loading) return <div className="page-container detail-page"><p>{t('common.loading')}</p></div>;
  if (!activity) return <div className="page-container detail-page"><p>{t('common.not_found')}</p></div>;

  const lang = i18n.language || 'zh';
  const detailKey = ('detail_content_' + (lang.startsWith('en') ? 'en' : lang.startsWith('ja') ? 'ja' : 'zh')) as keyof ActivityData;
  const detail = activity[detailKey] as string;

  return (
    <div className="page-container detail-page">
      <button className="detail-back-btn" onClick={() => navigate('/activities')}>
        ← {t('common.back')}
      </button>

      {activity.image_url && (
        <div className="detail-hero-image">
          <img src={resolveImageUrl(activity.image_url)} alt={translateKey(activity.title_key, 'activities_data')} />
        </div>
      )}

      <h1 className="detail-title">{translateKey(activity.title_key, 'activities_data')}</h1>

      <div className="detail-meta">
        <span>{activity.date}</span>
        {activity.location && <span>{activity.location}</span>}
        <span className="detail-meta-tag">
          {activity.type === 'call' ? t('activities.call_badge') : t('activities.past_title')}
        </span>
      </div>

      <p className="detail-summary">{translateKey(activity.summary_key, 'activities_data')}</p>

      {detail && (
        <div className="detail-body">
          {detail.split('\n').filter(Boolean).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {activity.related_link && (
        <a href={activity.related_link} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
          {t('detail.relatedLink')} ↗
        </a>
      )}
    </div>
  );
}

export default ActivityDetail;
