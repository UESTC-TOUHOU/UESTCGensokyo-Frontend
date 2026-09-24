import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import Welcome from '../pages/Welcome';
import Homepage from '../pages/Homepage';
import Activities from '../pages/Activities';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import AdminLogin from '../pages/AdminLogin';
import TH08 from '../pages/TH08';

const ActivityDetail = lazy(() => import('../pages/ActivityDetail'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />, // 所有页面共享布局
      children: [
        {
          index: true, // 默认子路由
          element: <Welcome />,
        },
        {
          path: 'home',
          element: <Homepage />,
        },
        {
          path: 'activities',
          element: <Activities />,
        },
        {
          path: 'activities/:id',
          element: <Suspense fallback={<div>Loading.</div>}><ActivityDetail /></Suspense>,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'products/:id',
          element: <Suspense fallback={<div>Loading.</div>}><ProductDetail /></Suspense>,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'admin',
          element: <Admin />,
        },
        {
          path: 'admin/login',
          element: <AdminLogin />,
        },
        {
          path: 'th08',
          element: <TH08 />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
