import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import zhLocale from '../i18n/locales/zh.json';
import enLocale from '../i18n/locales/en.json';
import jaLocale from '../i18n/locales/ja.json';

const testResources = {
  zh: {
    translation: zhLocale,
  },
  en: {
    translation: enLocale,
  },
  ja: {
    translation: jaLocale,
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
