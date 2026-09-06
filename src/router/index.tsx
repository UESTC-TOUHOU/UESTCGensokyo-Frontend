import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Welcome from '../pages/Welcome';
import Homepage from '../pages/Homepage';
import Activities from '../pages/Activities';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import AdminLogin from '../pages/AdminLogin';

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
          path: 'products',
          element: <Products />,
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
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
