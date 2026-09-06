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

const getApiBase = (): string => {
  if (import.meta.env.VITE_API_BASE) {
    return import.meta.env.VITE_API_BASE;
  }
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:18080';
  }
  return 'http://debian:18080';
};

const API_BASE = getApiBase();

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'products.doujinshi_yanyin_title',
    category: 'doujinshi',
    tag: 'doujinshi',
    description_key: 'products.doujinshi_yanyin_desc',
    image_url: '/static/products/doujinshi-mockup.jpg',
    sort_order: 1,
  },
  {
    id: 2,
    name: 'products.doujinshi_rd_title',
    category: 'doujinshi',
    tag: 'doujinshi',
    description_key: 'products.doujinshi_rd_desc',
    image_url: '/static/products/doujinshi-mockup.jpg',
    sort_order: 2,
  },
  {
    id: 3,
    name: 'products.poster_marisa_title',
    category: 'poster',
    tag: 'poster',
    description_key: 'products.poster_marisa_desc',
    image_url: '/static/products/marisa-poster.jpg',
    sort_order: 3,
  },
  {
    id: 4,
    name: 'products.bookmark_reimu_title',
    category: 'bookmark',
    tag: 'bookmark',
    description_key: 'products.bookmark_reimu_desc',
    image_url: '/static/products/bookmark-reimu.jpg',
    sort_order: 4,
  },
  {
    id: 5,
    name: 'products.bookmark_marisa_title',
    category: 'bookmark',
    tag: 'bookmark',
    description_key: 'products.bookmark_marisa_desc',
    image_url: '/static/products/bookmark-marisa.jpg',
    sort_order: 5,
  },
  {
    id: 6,
    name: 'products.bookmark_alice_title',
    category: 'bookmark',
    tag: 'bookmark',
    description_key: 'products.bookmark_alice_desc',
    image_url: '/static/products/bookmark-alice.jpg',
    sort_order: 6,
  },
  {
    id: 7,
    name: 'products.bookmark_akyuu_title',
    category: 'bookmark',
    tag: 'bookmark',
    description_key: 'products.bookmark_akyuu_desc',
    image_url: '/static/products/bookmark-akyuu.jpg',
    sort_order: 7,
  },
  {
    id: 8,
    name: 'products.bookmark_kosuzu_title',
    category: 'bookmark',
    tag: 'bookmark',
    description_key: 'products.bookmark_kosuzu_desc',
    image_url: '/static/products/bookmark-kosuzu.jpg',
    sort_order: 8,
  },
  {
    id: 9,
    name: 'products.bookmark_sumireko_title',
    category: 'bookmark',
    tag: 'bookmark',
    description_key: 'products.bookmark_sumireko_desc',
    image_url: '/static/products/bookmark-sumireko.jpg',
    sort_order: 9,
  },
  {
    id: 10,
    name: 'products.acrylic_sunny_title',
    category: 'acrylic',
    tag: 'acrylic',
    description_key: 'products.acrylic_sunny_desc',
    image_url: '/static/products/acrylic-sunny.jpg',
    sort_order: 10,
  },
  {
    id: 11,
    name: 'products.acrylic_tenshi_title',
    category: 'acrylic',
    tag: 'acrylic',
    description_key: 'products.acrylic_tenshi_desc',
    image_url: '/static/products/acrylic-tenshi.jpg',
    sort_order: 11,
  },
  {
    id: 12,
    name: 'products.acrylic_byakuren_title',
    category: 'acrylic',
    tag: 'acrylic',
    description_key: 'products.acrylic_byakuren_desc',
    image_url: '/static/products/acrylic-byakuren.jpg',
    sort_order: 12,
  },
  {
    id: 13,
    name: 'products.acrylic_hifuu_title',
    category: 'acrylic',
    tag: 'acrylic',
    description_key: 'products.acrylic_hifuu_desc',
    image_url: '/static/products/acrylic-hifuu.jpg',
    sort_order: 13,
  },
  {
    id: 14,
    name: 'products.acrylic_flandre_title',
    category: 'acrylic',
    tag: 'acrylic',
    description_key: 'products.acrylic_flandre_desc',
    image_url: '/static/products/acrylic-flandre.jpg',
    sort_order: 14,
  },
  {
    id: 15,
    name: 'products.acrylic_luna_title',
    category: 'acrylic',
    tag: 'acrylic',
    description_key: 'products.acrylic_luna_desc',
    image_url: '/static/products/acrylic-luna.jpg',
    sort_order: 15,
  },
  {
    id: 16,
    name: 'products.acrylic_suwako_title',
    category: 'acrylic',
    tag: 'acrylic',
    description_key: 'products.acrylic_suwako_desc',
    image_url: '/static/products/acrylic-suwako.jpg',
    sort_order: 16,
  },
  {
    id: 17,
    name: 'products.acrylic_shiki_title',
    category: 'acrylic',
    tag: 'acrylic',
    description_key: 'products.acrylic_shiki_desc',
    image_url: '/static/products/acrylic-shiki.jpg',
    sort_order: 17,
  },
];

function Products() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<Product[]>(FALLBACK_PRODUCTS);
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
        if (active && Array.isArray(data) && data.length > 0) {
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

  return (
    <div className="page-container products-page">
      <header className="products-header">
        <h1 className="page-title">{t('products.title')}</h1>
        <p className="products-subtitle">{t('products.subtitle')}</p>
      </header>

      {error && (
        <p className="products-error">
          {t('products.error', '未能同步最新制品，请稍后重试')}
        </p>
      )}

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
