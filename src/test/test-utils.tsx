import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// 轻量测试 i18n：直接内联三语字典（与 src/i18n/locales 同构，避免测试读 JSON 依赖路径）。
const testResources = {
  zh: {
    translation: {
      header: { welcome: '欢迎', homepage: '主页', products: '产品', contact: '联系我们' },
      welcome: { title: '欢迎来到UESTC幻想乡' },
      homepage: {
        title: '关于我们',
        mission_title: '我们的使命',
        mission_text: '传播东方Project文化，聚集同好。',
        team_title: '我们的团队',
        team_text: '由热心的同好组成的核心团队。',
      },
      products: {
        title: '我们的作品',
        product1_title: '同人本',
        product1_desc: '社团创作的同人志。',
        product2_title: '周边',
        product2_desc: '徽章与明信片。',
        product3_title: '音乐',
        product3_desc: '东方改编曲。',
      },
      contact: {
        title: '联系我们',
        form_name: '您的姓名',
        form_email: '您的邮箱',
        form_message: '留言内容',
        form_submit: '发送',
      },
      footer: { copyright: '© 2026 UESTC幻想乡' },
    },
  },
  en: {
    translation: {
      header: { welcome: 'Welcome', homepage: 'Home', products: 'Products', contact: 'Contact' },
      welcome: { title: 'Welcome to UESTC Gensokyo' },
      homepage: {
        title: 'About',
        mission_title: 'Our Mission',
        mission_text: 'Spread Touhou culture among students.',
        team_title: 'Our Team',
        team_text: 'A core team of dedicated fans.',
      },
      products: {
        title: 'Our Works',
        product1_title: 'Doujinshi',
        product1_desc: 'Club-created fan books.',
        product2_title: 'Merch',
        product2_desc: 'Badges and postcards.',
        product3_title: 'Music',
        product3_desc: 'Touhou arrangements.',
      },
      contact: {
        title: 'Contact Us',
        form_name: 'Your Name',
        form_email: 'Your Email',
        form_message: 'Message',
        form_submit: 'Send',
      },
      footer: { copyright: '© 2026 UESTC Gensokyo' },
    },
  },
};

// 实例只初始化一次；每个用例通过 changeLanguage 复位到 zh。
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: testResources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: { escapeValue: false },
  });
}

beforeEach(async () => {
  await i18n.changeLanguage('zh');
});

// renderWithRouter：用 createMemoryRouter 渲染给定路由配置并提供 i18n。
export function renderWithRouter(routes: { path: string; element: ReactElement }[]) {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] });
  return render(
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export { i18n };
