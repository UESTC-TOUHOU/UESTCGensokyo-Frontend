import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SpellCardFrame from '../components/SpellCardFrame';
import { getApiBase } from '../config';
import './Contact.css';

const apiBase = getApiBase();

const QQ_GROUP_LINK =
  'https://qun.qq.com/universal-share/share?ac=1&authKey=8mjKydvsz8LHbqrMOz27w80I1HQOeQWXOAKFFDU1GBw%2FRJYEDwuIJz9DZ34wYhii&busi_data=eyJncm91cENvZGUiOiI1ODYwMTE1OTUiLCJ0b2tlbiI6Ik9iZDlOSFhLWW16TkdEZTdIRGNQNDQ2dEp0MXJuZ1Nac21pZVd0ZFZSaGh4d0xTTHFzdS84MmUzT2FoQ0wyMWUiLCJ1aW4iOiIxMjYyNTczNzUxIn0%3D&data=vfqySi5D239wwJxO9tiO_HvvFSqE0_c-SlUGjBS5XoCv_vEzg_ZqvNA2hfW46mUrHiCKuQYX4WO2I0YugvCCQw&svctype=4&tempid=h5_group_info';
const GITHUB_LINK = 'https://github.com/UESTC-TOUHOU';
const DISCORD_LINK = 'https://discord.gg/9QWdhjwvp';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusKey, setStatusKey] = useState<'' | 'sending' | 'success' | 'error'>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

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
        headers: {
          'Content-Type': 'application/json',
        },
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

  return (
    <div className="page-container contact-page">
      <div className="contact-hero">
        <div className="contact-emblem">響</div>
        <h1 className="page-title">{t('contact.title')}</h1>
        <p className="contact-subtitle">{t('contact.channels_subtitle')}</p>
      </div>

      {/* 社区三大道标卡片 */}
      <div className="contact-channels-grid">
        {/* QQ 群卡片 */}
        <div className="channel-card qq-card">
          <div className="channel-badge">QQ 群</div>
          <div className="channel-header">
            <div className="channel-icon-box qq-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2.1 21.9l4.98-1.25C8.52 21.48 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
              </svg>
            </div>
            <div>
              <h2 className="channel-title">{t('contact.qq_title')}</h2>
              <span className="channel-code">群号: 586011595</span>
            </div>
          </div>
          <p className="channel-desc">{t('contact.qq_desc')}</p>
          <div className="channel-qr-wrap">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=4&data=${encodeURIComponent(
                QQ_GROUP_LINK
              )}`}
              alt="QQ 群二维码"
              className="channel-qr-img"
              loading="lazy"
            />
            <span className="channel-qr-tip">扫码一键加入群聊</span>
          </div>
          <div className="channel-actions">
            <a
              href={QQ_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-btn channel-btn-primary"
            >
              {t('contact.qq_action')}
            </a>
            <button
              type="button"
              className="channel-btn channel-btn-ghost"
              onClick={() => copyToClipboard('586011595', 'qq')}
            >
              {copiedKey === 'qq' ? t('contact.copied') : '复制群号'}
            </button>
          </div>
        </div>

        {/* GitHub 组织卡片 */}
        <div className="channel-card github-card">
          <div className="channel-badge">GitHub</div>
          <div className="channel-header">
            <div className="channel-icon-box github-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div>
              <h2 className="channel-title">{t('contact.github_title')}</h2>
              <span className="channel-code">@UESTC-TOUHOU</span>
            </div>
          </div>
          <p className="channel-desc">{t('contact.github_desc')}</p>
          <div className="channel-qr-wrap">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=4&data=${encodeURIComponent(
                GITHUB_LINK
              )}`}
              alt="GitHub 组织二维码"
              className="channel-qr-img"
              loading="lazy"
            />
            <span className="channel-qr-tip">扫码访问 GitHub</span>
          </div>
          <div className="channel-actions">
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-btn channel-btn-primary"
            >
              {t('contact.github_action')}
            </a>
            <button
              type="button"
              className="channel-btn channel-btn-ghost"
              onClick={() => copyToClipboard(GITHUB_LINK, 'gh')}
            >
              {copiedKey === 'gh' ? t('contact.copied') : t('contact.copy_link')}
            </button>
          </div>
        </div>

        {/* Discord 社区卡片 */}
        <div className="channel-card discord-card">
          <div className="channel-badge">Discord</div>
          <div className="channel-header">
            <div className="channel-icon-box discord-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
            <div>
              <h2 className="channel-title">{t('contact.discord_title')}</h2>
              <span className="channel-code">discord.gg/9QWdhjwvp</span>
            </div>
          </div>
          <p className="channel-desc">{t('contact.discord_desc')}</p>
          <div className="channel-qr-wrap">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=4&data=${encodeURIComponent(
                DISCORD_LINK
              )}`}
              alt="Discord 服务器二维码"
              className="channel-qr-img"
              loading="lazy"
            />
            <span className="channel-qr-tip">扫码加入 Discord</span>
          </div>
          <div className="channel-actions">
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-btn channel-btn-primary"
            >
              {t('contact.discord_action')}
            </a>
            <button
              type="button"
              className="channel-btn channel-btn-ghost"
              onClick={() => copyToClipboard(DISCORD_LINK, 'dc')}
            >
              {copiedKey === 'dc' ? t('contact.copied') : t('contact.copy_link')}
            </button>
          </div>
        </div>
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

