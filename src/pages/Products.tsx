import { useTranslation } from 'react-i18next';
import SpellCardFrame from '../components/SpellCardFrame';
import './Products.css';

import doujinshiMockupImg from '../assets/products/doujinshi-mockup.jpg';
import marisaPosterImg from '../assets/products/marisa-poster.jpg';
import bookmarkReimuImg from '../assets/products/bookmark-reimu.jpg';
import bookmarkMarisaImg from '../assets/products/bookmark-marisa.jpg';
import bookmarkAliceImg from '../assets/products/bookmark-alice.jpg';
import bookmarkAkyuuImg from '../assets/products/bookmark-akyuu.jpg';
import bookmarkKosuzuImg from '../assets/products/bookmark-kosuzu.jpg';
import bookmarkSumirekoImg from '../assets/products/bookmark-sumireko.jpg';
import acrylicSunnyImg from '../assets/products/acrylic-sunny.jpg';
import acrylicTenshiImg from '../assets/products/acrylic-tenshi.jpg';
import acrylicByakurenImg from '../assets/products/acrylic-byakuren.jpg';
import acrylicHifuuImg from '../assets/products/acrylic-hifuu.jpg';
import acrylicFlandreImg from '../assets/products/acrylic-flandre.jpg';
import acrylicLunaImg from '../assets/products/acrylic-luna.jpg';
import acrylicSuwakoImg from '../assets/products/acrylic-suwako.jpg';
import acrylicShikiImg from '../assets/products/acrylic-shiki.jpg';

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
    img: bookmarkReimuImg,
    titleKey: 'products.bookmark_reimu_title',
    descKey: 'products.bookmark_reimu_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-marisa',
    img: bookmarkMarisaImg,
    titleKey: 'products.bookmark_marisa_title',
    descKey: 'products.bookmark_marisa_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-alice',
    img: bookmarkAliceImg,
    titleKey: 'products.bookmark_alice_title',
    descKey: 'products.bookmark_alice_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-akyuu',
    img: bookmarkAkyuuImg,
    titleKey: 'products.bookmark_akyuu_title',
    descKey: 'products.bookmark_akyuu_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-kosuzu',
    img: bookmarkKosuzuImg,
    titleKey: 'products.bookmark_kosuzu_title',
    descKey: 'products.bookmark_kosuzu_desc',
    tag: 'bookmark',
  },
  {
    id: 'bookmark-sumireko',
    img: bookmarkSumirekoImg,
    titleKey: 'products.bookmark_sumireko_title',
    descKey: 'products.bookmark_sumireko_desc',
    tag: 'bookmark',
  },
  {
    id: 'acrylic-sunny',
    img: acrylicSunnyImg,
    titleKey: 'products.acrylic_sunny_title',
    descKey: 'products.acrylic_sunny_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-tenshi',
    img: acrylicTenshiImg,
    titleKey: 'products.acrylic_tenshi_title',
    descKey: 'products.acrylic_tenshi_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-byakuren',
    img: acrylicByakurenImg,
    titleKey: 'products.acrylic_byakuren_title',
    descKey: 'products.acrylic_byakuren_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-hifuu',
    img: acrylicHifuuImg,
    titleKey: 'products.acrylic_hifuu_title',
    descKey: 'products.acrylic_hifuu_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-flandre',
    img: acrylicFlandreImg,
    titleKey: 'products.acrylic_flandre_title',
    descKey: 'products.acrylic_flandre_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-luna',
    img: acrylicLunaImg,
    titleKey: 'products.acrylic_luna_title',
    descKey: 'products.acrylic_luna_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-suwako',
    img: acrylicSuwakoImg,
    titleKey: 'products.acrylic_suwako_title',
    descKey: 'products.acrylic_suwako_desc',
    tag: 'acrylic',
  },
  {
    id: 'acrylic-shiki',
    img: acrylicShikiImg,
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
