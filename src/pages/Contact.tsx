import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SpellCardFrame from '../components/SpellCardFrame';
import { getApiBase } from '../config';
import './Contact.css';

const apiBase = getApiBase();

// Fallback hardcoded channels (used if API unavailable)
const FALLBACK_CHANNELS = [
  {
    channel_key: 'qq',
    badge: 'QQ 群',
    title_zh: 'UESTC 东方同好交流群', title_en: 'UESTC Touhou Fan QQ Group', title_ja: 'UESTC 東方同好交流群',
    code: '586011595',
    description_zh: '社团官方主群 (586011595)，日常同好闲聊、展会组队、社团活动通知',
    description_en: 'Official club QQ group (586011595) for casual chats, convention teams, and event announcements',
    description_ja: 'サークル公式QQグループ (586011595)、日常チャット・即売会の参加募集・イベント通知',
    link: 'https://qun.qq.com/universal-share/share?ac=1&authKey=8mjKydvsz8LHbqrMOz27w80I1HQOeQWXOAKFFDU1GBw%2FRJYEDwuIJz9DZ34wYhii&busi_data=eyJncm91cENvZGUiOiI1ODYwMTE1OTUiLCJ0b2tlbiI6Ik9iZDlOSFhLWW16TkdEZTdIRGNQNDQ2dEp0MXJuZ1Nac21pZVd0ZFZSaGh4d0xTTHFzdS84MmUzT2FoQ0wyMWUiLCJ1aW4iOiIxMjYyNTczNzUxIn0%3D&data=vfqySi5D239wwJxO9tiO_HvvFSqE0_c-SlUGjBS5XoCv_vEzg_ZqvNA2hfW46mUrHiCKuQYX4WO2I0YugvCCQw&svctype=4&tempid=h5_group_info',
    icon_color: 'vermilion',
    sort_order: 0,
  },
  {
    channel_key: 'github',
    badge: 'GitHub',
    title_zh: 'GitHub 组织', title_en: 'GitHub Organization', title_ja: 'GitHub 組織',
    code: '@UESTC-TOUHOU',
    description_zh: 'UESTC-TOUHOU 开源主页代码库、同人游戏/技术企划协作',
    description_en: 'UESTC-TOUHOU open-source repos, fan game and tech project collaboration',
    description_ja: 'UESTC-TOUHOU OSS リポジトリ、同人ゲーム・技術プロジェクト協力',
    link: 'https://github.com/UESTC-TOUHOU',
    icon_color: 'teal',
    sort_order: 1,
  },
  {
    channel_key: 'discord',
    badge: 'Discord',
    title_zh: 'Discord 社区', title_en: 'Discord Community', title_ja: 'Discord コミュニティ',
    code: 'discord.gg/9QWdhjwvp',
    description_zh: 'UESTC 幻想乡交流群，跨界语音连麦、STG 弹幕避弹练习与海外同好通道',
    description_en: 'UESTC Gensokyo voice chat, STG practice, and international fan channel',
    description_ja: 'UESTC幻想郷の交流サーバー。VCコラボ・STG練習・海外ファン交流',
    link: 'https://discord.gg/9QWdhjwvp',
    icon_color: 'discord',
    sort_order: 2,
  },
];

type Channel = typeof FALLBACK_CHANNELS[0];

const ICONS: Record<string, React.ReactNode> = {
  qq: (
    <svg viewBox="0 0 1024 1024" width="24" height="24" fill="currentColor">
      <path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 512 112 334.7 112 257.5 262.2 261.9 447.9c-28.3 70.7-46.7 113.9-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 258.6 6.1 62.4 6.2 247.2 13.2 258.6-6.1 14.1-23.9-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.4-1 19.4-46.3-14.6-155.8z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  discord: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
};

const ICON_CLASSES: Record<string, string> = {
  vermilion: 'qq-icon',
  teal: 'github-icon',
  discord: 'discord-icon',
};

const CARD_CLASSES: Record<string, string> = {
  qq: 'qq-card',
  github: 'github-card',
  discord: 'discord-card',
};

function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'zh';

  const [channels, setChannels] = useState<Channel[]>(FALLBACK_CHANNELS);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusKey, setStatusKey] = useState<'' | 'sending' | 'success' | 'error'>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`${apiBase}/api/contact-channels`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setChannels(data);
      })
      .catch(() => {/* keep fallback */});
  }, []);

  const getTitle = (ch: Channel) => {
    if (lang.startsWith('en')) return ch.title_en || ch.title_zh;
    if (lang.startsWith('ja')) return ch.title_ja || ch.title_zh;
    return ch.title_zh;
  };
  const getDesc = (ch: Channel) => {
    if (lang.startsWith('en')) return ch.description_en || ch.description_zh;
    if (lang.startsWith('ja')) return ch.description_ja || ch.description_zh;
    return ch.description_zh;
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatusKey('sending');
    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatusKey('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatusKey('error');
    }
  };

  const getActionLabel = (key: string) => {
    const map: Record<string, string> = {
      qq: t('contact.qq_action'),
      github: t('contact.github_action'),
      discord: t('contact.discord_action'),
    };
    return map[key] || t('contact.copy_link');
  };

  const getCopyLabel = (ch: Channel, copied: boolean) => {
    if (copied) return t('contact.copied');
    if (ch.channel_key === 'qq') return '复制群号';
    return t('contact.copy_link');
  };

  const getCopyText = (ch: Channel) => {
    if (ch.channel_key === 'qq') return ch.code;
    return ch.link;
  };

  const getQrTip = (key: string) => {
    const map: Record<string, string> = {
      qq: '扫码一键加入群聊',
      github: '扫码访问 GitHub',
      discord: '扫码加入 Discord',
    };
    return map[key] || '扫码访问';
  };

  return (
    <div className="page-container contact-page">
      <div className="contact-hero">
        <div className="contact-emblem">響</div>
        <h1 className="page-title">{t('contact.title')}</h1>
        <p className="contact-subtitle">{t('contact.channels_subtitle')}</p>
      </div>

      {/* 社区道标卡片 */}
      <div className="contact-channels-grid">
        {channels.map((ch) => (
          <div key={ch.channel_key} className={`channel-card ${CARD_CLASSES[ch.channel_key] || ''}`}>
            <div className="channel-badge">{ch.badge}</div>
            <div className="channel-header">
              <div className={`channel-icon-box ${ICON_CLASSES[ch.icon_color] || 'qq-icon'}`}>
                {ICONS[ch.channel_key] || ICONS.qq}
              </div>
              <div>
                <h2 className="channel-title">{getTitle(ch)}</h2>
                <span className="channel-code">{ch.channel_key === 'qq' ? `群号: ${ch.code}` : ch.code}</span>
              </div>
            </div>
            <p className="channel-desc">{getDesc(ch)}</p>
            <div className="channel-qr-wrap">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=4&data=${encodeURIComponent(ch.link)}`}
                alt={`${ch.badge} 二维码`}
                className="channel-qr-img"
                loading="lazy"
              />
              <span className="channel-qr-tip">{getQrTip(ch.channel_key)}</span>
            </div>
            <div className="channel-actions">
              <a
                href={ch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-btn channel-btn-primary"
              >
                {getActionLabel(ch.channel_key)}
              </a>
              <button
                type="button"
                className="channel-btn channel-btn-ghost"
                onClick={() => copyToClipboard(getCopyText(ch), ch.channel_key)}
              >
                {getCopyLabel(ch, copiedKey === ch.channel_key)}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 底部留言表单折叠卡片 */}
      <div className="contact-form-section">
        <button
          type="button"
          className="contact-toggle-btn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          <span>✉ {t('contact.leave_message_toggle')}</span>
          <span className="toggle-arrow">{showForm ? '▲' : '▼'}</span>
        </button>

        {showForm && (
          <SpellCardFrame variant="green" className="contact-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contact.form_name')}</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form_name')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.form_email')}</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@uestc.edu.cn"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.form_message')}</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form_message')}
                />
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={statusKey === 'sending'}
              >
                {statusKey === 'sending' ? t('contact.status_sending') : t('contact.form_submit')}
              </button>
            </form>

            {statusKey && statusKey !== 'sending' && (
              <p
                className={`form-status ${statusKey === 'success' ? 'status-success' : 'status-error'}`}
                role="status"
              >
                {statusKey === 'success' ? t('contact.status_success') : t('contact.status_error')}
              </p>
            )}
          </SpellCardFrame>
        )}
      </div>
    </div>
  );
}

export default Contact;
