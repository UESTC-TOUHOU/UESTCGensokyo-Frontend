import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Welcome from '../pages/Welcome';
import Homepage from '../pages/Homepage';
import Products from '../pages/Products';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
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
        path: 'products',
        element: <Products />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;