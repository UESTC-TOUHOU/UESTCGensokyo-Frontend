import { useTranslation } from 'react-i18next';
import './Products.css';

function Products() {
  const { t } = useTranslation();

  const products = [
    { title: t('products.product1_title'), desc: t('products.product1_desc'), img: 'https://via.placeholder.com/300' },
    { title: t('products.product2_title'), desc: t('products.product2_desc'), img: 'https://via.placeholder.com/300' },
    { title: t('products.product3_title'), desc: t('products.product3_desc'), img: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="page-container">
      <h1>{t('products.title')}</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.img} alt={product.title} />
            <div className="card-content">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;