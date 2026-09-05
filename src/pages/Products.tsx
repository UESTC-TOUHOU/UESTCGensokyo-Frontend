import { useTranslation } from 'react-i18next';
import SpellCardFrame from '../components/SpellCardFrame';
import './Products.css';

import doujinshiMockupImg from '../assets/products/doujinshi-mockup.jpg';
import marisaPosterImg from '../assets/products/marisa-poster.jpg';
import bookmark1Img from '../assets/products/bookmark1.jpg';
import bookmark2Img from '../assets/products/bookmark2.jpg';
import bookmark3Img from '../assets/products/bookmark3.jpg';
import bookmark4Img from '../assets/products/bookmark4.jpg';
import bookmark5Img from '../assets/products/bookmark5.jpg';
import bookmark6Img from '../assets/products/bookmark6.jpg';
import acrylic1Img from '../assets/products/acrylic1.jpg';
import acrylic2Img from '../assets/products/acrylic2.jpg';
import acrylic3Img from '../assets/products/acrylic3.jpg';
import acrylic4Img from '../assets/products/acrylic4.jpg';
import acrylic5Img from '../assets/products/acrylic5.jpg';
import acrylic6Img from '../assets/products/acrylic6.jpg';
import acrylic7Img from '../assets/products/acrylic7.jpg';
import acrylic8Img from '../assets/products/acrylic8.jpg';

export type Product = {
  id: string;
  img: string;
  titleKey: string;
  descKey: string;
  tag?: 'doujinshi' | 'poster' | 'bookmark' | 'acrylic';
};

const PRODUCTS_DATA: Product[] = [
  {
    id: 'doujinshi-yanyin',
    img: doujinshiMockupImg,
    titleKey: 'products.doujinshi_yanyin_title',
    descKey: 'products.doujinshi_yanyin_desc',
    tag: 'doujinshi',
  },
  {
    id: 'doujinshi-rd',
    img: doujinshiMockupImg,
    titleKey: 'products.doujinshi_rd_title',
    descKey: 'products.doujinshi_rd_desc',
    tag: 'doujinshi',
  },
  {
    id: 'poster-marisa',
    img: marisaPosterImg,
    titleKey: 'products.poster_marisa_title',
    descKey: 'products.poster_marisa_desc',
    tag: 'poster',
  },
  {
    id: 'bookmark-reimu',
    img: bookmark1Img,
    titleKey: 'products.bookmark_reimu_title',
    descKey: 'products.bookmark_reimu_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-marisa',
    img: bookmark2Img,
    titleKey: 'products.bookmark_marisa_title',
    descKey: 'products.bookmark_marisa_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-alice',
    img: bookmark3Img,
    titleKey: 'products.bookmark_alice_title',
    descKey: 'products.bookmark_alice_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-akyuu',
    img: bookmark4Img,
    titleKey: 'products.bookmark_akyuu_title',
    descKey: 'products.bookmark_akyuu_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-kosuzu',
    img: bookmark5Img,
    titleKey: 'products.bookmark_kosuzu_title',
    descKey: 'products.bookmark_kosuzu_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-renko',
    img: bookmark6Img,
    titleKey: 'products.bookmark_renko_title',
    descKey: 'products.bookmark_renko_desc',
    tag: 'bookmark',
  },
  {
    id: 'acrylic-medicine',
    img: acrylic1Img,
    titleKey: 'products.acrylic_medicine_title',
    descKey: 'products.acrylic_medicine_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-byakuren',
    img: acrylic2Img,
    titleKey: 'products.acrylic_byakuren_title',
    descKey: 'products.acrylic_byakuren_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-tenshi',
    img: acrylic3Img,
    titleKey: 'products.acrylic_tenshi_title',
    descKey: 'products.acrylic_tenshi_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-flandre',
    img: acrylic4Img,
    titleKey: 'products.acrylic_flandre_title',
    descKey: 'products.acrylic_flandre_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-hifuu',
    img: acrylic5Img,
    titleKey: 'products.acrylic_hifuu_title',
    descKey: 'products.acrylic_hifuu_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-sekibanki',
    img: acrylic6Img,
    titleKey: 'products.acrylic_sekibanki_title',
    descKey: 'products.acrylic_sekibanki_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-sakuya',
    img: acrylic7Img,
    titleKey: 'products.acrylic_sakuya_title',
    descKey: 'products.acrylic_sakuya_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-shiki',
    img: acrylic8Img,
    titleKey: 'products.acrylic_shiki_title',
    descKey: 'products.acrylic_shiki_desc',
    tag: 'acrylic',
  },
];

function Products() {
  const { t } = useTranslation();

  return (
    <div className="page-container products-page">
      <header className="products-header">
        <h1 className="page-title">{t('products.title')}</h1>
        <p className="products-subtitle">{t('products.subtitle')}</p>
      </header>

      <div className="products-grid">
        {PRODUCTS_DATA.map((product) => {
          const title = t(product.titleKey);
          const desc = t(product.descKey);
          const tagLabel = product.tag ? t(`products.tags.${product.tag}`) : null;

          return (
            <SpellCardFrame variant="gold" className="product-card" key={product.id}>
              <div className="product-image-wrap">
                {tagLabel && <span className={`product-tag tag-${product.tag}`}>{tagLabel}</span>}
                <img
                  src={product.img}
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
