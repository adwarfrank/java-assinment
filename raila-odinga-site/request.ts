import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const supported = ['en', 'sw'] as const;
  const lang = supported.includes(locale as any) ? (locale as 'en' | 'sw') : 'en';
  return {
    locale: lang,
    messages: (await import(`./locales/${lang}.json`)).default
  };
});
