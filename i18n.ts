import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ar', 'fr', 'es', 'hi', 'tr', 'zh', 'ru', 'pt', 'de'];

const messageLoaders: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('./messages/en.json'),
  ar: () => import('./messages/ar.json'),
  fr: () => import('./messages/fr.json'),
  es: () => import('./messages/es.json'),
  hi: () => import('./messages/hi.json'),
  tr: () => import('./messages/tr.json'),
  zh: () => import('./messages/zh.json'),
  ru: () => import('./messages/ru.json'),
  pt: () => import('./messages/pt.json'),
  de: () => import('./messages/de.json'),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale)) {
    locale = 'en';
  }
  const messages = (await messageLoaders[locale]()).default;
  return { locale, messages };
});
