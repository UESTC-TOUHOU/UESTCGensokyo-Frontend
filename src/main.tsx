import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import router from './router'; // 确保路径正确
import './main.css';         // 导入全局 CSS
import './styles/reimu-cursor.css';
import './styles/admin-touhou-effects.css';
import './i18n/i18n';       // 导入 i18n 配置

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);