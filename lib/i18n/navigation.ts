import { createNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales: ['en', 'ar', 'fr', 'es', 'hi', 'tr', 'zh', 'ru', 'pt', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});
