import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router'; // 确保路径正确
import './main.css';         // 导入全局 CSS
import './i18n/i18n';       // 导入 i18n 配置

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);