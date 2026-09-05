import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SpellCardFrame from '../components/SpellCardFrame';
import './Contact.css';

const apiBase = import.meta.env.VITE_API_BASE || 'http://debian:18080';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusKey, setStatusKey] = useState<'' | 'sending' | 'success' | 'error'>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
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
      <h1 className="page-title">{t('contact.title')}</h1>
      <SpellCardFrame variant="purple" className="contact-card">
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
    </div>
  );
}

export default Contact;
