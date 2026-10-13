// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio real antes de publicar (canonical, hreflang y sitemap dependen de esto).
const SITE = 'https://www.zagos.com';

// Páginas con noindex: fuera del sitemap
const EXCLUDE = ['/politica-de-datos/', '/en/privacy-policy/', '/404', '/private-label/'];

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  // URL anterior de la página de marca privada en español
  redirects: {
    '/private-label/': '/marca-privada/',
  },
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
