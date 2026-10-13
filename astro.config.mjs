// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio real antes de publicar (canonical, hreflang y sitemap dependen de esto).
const SITE = 'https://www.zagos.com';

// Páginas con noindex: fuera del sitemap
const EXCLUDE = ['/politica-de-datos/', '/en/privacy-policy/', '/404'];

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDE.some((p) => new URL(page).pathname.startsWith(p)),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
  ],
});
