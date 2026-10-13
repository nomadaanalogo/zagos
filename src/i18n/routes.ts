import type { L, Lang } from './config';

/**
 * Mapa de URLs por idioma. Español en la raíz, inglés en /en/ con slugs en inglés.
 * Si cambia una URL, se cambia solo aquí (menú, hreflang, enlaces internos y sitemap la toman de este mapa).
 */
export const routes = {
  home: { es: '/', en: '/en/' },
  ingredients: { es: '/ingredientes/', en: '/en/ingredients/' },
  solutions: { es: '/soluciones/', en: '/en/solutions/' },
  privateLabel: { es: '/private-label/', en: '/en/private-label/' },
  industries: { es: '/industrias/', en: '/en/industries/' },
  quality: { es: '/calidad-inocuidad/', en: '/en/food-safety-quality/' },
  about: { es: '/nosotros/', en: '/en/about/' },
  export: { es: '/export/', en: '/en/export/' },
  resources: { es: '/recursos/', en: '/en/resources/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  privacy: { es: '/politica-de-datos/', en: '/en/privacy-policy/' },
} as const satisfies Record<string, L>;

export type RouteKey = keyof typeof routes;
export type Alternates = L;

export const href = (key: RouteKey, lang: Lang, hash?: string) =>
  routes[key][lang] + (hash ? `#${hash}` : '');

export const ingredientHref = (slug: string, lang: Lang) => `${routes.ingredients[lang]}${slug}/`;

export const ingredientAlternates = (slug: string): Alternates => ({
  es: ingredientHref(slug, 'es'),
  en: ingredientHref(slug, 'en'),
});

/** Enlace al formulario con campos precargados (ingrediente, formato, motivo). */
export const contactHref = (
  lang: Lang,
  params: { ingredient?: string; format?: string; topic?: string } = {},
) => {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v) as [string, string][]).toString();
  return routes.contact[lang] + (qs ? `?${qs}` : '') + '#form';
};
