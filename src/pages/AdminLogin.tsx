import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApiBase } from '../config';
import './Admin.css';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const apiBase = getApiBase();

    try {
      const res = await fetch(`${apiBase}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('admin_token', data.token);
        navigate('/admin');
      } else if (res.status === 401) {
        setError('密码错误，请重试');
      } else if (res.status === 429) {
        const retryAfter = res.headers.get('Retry-After') || '60';
        setError(`尝试次数过多，请在 ${retryAfter} 秒后再试`);
      } else if (res.status === 503) {
        setError('管理密码未配置，请联系系统维护者');
      } else {
        setError('登录失败，请稍后重试');
      }
    } catch {
      setError('网络连接失败，请确认后端服务状态');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container admin-login-page">
      <div className="admin-login-card">
        <h1 className="admin-title">管理后台登录</h1>
        <p className="admin-subtitle">UESTC幻想乡 · 内部内容管理</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label htmlFor="admin-password">管理员密码</label>
            <input
              type="password"
              id="admin-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="输入管理员密码"
              required
              autoFocus
            />
          </div>

          {error && <div className="admin-error-banner" role="alert">{error}</div>}

          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={loading}
          >
            {loading ? '正在验证...' : '登录'}
          </button>
        </form>
      </div>
    </div>
  );
}
