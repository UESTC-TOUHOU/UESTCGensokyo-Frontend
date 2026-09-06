import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import SpellCardFrame from '../components/SpellCardFrame';
import './Products.css';

export type Product = {
  id: number | string;
  name_zh?: string;
  name_en?: string;
  name_ja?: string;
  description_zh?: string;
  description_en?: string;
  description_ja?: string;
  name?: string;
  category?: string;
  description_key?: string;
  image_url: string;
  tag?: string;
  sort_order: number;
};

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080';

function Products() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetch(`${API_BASE}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then((data: Product[]) => {
        if (active && Array.isArray(data)) {
          const sorted = [...data].sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
          setProducts(sorted);
          setError(null);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err instanceof Error ? err.message : 'Network error');
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const getProductTitle = (product: Product): string => {
    const lang = i18n.language || 'zh';
    if (lang.startsWith('en') && product.name_en) return product.name_en;
    if (lang.startsWith('ja') && product.name_ja) return product.name_ja;
    if (product.name_zh) return product.name_zh;
    if (product.name) {
      const translated = t(product.name);
      return translated !== product.name ? translated : product.name;
    }
    return '';
  };

  const getProductDesc = (product: Product): string => {
    const lang = i18n.language || 'zh';
    if (lang.startsWith('en') && product.description_en) return product.description_en;
    if (lang.startsWith('ja') && product.description_ja) return product.description_ja;
    if (product.description_zh) return product.description_zh;
    if (product.description_key) {
      const translated = t(product.description_key);
      return translated !== product.description_key ? translated : product.description_key;
    }
    return '';
  };

  const getTagInfo = (product: Product) => {
    const tagKey = product.tag || product.category;
    if (!tagKey) return { tagKey: '', tagLabel: null };
    const i18nKey = `products.tags.${tagKey}`;
    const translated = t(i18nKey);
    return {
      tagKey,
      tagLabel: translated !== i18nKey ? translated : tagKey,
    };
  };

  const resolveImageUrl = (url: string): string => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    if (url.startsWith('/static/')) {
      return API_BASE ? `${API_BASE}${url}` : url;
    }
    return url;
  };

  if (loading) {
    return (
      <div className="page-container products-page">
        <header className="products-header">
          <h1 className="page-title">{t('products.title')}</h1>
          <p className="products-subtitle">{t('products.subtitle')}</p>
        </header>
        <p className="products-loading">{t('products.loading', '正在获取制品列表...')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container products-page">
        <header className="products-header">
          <h1 className="page-title">{t('products.title')}</h1>
          <p className="products-subtitle">{t('products.subtitle')}</p>
        </header>
        <p className="products-error">
          {t('products.error', '未能同步最新制品，请稍后重试')}
        </p>
      </div>
    );
  }

  return (
    <div className="page-container products-page">
      <header className="products-header">
        <h1 className="page-title">{t('products.title')}</h1>
        <p className="products-subtitle">{t('products.subtitle')}</p>
      </header>

      <div className="products-grid">
        {products.map((product) => {
          const title = getProductTitle(product);
          const desc = getProductDesc(product);
          const { tagKey, tagLabel } = getTagInfo(product);

          return (
            <SpellCardFrame variant="gold" className="product-card" key={product.id}>
              <div className="product-image-wrap">
                {tagLabel && <span className={`product-tag tag-${tagKey}`}>{tagLabel}</span>}
                <img
                  src={resolveImageUrl(product.image_url)}
                  alt={title}
                  loading="lazy"
                  className="product-img"
                />
              </div>
              <div className="card-content">
                <h3 className="product-title">{title}</h3>
                <p className="product-desc">{desc}</p>
              </div>
            </SpellCardFrame>
          );
        })}
      </div>

      <footer className="products-footer-note">
        <p>{t('products.copyright_note')}</p>
      </footer>
    </div>
  );
}

export default Products;
