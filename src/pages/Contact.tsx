import React, { useState } from 'react'; // 导入 useState
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();

  // 1. 使用 state 来管理表单数据
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 用于显示提交状态

  // 更新 state 的函数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('Sending...'); // 提示正在发送

    try {
      // 3. 发送 HTTP POST 请求到你的后端 API
      const response = await fetch('https://your-backend-api.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // 将表单数据转换为 JSON 字符串
      });

      if (response.ok) {
        // 5. 根据后端成功响应给出反馈
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // 清空表单
      } else {
        // 5. 根据后端失败响应给出反馈
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="page-container">
      <h1>{t('contact.title')}</h1>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          {/* ... input 和 textarea 绑定了 value 和 onChange ... */}
          <div className="form-group">
            <label htmlFor="name">{t('contact.form_name')}</label>
            <input type="text" id="name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.form_email')}</label>
            <input type="email" id="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.form_message')}</label>
            <textarea id="message" rows={5} required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={status === 'Sending...'}>
            {status === 'Sending...' ? 'Sending...' : t('contact.form_submit')}
          </button>
        </form>
        {/* 显示提交状态信息 */}
        {status && <p className="form-status">{status}</p>}
      </div>
    </div>
  );
}

export default Contact;