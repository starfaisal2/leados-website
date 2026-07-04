import { createNavigation } from 'next-intl/navigation';

const locales = ['en', 'ar', 'fr', 'es', 'hi', 'tr', 'zh', 'ru', 'pt', 'de'] as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix: 'as-needed',
});
