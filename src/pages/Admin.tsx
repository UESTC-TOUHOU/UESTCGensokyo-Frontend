import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApiBase } from '../config';
import './Admin.css';

interface Activity {
  id: number;
  title_key: string;
  date: string;
  location: string;
  summary_key: string;
  sort_order: number;
}

interface Member {
  id: number;
  name: string;
  role_key: string;
  description_key: string;
  sort_order: number;
}

export default function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'activities' | 'members'>('activities');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Activity Form State
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [activityForm, setActivityForm] = useState({
    title_key: '',
    date: '',
    location: '',
    summary_key: '',
    sort_order: 0,
  });
  const [showActivityForm, setShowActivityForm] = useState(false);

  // Member Form State
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [memberForm, setMemberForm] = useState({
    name: '',
    role_key: '',
    description_key: '',
    sort_order: 0,
  });
  const [showMemberForm, setShowMemberForm] = useState(false);

  const apiBase = getApiBase();

  const apiFetch = useCallback(
    async (path: string, opts?: RequestInit) => {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        navigate('/admin/login');
        throw new Error('No auth token');
      }

      const res = await fetch(`${apiBase}${path}`, {
        ...opts,
        headers: {
          'Content-Type': 'application/json',
          ...opts?.headers,
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
        throw new Error('Unauthorized');
      }

      return res;
    },
    [apiBase, navigate]
  );

  const fetchActivities = useCallback(async () => {
    try {
      const res = await fetch(`${apiBase}/api/activities`);
      if (res.ok) {
        const data = await res.json();
        setActivities(data || []);
      }
    } catch (err) {
      console.error('Failed to fetch activities:', err);
    }
  }, [apiBase]);

  const fetchMembers = useCallback(async () => {
    try {
      const res = await fetch(`${apiBase}/api/members`);
      if (res.ok) {
        const data = await res.json();
        setMembers(data || []);
      }
    } catch (err) {
      console.error('Failed to fetch members:', err);
    }
  }, [apiBase]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    setLoading(true);
    Promise.all([fetchActivities(), fetchMembers()]).finally(() => setLoading(false));
  }, [navigate, fetchActivities, fetchMembers]);

  const handleLogout = async () => {
    try {
      await apiFetch('/api/admin/logout', { method: 'POST' });
    } catch {
      // ignore error
    } finally {
      localStorage.removeItem('admin_token');
      navigate('/admin/login');
    }
  };

  // ---- Activity Handlers ----
  const handleActivitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      if (editingActivity) {
        const res = await apiFetch('/api/admin/activities', {
          method: 'PUT',
          body: JSON.stringify({ ...activityForm, id: editingActivity.id }),
        });
        if (res.ok) {
          setMessage({ type: 'success', text: '活动更新成功' });
        } else {
          throw new Error('更新失败');
        }
      } else {
        const res = await apiFetch('/api/admin/activities', {
          method: 'POST',
          body: JSON.stringify(activityForm),
        });
        if (res.ok) {
          setMessage({ type: 'success', text: '活动添加成功' });
        } else {
          throw new Error('创建失败');
        }
      }
      setShowActivityForm(false);
      setEditingActivity(null);
      setActivityForm({ title_key: '', date: '', location: '', summary_key: '', sort_order: 0 });
      fetchActivities();
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '操作失败' });
    }
  };

  const handleEditActivity = (act: Activity) => {
    setEditingActivity(act);
    setActivityForm({
      title_key: act.title_key,
      date: act.date,
      location: act.location,
      summary_key: act.summary_key,
      sort_order: act.sort_order,
    });
    setShowActivityForm(true);
  };

  const handleDeleteActivity = async (id: number) => {
    if (!window.confirm('确定要删除此活动吗？')) return;
    try {
      const res = await apiFetch(`/api/admin/activities/delete?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessage({ type: 'success', text: '活动已删除' });
        fetchActivities();
      } else {
        throw new Error('删除失败');
      }
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '删除失败' });
    }
  };

  // ---- Member Handlers ----
  const handleMemberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      if (editingMember) {
        const res = await apiFetch('/api/admin/members', {
          method: 'PUT',
          body: JSON.stringify({ ...memberForm, id: editingMember.id }),
        });
        if (res.ok) {
          setMessage({ type: 'success', text: '成员更新成功' });
        } else {
          throw new Error('更新失败');
        }
      } else {
        const res = await apiFetch('/api/admin/members', {
          method: 'POST',
          body: JSON.stringify(memberForm),
        });
        if (res.ok) {
          setMessage({ type: 'success', text: '成员添加成功' });
        } else {
          throw new Error('创建失败');
        }
      }
      setShowMemberForm(false);
      setEditingMember(null);
      setMemberForm({ name: '', role_key: '', description_key: '', sort_order: 0 });
      fetchMembers();
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '操作失败' });
    }
  };

  const handleEditMember = (m: Member) => {
    setEditingMember(m);
    setMemberForm({
      name: m.name,
      role_key: m.role_key,
      description_key: m.description_key,
      sort_order: m.sort_order,
    });
    setShowMemberForm(true);
  };

  const handleDeleteMember = async (id: number) => {
    if (!window.confirm('确定要删除此成员吗？')) return;
    try {
      const res = await apiFetch(`/api/admin/members/delete?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessage({ type: 'success', text: '成员已删除' });
        fetchMembers();
      } else {
        throw new Error('删除失败');
      }
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '删除失败' });
    }
  };

  return (
    <div className="page-container admin-page">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">内容管理后台</h1>
          <p className="admin-subtitle">维护主页的社团活动与组织架构</p>
        </div>
        <button onClick={handleLogout} className="admin-btn admin-btn-secondary">
          退出登录
        </button>
      </div>

      {message && (
        <div
          className={message.type === 'success' ? 'admin-success-banner' : 'admin-error-banner'}
          role="alert"
        >
          {message.text}
        </div>
      )}

      <div className="admin-tabs">
        <button
          className={`admin-tab-btn ${activeTab === 'activities' ? 'active' : ''}`}
          onClick={() => setActiveTab('activities')}
        >
          社团活动 ({activities.length})
        </button>
        <button
          className={`admin-tab-btn ${activeTab === 'members' ? 'active' : ''}`}
          onClick={() => setActiveTab('members')}
        >
          组织架构与成员 ({members.length})
        </button>
      </div>

      {loading ? (
        <div className="admin-loading">正在加载数据...</div>
      ) : (
        <>
          {activeTab === 'activities' && (
            <div className="admin-section">
              <div className="admin-section-header">
                <h2 className="admin-section-title">活动列表</h2>
                {!showActivityForm && (
                  <button
                    onClick={() => {
                      setEditingActivity(null);
                      setActivityForm({
                        title_key: '',
                        date: '',
                        location: '',
                        summary_key: '',
                        sort_order: activities.length + 1,
                      });
                      setShowActivityForm(true);
                    }}
                    className="admin-btn admin-btn-primary"
                  >
                    + 添加活动
                  </button>
                )}
              </div>

              {showActivityForm && (
                <div className="admin-form-panel">
                  <h3>{editingActivity ? '编辑活动' : '新增活动'}</h3>
                  <form onSubmit={handleActivitySubmit} className="admin-form">
                    <div className="form-group">
                      <label htmlFor="act-title">标题 (i18n Key 或纯文本)</label>
                      <input
                        id="act-title"
                        type="text"
                        required
                        value={activityForm.title_key}
                        onChange={(e) =>
                          setActivityForm({ ...activityForm, title_key: e.target.value })
                        }
                        placeholder="例: activities.th_night 或 东方原画展"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="act-date">日期</label>
                      <input
                        id="act-date"
                        type="text"
                        required
                        value={activityForm.date}
                        onChange={(e) =>
                          setActivityForm({ ...activityForm, date: e.target.value })
                        }
                        placeholder="例: 2026-05-18"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="act-loc">地点</label>
                      <input
                        id="act-loc"
                        type="text"
                        required
                        value={activityForm.location}
                        onChange={(e) =>
                          setActivityForm({ ...activityForm, location: e.target.value })
                        }
                        placeholder="例: 清水河校区 活动中心"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="act-sum">简介 (i18n Key 或纯文本)</label>
                      <textarea
                        id="act-sum"
                        rows={3}
                        required
                        value={activityForm.summary_key}
                        onChange={(e) =>
                          setActivityForm({ ...activityForm, summary_key: e.target.value })
                        }
                        placeholder="例: activities.th_night_desc 或 活动简述..."
/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="act-order">排序权重 (数字越小越靠前)</label>
                      <input
                        id="act-order"
                        type="number"
                        value={activityForm.sort_order}
                        onChange={(e) =>
                          setActivityForm({
                            ...activityForm,
                            sort_order: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div className="admin-form-actions">
                      <button type="submit" className="admin-btn admin-btn-primary">
                        {editingActivity ? '保存修改' : '确认添加'}
                      </button>
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary"
                        onClick={() => {
                          setShowActivityForm(false);
                          setEditingActivity(null);
                        }}
                      >
                        取消
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>标题键/文本</th>
                      <th>日期</th>
                      <th>地点</th>
                      <th>排序</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ textAlign: 'center', padding: '1.5rem' }}>
                          暂无活动记录
                        </td>
                      </tr>
                    ) : (
                      activities.map((act) => (
                        <tr key={act.id}>
                          <td>{act.id}</td>
                          <td>{act.title_key}</td>
                          <td>{act.date}</td>
                          <td>{act.location}</td>
                          <td>{act.sort_order}</td>
                          <td>
                            <div className="admin-table-actions">
                              <button
                                onClick={() => handleEditActivity(act)}
                                className="admin-btn admin-btn-secondary"
                              >
                                编辑
                              </button>
                              <button
                                onClick={() => handleDeleteActivity(act.id)}
                                className="admin-btn admin-btn-danger"
                              >
                                删除
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <div className="admin-section">
              <div className="admin-section-header">
                <h2 className="admin-section-title">成员/部门列表</h2>
                {!showMemberForm && (
                  <button
                    onClick={() => {
                      setEditingMember(null);
                      setMemberForm({
                        name: '',
                        role_key: '',
                        description_key: '',
                        sort_order: members.length + 1,
                      });
                      setShowMemberForm(true);
                    }}
                    className="admin-btn admin-btn-primary"
                  >
                    + 添加成员
                  </button>
                )}
              </div>

              {showMemberForm && (
                <div className="admin-form-panel">
                  <h3>{editingMember ? '编辑成员' : '新增成员'}</h3>
                  <form onSubmit={handleMemberSubmit} className="admin-form">
                    <div className="form-group">
                      <label htmlFor="mem-name">姓名 / 昵称</label>
                      <input
                        id="mem-name"
                        type="text"
                        required
                        value={memberForm.name}
                        onChange={(e) =>
                          setMemberForm({ ...memberForm, name: e.target.value })
                        }
                        placeholder="例: 社长 / 响子"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mem-role">职位 / 部门 (i18n Key 或纯文本)</label>
                      <input
                        id="mem-role"
                        type="text"
                        required
                        value={memberForm.role_key}
                        onChange={(e) =>
                          setMemberForm({ ...memberForm, role_key: e.target.value })
                        }
                        placeholder="例: members.president 或 技术部"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mem-desc">描述 (i18n Key 或纯文本)</label>
                      <textarea
                        id="mem-desc"
                        rows={3}
                        required
                        value={memberForm.description_key}
                        onChange={(e) =>
                          setMemberForm({ ...memberForm, description_key: e.target.value })
                        }
                        placeholder="例: members.president_desc 或 负责社团综合管理..."
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mem-order">排序权重 (数字越小越靠前)</label>
                      <input
                        id="mem-order"
                        type="number"
                        value={memberForm.sort_order}
                        onChange={(e) =>
                          setMemberForm({
                            ...memberForm,
                            sort_order: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div className="admin-form-actions">
                      <button type="submit" className="admin-btn admin-btn-primary">
                        {editingMember ? '保存修改' : '确认添加'}
                      </button>
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary"
                        onClick={() => {
                          setShowMemberForm(false);
                          setEditingMember(null);
                        }}
                      >
                        取消
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>姓名</th>
                      <th>职位</th>
                      <th>描述</th>
                      <th>排序</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ textAlign: 'center', padding: '1.5rem' }}>
                          暂无成员记录
                        </td>
                      </tr>
                    ) : (
                      members.map((mem) => (
                        <tr key={mem.id}>
                          <td>{mem.id}</td>
                          <td>{mem.name}</td>
                          <td>{mem.role_key}</td>
                          <td>{mem.description_key}</td>
                          <td>{mem.sort_order}</td>
                          <td>
                            <div className="admin-table-actions">
                              <button
                                onClick={() => handleEditMember(mem)}
                                className="admin-btn admin-btn-secondary"
                              >
                                编辑
                              </button>
                              <button
                                onClick={() => handleDeleteMember(mem.id)}
                                className="admin-btn admin-btn-danger"
                              >
                                删除
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
