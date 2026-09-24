import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getApiBase } from '../config';
import './DetailPage.css';

const API_BASE = getApiBase();

type ProductData = {
  id: number;
  name_zh: string;
  name_en: string;
  name_ja: string;
  description_zh: string;
  description_en: string;
  description_ja: string;
  image_url: string;
  detail_content_zh: string;
  detail_content_en: string;
  detail_content_ja: string;
  related_link: string;
  tag: string;
  metadata?: Record<string, string>;
};

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_BASE + '/api/products')
      .then(res => res.json())
      .then((data: ProductData[]) => {
        const found = data.find(p => p.id === Number(id));
        setProduct(found || null);
      })
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  const resolveImageUrl = (url: string): string => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return API_BASE ? API_BASE + url : url;
  };

  if (loading) return <div className="page-container detail-page"><p>{t('common.loading')}</p></div>;
  if (!product) return <div className="page-container detail-page"><p>{t('common.not_found')}</p></div>;

  const lang = i18n.language || 'zh';
  const getName = () => {
    if (lang.startsWith('en') && product.name_en) return product.name_en;
    if (lang.startsWith('ja') && product.name_ja) return product.name_ja;
    return product.name_zh;
  };
  const getDesc = () => {
    if (lang.startsWith('en') && product.description_en) return product.description_en;
    if (lang.startsWith('ja') && product.description_ja) return product.description_ja;
    return product.description_zh;
  };
  const getDetail = () => {
    if (lang.startsWith('en') && product.detail_content_en) return product.detail_content_en;
    if (lang.startsWith('ja') && product.detail_content_ja) return product.detail_content_ja;
    return product.detail_content_zh;
  };
  const tagLabel = product.tag ? t('products.tags.' + product.tag, product.tag) : '';

  return (
    <div className="page-container detail-page">
      <button className="detail-back-btn" onClick={() => navigate('/products')}>
        ← {t('common.back')}
      </button>

      {product.image_url && (
        <div className="detail-hero-image">
          <img src={resolveImageUrl(product.image_url)} alt={getName()} />
        </div>
      )}

      <h1 className="detail-title">{getName()}</h1>

      {tagLabel && <span className="detail-meta-tag">{tagLabel}</span>}

      {product.metadata && Object.keys(product.metadata).length > 0 && (
        <div className="detail-meta-table">
          {Object.entries(product.metadata).map(([key, val]) => (
            val ? (
              <div key={key} className="detail-meta-row">
                <span className="detail-meta-label">{key}</span>
                <span className="detail-meta-value">{val}</span>
              </div>
            ) : null
          ))}
        </div>
      )}

      <p className="detail-summary">{getDesc()}</p>

      {getDetail() && (
        <div className="detail-body">
          {getDetail().split('\n').filter(Boolean).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {product.related_link && (
        <a href={product.related_link} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
          {t('detail.relatedLink')} ↗
        </a>
      )}
    </div>
  );
}

export default ProductDetail;
