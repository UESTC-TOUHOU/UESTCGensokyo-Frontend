import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import heroAbout from '../assets/hero-about.jpg';
import { getApiBase } from '../config';
import './Homepage.css';

const API_BASE = getApiBase();

type ActivityItem = {
  id: number;
  title_key: string;
  date: string;
  location: string;
  summary_key: string;
  sort_order: number;
};

type MemberItem = {
  id: number;
  name: string;
  role_key: string;
  description_key: string;
  sort_order: number;
};

const FALLBACK_ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    title_key: 'seed_activity_welcome',
    date: '每年秋季 (9-10月)',
    location: '清水河校区 百团大战展台',
    summary_key: 'seed_activity_welcome_summary',
    sort_order: 1,
  },
  {
    id: 2,
    title_key: 'act_btdz_2023',
    date: '2023-09',
    location: '电子科技大学 / 线上',
    summary_key: 'act_btdz_2023_summary',
    sort_order: 2,
  },
  {
    id: 3,
    title_key: 'act_haru_2021',
    date: '2021-09',
    location: 'Bilibili / 线上发布',
    summary_key: 'act_haru_2021_summary',
    sort_order: 3,
  },
];

const FALLBACK_MEMBERS: MemberItem[] = [
  {
    id: 1,
    name: 'UESTC幻想乡 理事会',
    role_key: 'seed_role_core',
    description_key: 'seed_member_core_summary',
    sort_order: 1,
  },
  {
    id: 2,
    name: '技术研发组',
    role_key: 'role_tech_lead',
    description_key: 'desc_tech_lead',
    sort_order: 2,
  },
  {
    id: 3,
    name: '同人创作组',
    role_key: 'role_art_lead',
    description_key: 'desc_art_lead',
    sort_order: 3,
  },
  {
    id: 4,
    name: '游戏体验组',
    role_key: 'role_stg_lead',
    description_key: 'desc_stg_lead',
    sort_order: 4,
  },
];

function Homepage() {
  const { t } = useTranslation();

  const [activities, setActivities] = useState<ActivityItem[]>(FALLBACK_ACTIVITIES);
  const [activitiesLoading, setActivitiesLoading] = useState(true);
  const [activitiesError, setActivitiesError] = useState(false);

  const [members, setMembers] = useState<MemberItem[]>(FALLBACK_MEMBERS);
  const [membersLoading, setMembersLoading] = useState(true);
  const [membersError, setMembersError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch(`${API_BASE}/api/activities`)
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data: ActivityItem[]) => {
        if (active && Array.isArray(data) && data.length > 0) {
          setActivities(data);
          setActivitiesError(false);
        }
      })
      .catch(() => {
        if (active) setActivitiesError(true);
      })
      .finally(() => {
        if (active) setActivitiesLoading(false);
      });

    fetch(`${API_BASE}/api/members`)
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data: MemberItem[]) => {
        if (active && Array.isArray(data) && data.length > 0) {
          setMembers(data);
          setMembersError(false);
        }
      })
      .catch(() => {
        if (active) setMembersError(true);
      })
      .finally(() => {
        if (active) setMembersLoading(false);
      });

    return () => {
      active = false;
    };
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

  return (
    <div className="page-container homepage-container">
      {/* 英雄封面横幅 */}
      <div className="about-hero spellcard-frame">
        <img src={heroAbout} alt="UESTC幻想乡 暮樱幽幽子" className="about-hero-img" />
        <div className="about-hero-overlay">
          <div className="spellcard-banner">UESTC-TOUHOU</div>
          <h1 className="about-hero-title">{t('homepage.title')}</h1>
          <p className="about-hero-sub">{t('homepage.subtitle')}</p>
        </div>
      </div>

      {/* 第一区块：社团简介 */}
      <section className="homepage-section intro-section">
        <h2 className="section-title">{t('homepage.intro_title')}</h2>
        <div className="intro-text">
          <p>{t('homepage.intro_p1')}</p>
          <p>{t('homepage.intro_p2')}</p>
        </div>
        <div className="intro-features">
          <div className="feature-card">
            <div className="feature-marker">◆</div>
            <h3>{t('homepage.intro_feature1_title')}</h3>
            <p>{t('homepage.intro_feature1_desc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-marker">◆</div>
            <h3>{t('homepage.intro_feature2_title')}</h3>
            <p>{t('homepage.intro_feature2_desc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-marker">◆</div>
            <h3>{t('homepage.intro_feature3_title')}</h3>
            <p>{t('homepage.intro_feature3_desc')}</p>
          </div>
        </div>
      </section>

      {/* 第二区块：社团活动 */}
      <section className="homepage-section activities-section">
        <h2 className="section-title">{t('homepage.activities_title')}</h2>
        {activitiesLoading && (
          <p className="state-notice loading-notice">{t('homepage.activities_loading')}</p>
        )}
        {activitiesError && (
          <p className="state-notice error-notice">{t('homepage.activities_error')}</p>
        )}
        <div className="activities-grid">
          {activities.map((act) => (
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
      </section>

      {/* 第三区块：组织架构 */}
      <section className="homepage-section members-section">
        <h2 className="section-title">{t('homepage.members_title')}</h2>
        {membersLoading && (
          <p className="state-notice loading-notice">{t('homepage.members_loading')}</p>
        )}
        {membersError && (
          <p className="state-notice error-notice">{t('homepage.members_error')}</p>
        )}
        <div className="members-grid">
          {members.map((m) => (
            <article key={m.id} className="member-card">
              <div className="member-avatar-placeholder">
                <span>{m.name.slice(0, 1)}</span>
              </div>
              <div className="member-info">
                <h3 className="member-name">{m.name}</h3>
                <h4 className="member-role">
                  {translateKey(m.role_key, 'members_data')}
                </h4>
                <p className="member-desc">
                  {translateKey(m.description_key, 'members_data')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
