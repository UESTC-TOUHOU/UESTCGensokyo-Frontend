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
  type: string;
}

interface Member {
  id: number;
  name: string;
  role_key: string;
  description_key: string;
  sort_order: number;
}

interface Product {
  id: number;
  name_zh: string;
  name_en: string;
  name_ja: string;
  description_zh: string;
  description_en: string;
  description_ja: string;
  image_url: string;
  tag: string;
  sort_order: number;
}

interface ProductTag {
  id: number;
  tag_key: string;
  name_zh: string;
  name_en: string;
  name_ja: string;
  sort_order: number;
}

export default function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'activities' | 'members' | 'products' | 'product-tags'>('activities');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [productTags, setProductTags] = useState<ProductTag[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);

  // Product Tag Form State
  const [editingProductTag, setEditingProductTag] = useState<ProductTag | null>(null);
  const [productTagForm, setProductTagForm] = useState({
    tag_key: '',
    name_zh: '',
    name_en: '',
    name_ja: '',
    sort_order: 0,
  });
  const [showProductTagForm, setShowProductTagForm] = useState(false);

  // Activity Form State
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [activityForm, setActivityForm] = useState({
    title_key: '',
    date: '',
    location: '',
    summary_key: '',
    sort_order: 0,
    type: 'event',
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

  // Product Form State
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productForm, setProductForm] = useState({
    name_zh: '',
    name_en: '',
    name_ja: '',
    description_zh: '',
    description_en: '',
    description_ja: '',
    image_url: '',
    tag: 'acrylic',
    sort_order: 0,
  });
  const [showProductForm, setShowProductForm] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const apiBase = getApiBase();

  const apiFetch = useCallback(
    async (path: string, opts?: RequestInit) => {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        navigate('/admin/login');
        throw new Error('No auth token');
      }

      const isFormData = opts?.body instanceof FormData;
      const headers: HeadersInit = {
        Authorization: `Bearer ${token}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        ...opts?.headers,
      };

      const res = await fetch(`${apiBase}${path}`, {
        ...opts,
        headers,
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
        setActivities(Array.isArray(data) ? data : []);
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
        setMembers(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to fetch members:', err);
    }
  }, [apiBase]);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch(`${apiBase}/api/products`);
      if (res.ok) {
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  }, [apiBase]);

  const fetchProductTags = useCallback(async () => {
    try {
      const res = await fetch(`${apiBase}/api/product-tags`);
      if (res.ok) {
        const data = await res.json();
        setProductTags(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to fetch product tags:', err);
    }
  }, [apiBase]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    setLoading(true);
    Promise.all([fetchActivities(), fetchMembers(), fetchProducts(), fetchProductTags()]).finally(() =>
      setLoading(false)
    );
  }, [navigate, fetchActivities, fetchMembers, fetchProducts, fetchProductTags]);

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
      setActivityForm({ title_key: '', date: '', location: '', summary_key: '', sort_order: 0, type: 'event' });
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
      type: act.type || 'event',
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

  // ---- Product Handlers ----
  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    try {
      if (editingProduct) {
        const res = await apiFetch('/api/admin/products', {
          method: 'PUT',
          body: JSON.stringify({ ...productForm, id: editingProduct.id }),
        });
        if (res.ok) {
          setMessage({ type: 'success', text: '制品更新成功' });
        } else {
          throw new Error('更新失败');
        }
      } else {
        const res = await apiFetch('/api/admin/products', {
          method: 'POST',
          body: JSON.stringify(productForm),
        });
        if (res.ok) {
          setMessage({ type: 'success', text: '制品添加成功' });
        } else {
          throw new Error('创建失败');
        }
      }
      setShowProductForm(false);
      setEditingProduct(null);
      setProductForm({
        name_zh: '',
        name_en: '',
        name_ja: '',
        description_zh: '',
        description_en: '',
        description_ja: '',
        image_url: '',
        tag: 'acrylic',
        sort_order: 0,
      });
      fetchProducts();
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '操作失败' });
    }
  };

  const handleEditProduct = (p: Product) => {
    setEditingProduct(p);
    setProductForm({
      name_zh: p.name_zh || '',
      name_en: p.name_en || '',
      name_ja: p.name_ja || '',
      description_zh: p.description_zh || '',
      description_en: p.description_en || '',
      description_ja: p.description_ja || '',
      image_url: p.image_url || '',
      tag: p.tag || 'acrylic',
      sort_order: p.sort_order || 0,
    });
    setShowProductForm(true);
  };

  const handleDeleteProduct = async (id: number) => {
    if (!window.confirm('确定要删除此制品吗？')) return;
    try {
      const res = await apiFetch(`/api/admin/products/delete?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessage({ type: 'success', text: '制品已删除' });
        fetchProducts();
      } else {
        throw new Error('删除失败');
      }
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '删除失败' });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setUploadingImage(true);
    setMessage(null);
    try {
      const res = await apiFetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setProductForm((prev) => ({ ...prev, image_url: data.url }));
        setMessage({ type: 'success', text: '图片上传成功' });
      } else {
        const errText = await res.text();
        throw new Error(errText || '上传图片失败');
      }
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '上传图片失败' });
    } finally {
      setUploadingImage(false);
      e.target.value = '';
    }
  };

  // ---- Product Tag Handlers ----
  const handleProductTagSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const tagKey = productTagForm.tag_key.trim();
    const nameZh = productTagForm.name_zh.trim();
    const nameEn = productTagForm.name_en.trim();
    const nameJa = productTagForm.name_ja.trim();

    if (!tagKey) {
      setMessage({ type: 'error', text: '标签标识 (tag_key) 不能为空' });
      return;
    }
    if (!nameZh || !nameEn || !nameJa) {
      setMessage({ type: 'error', text: '标签必须提供三种语言名称（中文、英文、日文均必填）' });
      return;
    }

    try {
      const payload = {
        tag_key: tagKey,
        name_zh: nameZh,
        name_en: nameEn,
        name_ja: nameJa,
        sort_order: productTagForm.sort_order,
      };

      if (editingProductTag) {
        const res = await apiFetch('/api/admin/product-tags', {
          method: 'PUT',
          body: JSON.stringify({ ...payload, id: editingProductTag.id }),
        });
        if (res.ok) {
          setMessage({ type: 'success', text: '制品标签更新成功' });
        } else {
          const errText = await res.text();
          throw new Error(errText || '更新失败');
        }
      } else {
        const res = await apiFetch('/api/admin/product-tags', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setMessage({ type: 'success', text: '制品标签添加成功' });
        } else {
          const errText = await res.text();
          throw new Error(errText || '创建失败');
        }
      }
      setShowProductTagForm(false);
      setEditingProductTag(null);
      setProductTagForm({ tag_key: '', name_zh: '', name_en: '', name_ja: '', sort_order: 0 });
      fetchProductTags();
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '操作失败' });
    }
  };

  const handleEditProductTag = (tag: ProductTag) => {
    setEditingProductTag(tag);
    setProductTagForm({
      tag_key: tag.tag_key,
      name_zh: tag.name_zh,
      name_en: tag.name_en,
      name_ja: tag.name_ja,
      sort_order: tag.sort_order,
    });
    setShowProductTagForm(true);
  };

  const handleDeleteProductTag = async (id: number) => {
    if (!window.confirm('确定要删除此标签吗？关联此标签的制品可能会失去分类显示。')) return;
    try {
      const res = await apiFetch(`/api/admin/product-tags/delete?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessage({ type: 'success', text: '标签已删除' });
        fetchProductTags();
      } else {
        throw new Error('删除失败');
      }
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '删除失败' });
    }
  };

  // ---- Backup & Restore Handlers ----
  const handleBackup = async () => {
    setIsBackingUp(true);
    setMessage(null);
    try {
      const res = await apiFetch('/api/admin/backup', { method: 'POST' });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || '导出备份失败');
      }
      const blob = await res.blob();
      const contentDisposition = res.headers.get('Content-Disposition') || '';
      let filename = `backup-${new Date().toISOString().slice(0, 10)}.tar.gz`;
      const match = contentDisposition.match(/filename="?([^"]+)"?/);
      if (match && match[1]) {
        filename = match[1];
      }

      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      setMessage({ type: 'success', text: `全站数据导出成功 (${filename})` });
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '导出备份失败' });
    } finally {
      setIsBackingUp(false);
    }
  };

  const handleRestoreFile = async (file: File) => {
    if (!window.confirm(`警告：确认导入备份文件「${file.name}」？此操作将覆盖当前数据库记录与静态文件，且无法撤销！`)) {
      return;
    }

    setIsRestoring(true);
    setMessage(null);
    try {
      const formData = new FormData();
      formData.append('backup', file);

      const res = await apiFetch('/api/admin/restore', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || '数据恢复失败');
      }

      setMessage({ type: 'success', text: '全站数据恢复成功，已重新同步数据库与静态文件' });
      // 重新加载所有数据
      fetchActivities();
      fetchMembers();
      fetchProducts();
      fetchProductTags();
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : '恢复失败' });
    } finally {
      setIsRestoring(false);
    }
  };

  const resolveImageUrl = (url: string): string => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    if (url.startsWith('/static/')) {
      return apiBase ? `${apiBase}${url}` : url;
    }
    return url;
  };

  return (
    <div className="page-container admin-page">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">内容管理后台</h1>
          <p className="admin-subtitle">维护主页的社团活动、组织架构、社团制品与标签分类</p>
        </div>
        <div className="admin-header-actions">
          <button
            onClick={handleBackup}
            disabled={isBackingUp || isRestoring}
            className="admin-btn admin-btn-outline"
            title="导出包含数据库 SQL 与 static/ 静态资源目录的完整压缩包"
          >
            {isBackingUp ? '正在导出...' : '📦 导出全站数据'}
          </button>
          <label
            className={`admin-btn admin-btn-outline ${isBackingUp || isRestoring ? 'disabled' : ''}`}
            style={{ cursor: isBackingUp || isRestoring ? 'not-allowed' : 'pointer' }}
            title="上传并恢复 .tar.gz 备份包"
          >
            {isRestoring ? '正在恢复...' : '📥 恢复全站数据'}
            <input
              type="file"
              accept=".tar.gz,.tgz,application/gzip"
              disabled={isBackingUp || isRestoring}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  handleRestoreFile(file);
                }
                e.target.value = '';
              }}
              style={{ display: 'none' }}
            />
          </label>
          <button onClick={handleLogout} className="admin-btn admin-btn-secondary">
            退出登录
          </button>
        </div>
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
        <button
          className={`admin-tab-btn ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          社团制品 ({products.length})
        </button>
        <button
          className={`admin-tab-btn ${activeTab === 'product-tags' ? 'active' : ''}`}
          onClick={() => setActiveTab('product-tags')}
        >
          制品类型 ({productTags.length})
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
                        type: 'event',
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
                      <label htmlFor="act-type">类型</label>
                      <select
                        id="act-type"
                        value={activityForm.type}
                        onChange={(e) =>
                          setActivityForm({ ...activityForm, type: e.target.value })
                        }
                      >
                        <option value="event">普通活动 (event)</option>
                        <option value="call">创作征集 / 当前活动 (call)</option>
                      </select>
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
                      <th>类型</th>
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
                          <td>{act.type === 'call' ? '征集 (call)' : '活动 (event)'}</td>
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

          {activeTab === 'products' && (
            <div className="admin-section">
              <div className="admin-section-header">
                <h2 className="admin-section-title">制品列表</h2>
                {!showProductForm && (
                  <button
                    onClick={() => {
                      setEditingProduct(null);
                      setProductForm({
                        name_zh: '',
                        name_en: '',
                        name_ja: '',
                        description_zh: '',
                        description_en: '',
                        description_ja: '',
                        image_url: '',
                        tag: 'acrylic',
                        sort_order: products.length + 1,
                      });
                      setShowProductForm(true);
                    }}
                    className="admin-btn admin-btn-primary"
                  >
                    + 添加制品
                  </button>
                )}
              </div>

              {showProductForm && (
                <div className="admin-form-panel">
                  <h3>{editingProduct ? '编辑制品' : '新增制品'}</h3>
                  <form onSubmit={handleProductSubmit} className="admin-form">
                    <div className="form-group">
                      <label htmlFor="prod-name-zh">中文名称 *</label>
                      <input
                        id="prod-name-zh"
                        type="text"
                        required
                        value={productForm.name_zh}
                        onChange={(e) =>
                          setProductForm({ ...productForm, name_zh: e.target.value })
                        }
                        placeholder="例: 博丽灵梦 亚克力立牌"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="prod-name-en">英文名称</label>
                      <input
                        id="prod-name-en"
                        type="text"
                        value={productForm.name_en}
                        onChange={(e) =>
                          setProductForm({ ...productForm, name_en: e.target.value })
                        }
                        placeholder="例: Hakurei Reimu Acrylic Stand"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="prod-name-ja">日文名称</label>
                      <input
                        id="prod-name-ja"
                        type="text"
                        value={productForm.name_ja}
                        onChange={(e) =>
                          setProductForm({ ...productForm, name_ja: e.target.value })
                        }
                        placeholder="例: 博麗霊夢 アクリルスタンド"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="prod-tag">类型标签 (可输入新标签或从列表选择)</label>
                      <input
                        id="prod-tag"
                        type="text"
                        list="prod-tag-datalist"
                        value={productForm.tag}
                        onChange={(e) =>
                          setProductForm({ ...productForm, tag: e.target.value })
                        }
                        placeholder="例: acrylic, poster, 或自定义标签"
                      />
                      <datalist id="prod-tag-datalist">
                        {productTags.map((tag) => (
                          <option key={tag.id} value={tag.tag_key}>
                            {tag.name_zh} ({tag.tag_key})
                          </option>
                        ))}
                      </datalist>
                      {productTags.length > 0 && (
                        <div className="admin-tag-chips">
                          <span className="admin-tag-chips-label">常用标签:</span>
                          {productTags.map((tag) => (
                            <button
                              key={tag.id}
                              type="button"
                              className={`admin-tag-chip ${productForm.tag === tag.tag_key ? 'active' : ''}`}
                              onClick={() => setProductForm({ ...productForm, tag: tag.tag_key })}
                            >
                              {tag.name_zh}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="prod-img">图片URL / 上传 *</label>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <input
                          id="prod-img"
                          type="text"
                          required
                          value={productForm.image_url}
                          onChange={(e) =>
                            setProductForm({ ...productForm, image_url: e.target.value })
                          }
                          placeholder="/static/products/xxx.jpg 或完整 URL"
                          style={{ flex: 1 }}
                        />
                        <label
                          htmlFor="prod-img-upload"
                          className="admin-btn admin-btn-secondary"
                          style={{ cursor: uploadingImage ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap' }}
                        >
                          {uploadingImage ? '上传中...' : '上传图片'}
                        </label>
                        <input
                          id="prod-img-upload"
                          type="file"
                          accept=".jpg,.jpeg,.png,.webp"
                          disabled={uploadingImage}
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                      </div>
                      {productForm.image_url && (
                        <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <img
                            src={resolveImageUrl(productForm.image_url)}
                            alt="预览"
                            style={{
                              width: '48px',
                              height: '48px',
                              objectFit: 'cover',
                              borderRadius: '4px',
                              border: '1px solid var(--g-vermilion-line)',
                            }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <span style={{ fontSize: '0.85rem', color: 'var(--g-ink-soft)', wordBreak: 'break-all' }}>
                            {productForm.image_url}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="prod-desc-zh">中文描述</label>
                      <textarea
                        id="prod-desc-zh"
                        rows={2}
                        value={productForm.description_zh}
                        onChange={(e) =>
                          setProductForm({ ...productForm, description_zh: e.target.value })
                        }
                        placeholder="例: 精致双面夹层亚克力立牌..."
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="prod-desc-en">英文描述</label>
                      <textarea
                        id="prod-desc-en"
                        rows={2}
                        value={productForm.description_en}
                        onChange={(e) =>
                          setProductForm({ ...productForm, description_en: e.target.value })
                        }
                        placeholder="例: Double-sided acrylic stand..."
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="prod-desc-ja">日文描述</label>
                      <textarea
                        id="prod-desc-ja"
                        rows={2}
                        value={productForm.description_ja}
                        onChange={(e) =>
                          setProductForm({ ...productForm, description_ja: e.target.value })
                        }
                        placeholder="例: 両面アクリルスタンド..."
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="prod-order">排序权重 (数字越小越靠前)</label>
                      <input
                        id="prod-order"
                        type="number"
                        value={productForm.sort_order}
                        onChange={(e) =>
                          setProductForm({
                            ...productForm,
                            sort_order: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>

                    <div className="admin-form-actions">
                      <button type="submit" className="admin-btn admin-btn-primary">
                        {editingProduct ? '保存修改' : '确认添加'}
                      </button>
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary"
                        onClick={() => {
                          setShowProductForm(false);
                          setEditingProduct(null);
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
                      <th>图片</th>
                      <th>名称 (中 / 英 / 日)</th>
                      <th>标签</th>
                      <th>排序</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ textAlign: 'center', padding: '1.5rem' }}>
                          暂无制品记录
                        </td>
                      </tr>
                    ) : (
                      products.map((prod) => (
                        <tr key={prod.id}>
                          <td>{prod.id}</td>
                          <td>
                            {prod.image_url ? (
                              <img
                                src={resolveImageUrl(prod.image_url)}
                                alt={prod.name_zh || '制品'}
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  objectFit: 'cover',
                                  borderRadius: '4px',
                                  border: '1px solid var(--g-vermilion-line)',
                                }}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            ) : (
                              <span style={{ color: 'var(--g-ink-soft)', fontSize: '0.8rem' }}>无图</span>
                            )}
                          </td>
                          <td>
                            <div><strong>{prod.name_zh || '-'}</strong></div>
                            {(prod.name_en || prod.name_ja) && (
                              <div style={{ fontSize: '0.8rem', color: 'var(--g-ink-soft)' }}>
                                {[prod.name_en, prod.name_ja].filter(Boolean).join(' / ')}
                              </div>
                            )}
                          </td>
                          <td>{prod.tag || '-'}</td>
                          <td>{prod.sort_order}</td>
                          <td>
                            <div className="admin-table-actions">
                              <button
                                onClick={() => handleEditProduct(prod)}
                                className="admin-btn admin-btn-secondary"
                              >
                                编辑
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(prod.id)}
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

          {activeTab === 'product-tags' && (
            <div className="admin-section">
              <div className="admin-section-header">
                <div>
                  <h2 className="admin-section-title">制品类型标签</h2>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--g-ink-soft)' }}>
                    管理制品分类标签；添加时中文、英文、日文三种语言均为必填。
                  </p>
                </div>
                {!showProductTagForm && (
                  <button
                    onClick={() => {
                      setEditingProductTag(null);
                      setProductTagForm({
                        tag_key: '',
                        name_zh: '',
                        name_en: '',
                        name_ja: '',
                        sort_order: productTags.length + 1,
                      });
                      setShowProductTagForm(true);
                    }}
                    className="admin-btn admin-btn-primary"
                  >
                    + 添加类型标签
                  </button>
                )}
              </div>

              {showProductTagForm && (
                <div className="admin-form-panel">
                  <h3>{editingProductTag ? '编辑制品标签' : '新增制品标签'}</h3>
                  <form onSubmit={handleProductTagSubmit} className="admin-form">
                    <div className="form-group">
                      <label htmlFor="tag-key">
                        标签英文标识 (Key) *
                      </label>
                      <input
                        id="tag-key"
                        type="text"
                        required
                        value={productTagForm.tag_key}
                        onChange={(e) =>
                          setProductTagForm({ ...productTagForm, tag_key: e.target.value.toLowerCase() })
                        }
                        placeholder="例: acrylic, doujinshi, cd, poster"
                        disabled={!!editingProductTag}
                      />
                      {editingProductTag && (
                        <span style={{ fontSize: '0.8rem', color: 'var(--g-ink-soft)' }}>
                          标签标识作为唯一关联键，不可更改
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="tag-name-zh">中文名称 *</label>
                      <input
                        id="tag-name-zh"
                        type="text"
                        required
                        value={productTagForm.name_zh}
                        onChange={(e) =>
                          setProductTagForm({ ...productTagForm, name_zh: e.target.value })
                        }
                        placeholder="例: 亚克力制品"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tag-name-en">英文名称 *</label>
                      <input
                        id="tag-name-en"
                        type="text"
                        required
                        value={productTagForm.name_en}
                        onChange={(e) =>
                          setProductTagForm({ ...productTagForm, name_en: e.target.value })
                        }
                        placeholder="例: Acrylic Goods"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tag-name-ja">日文名称 *</label>
                      <input
                        id="tag-name-ja"
                        type="text"
                        required
                        value={productTagForm.name_ja}
                        onChange={(e) =>
                          setProductTagForm({ ...productTagForm, name_ja: e.target.value })
                        }
                        placeholder="例: アクリル製品"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tag-order">排序权重 (数字越小越靠前)</label>
                      <input
                        id="tag-order"
                        type="number"
                        value={productTagForm.sort_order}
                        onChange={(e) =>
                          setProductTagForm({
                            ...productTagForm,
                            sort_order: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>

                    <div className="admin-form-actions">
                      <button type="submit" className="admin-btn admin-btn-primary">
                        {editingProductTag ? '保存修改' : '确认添加'}
                      </button>
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary"
                        onClick={() => {
                          setShowProductTagForm(false);
                          setEditingProductTag(null);
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
                      <th>标识 (Key)</th>
                      <th>中文名</th>
                      <th>英文名</th>
                      <th>日文名</th>
                      <th>排序</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productTags.length === 0 ? (
                      <tr>
                        <td colSpan={7} style={{ textAlign: 'center', padding: '1.5rem' }}>
                          暂无标签记录
                        </td>
                      </tr>
                    ) : (
                      productTags.map((tag) => (
                        <tr key={tag.id}>
                          <td>{tag.id}</td>
                          <td>
                            <code>{tag.tag_key}</code>
                          </td>
                          <td><strong>{tag.name_zh}</strong></td>
                          <td>{tag.name_en}</td>
                          <td>{tag.name_ja}</td>
                          <td>{tag.sort_order}</td>
                          <td>
                            <div className="admin-table-actions">
                              <button
                                onClick={() => handleEditProductTag(tag)}
                                className="admin-btn admin-btn-secondary"
                              >
                                编辑
                              </button>
                              <button
                                onClick={() => handleDeleteProductTag(tag.id)}
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
