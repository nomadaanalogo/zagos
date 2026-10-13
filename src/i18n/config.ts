export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'es';

/** Idioma al que apunta hreflang="x-default" (comprador internacional). */
export const xDefaultLang: Lang = 'en';

/** og:locale */
export const ogLocales: Record<Lang, string> = {
  es: 'es_CO',
  en: 'en_US',
};

/** Texto en ambos idiomas. */
export type L<T = string> = Record<Lang, T>;
