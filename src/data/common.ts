import type { L } from '../i18n/config';
import type { RouteKey } from '../i18n/routes';

export const company = {
  brand: 'ZAGOS',
  legalName: 'Servicios Deshidratados Zagos S.A.S.',
  locality: 'Palmira',
  region: 'Valle del Cauca',
  country: 'Colombia',
  countryCode: 'CO',
  street: 'Parque Industrial Palmaseca',
  // TODO: completar cuando estén disponibles
  email: '',
  phone: '',
  social: [] as string[],
};

export type FormatKey = 'mash' | 'dehydrated' | 'brine';

export const formats: Record<FormatKey, { name: L; anchor: string; icon: string }> = {
  mash: { name: { es: 'Mash', en: 'Mash' }, anchor: 'mash', icon: 'droplet' },
  dehydrated: { name: { es: 'Deshidratado', en: 'Dehydrated' }, anchor: 'dehydrated', icon: 'sun' },
  brine: { name: { es: 'En salmuera', en: 'In Brine' }, anchor: 'in-brine', icon: 'jar' },
};

type NavItem = { key: RouteKey; label: string };

export const common = {
  es: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    close: 'Cerrar menú',
    homeLabel: 'ZAGOS — Inicio',
    nav: [
      { key: 'home', label: 'Inicio' },
      { key: 'ingredients', label: 'Ingredientes' },
      { key: 'solutions', label: 'Soluciones' },
      { key: 'privateLabel', label: 'Private Label' },
      { key: 'industries', label: 'Industrias' },
      { key: 'quality', label: 'Calidad' },
      { key: 'about', label: 'Nosotros' },
      { key: 'export', label: 'Export' },
      { key: 'resources', label: 'Recursos' },
    ] as NavItem[],
    navCta: 'Cotizar',
    langSwitch: 'Ver esta página en inglés',
    breadcrumbHome: 'Inicio',
    breadcrumbLabel: 'Ruta de navegación',
    learnMore: 'Ver más',
    footer: {
      tagline: 'Ingredientes industriales · Foodservice · Private Label',
      lines: 'Peppers · Vegetables · Herbs | Mash · Dehydrated · In Brine',
      colSite: 'Soluciones',
      colCompany: 'Compañía',
      colLegal: 'Legal',
      siteLinks: [
      { key: 'ingredients', label: 'Ingredientes' },
        { key: 'solutions', label: 'Soluciones' },
        { key: 'privateLabel', label: 'Private Label' },
        { key: 'industries', label: 'Industrias' },
      ] as NavItem[],
      companyLinks: [
        { key: 'quality', label: 'Calidad e inocuidad' },
        { key: 'about', label: 'Nosotros' },
        { key: 'export', label: 'Export' },
        { key: 'resources', label: 'Recursos' },
        { key: 'contact', label: 'Contacto' },
      ] as NavItem[],
      legalLinks: [{ key: 'privacy', label: 'Política de tratamiento de datos' }] as NavItem[],
      rights: 'Todos los derechos reservados.',
      developedBy: 'Desarrollado por',
    },
    formatLabel: 'Formatos',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close menu',
    homeLabel: 'ZAGOS — Home',
    nav: [
      { key: 'home', label: 'Home' },
      { key: 'ingredients', label: 'Ingredients' },
      { key: 'solutions', label: 'Solutions' },
      { key: 'privateLabel', label: 'Private Label' },
      { key: 'industries', label: 'Industries' },
      { key: 'quality', label: 'Quality' },
      { key: 'about', label: 'About' },
      { key: 'export', label: 'Export' },
      { key: 'resources', label: 'Resources' },
    ] as NavItem[],
    navCta: 'Get a quote',
    langSwitch: 'Ver esta página en español',
    breadcrumbHome: 'Home',
    breadcrumbLabel: 'Breadcrumb',
    learnMore: 'Learn more',
    footer: {
      tagline: 'Industrial Food Ingredients · Foodservice · Private Label',
      lines: 'Peppers · Vegetables · Herbs | Mash · Dehydrated · In Brine',
      colSite: 'Solutions',
      colCompany: 'Company',
      colLegal: 'Legal',
      siteLinks: [
      { key: 'ingredients', label: 'Ingredients' },
        { key: 'solutions', label: 'Solutions' },
        { key: 'privateLabel', label: 'Private Label' },
        { key: 'industries', label: 'Industries' },
      ] as NavItem[],
      companyLinks: [
        { key: 'quality', label: 'Food Safety & Quality' },
        { key: 'about', label: 'About' },
        { key: 'export', label: 'Export' },
        { key: 'resources', label: 'Resources' },
        { key: 'contact', label: 'Contact' },
      ] as NavItem[],
      legalLinks: [{ key: 'privacy', label: 'Privacy & data policy' }] as NavItem[],
      rights: 'All rights reserved.',
      developedBy: 'Developed by',
    },
    formatLabel: 'Formats',
  },
};

/**
 * Credenciales: comunicar exactamente así (ver guía de copy, sección 8.3).
 * `logo`: logo entregado por ZAGOS (clave en src/data/photos.ts). Sin logo se muestra el sello propio con la sigla `seal`.
 * Logos HACCP y FSSC confirmados por ZAGOS (13/10/2026).
 */
export const credentials = {
  es: [
    { seal: 'FDA', logo: 'certificaciones/fda-registered', name: 'FDA Registered', note: 'Registrado ante la FDA para las actividades aplicables.' },
    { seal: 'INVIMA', logo: 'certificaciones/invima', name: 'INVIMA', note: 'Cumplimiento sanitario y regulatorio ante INVIMA para la operación y productos correspondientes.' },
    { seal: 'KOSHER', logo: 'certificaciones/kosher', name: 'Kosher', note: 'Kosher Certified.' },
    { seal: 'FSSC', logo: 'certificaciones/fssc-22000', name: 'FSSC Development Program V2.0', note: 'Certificación vigente.' },
    { seal: 'HACCP', logo: 'certificaciones/haccp-food-safety', name: 'HACCP · Food Defense', note: 'Programas implementados dentro del sistema de inocuidad.' },
  ],
  en: [
    { seal: 'FDA', logo: 'certificaciones/fda-registered', name: 'FDA Registered', note: 'Registered with the FDA for applicable activities.' },
    { seal: 'INVIMA', logo: 'certificaciones/invima', name: 'INVIMA', note: 'Sanitary and regulatory compliance with INVIMA for the corresponding operation and products.' },
    { seal: 'KOSHER', logo: 'certificaciones/kosher', name: 'Kosher', note: 'Kosher Certified.' },
    { seal: 'FSSC', logo: 'certificaciones/fssc-22000', name: 'FSSC Development Program V2.0', note: 'Current certification.' },
    { seal: 'HACCP', logo: 'certificaciones/haccp-food-safety', name: 'HACCP · Food Defense', note: 'Programs implemented within our food safety system.' },
  ],
};
