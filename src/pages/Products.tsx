import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import SpellCardFrame from '../components/SpellCardFrame';
import './Products.css';

export type Product = {
  id: number;
  name: string;
  category: string;
  description_key: string;
  image_url: string;
  sort_order: number;
};

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080';

function Products() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/products`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page-container products-page">
        <header className="products-header">
          <h1 className="page-title">{t('products.title')}</h1>
          <p className="products-subtitle">{t('products.subtitle')}</p>
        </header>
        <p style={{ textAlign: 'center', padding: '3rem' }}>{t('products.loading', '加载中...')}</p>
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
        <p style={{ textAlign: 'center', padding: '3rem', color: 'var(--g-vermilion)' }}>
          {t('products.error', '加载失败，请稍后重试')}
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
          const title = t(product.name);
          const desc = t(product.description_key);
          const tagLabel = product.category ? t(`products.tags.${product.category}`) : null;

          return (
            <SpellCardFrame variant="gold" className="product-card" key={product.id}>
              <div className="product-image-wrap">
                {tagLabel && <span className={`product-tag tag-${product.category}`}>{tagLabel}</span>}
                <img
                  src={product.image_url}
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
