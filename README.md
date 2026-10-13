# ZAGOS — sitio web (Astro)

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera /dist (sitio estático)
```

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Textos de cada página (ES y EN lado a lado) | `src/data/pages/*.ts` |
| Ingredientes y fichas de producto | `src/data/ingredients.ts` |
| Menú, footer, credenciales, datos de empresa | `src/data/common.ts` |
| URLs por idioma | `src/i18n/routes.ts` |
| Composición de cada página (orden de secciones) | `src/views/*.astro` |
| Bloques de sección reutilizables | `src/components/sections/` |
| Componentes (cards, fichas técnicas, iconos…) | `src/components/ui/` |
| Colores, tipografía, espaciado | `src/styles/global.css` (`:root`) |

## Antes de publicar

- [ ] Dominio real en `astro.config.mjs` (`SITE`) y `public/robots.txt`
- [ ] `PUBLIC_FORM_ENDPOINT` en el hosting (ver `.env.example`)
- [x] Imagen para redes `public/og-image.jpg` (1200×630)
- [x] Logo (Header, Footer, favicon) en `public/brand/` · [x] Logos FDA, INVIMA, Kosher · [x] HACCP y FSSC (confirmados por ZAGOS). Logos en negro en `src/fotos/certificaciones/*-negro.webp`
- [ ] Email / teléfono en `company` (`src/data/common.ts`)
- [ ] Texto legal en la política de datos y quitar su `noindex`
- [x] Fotos reales (ver sección Fotos)
- [ ] Verificar lista de mercados con Comercio Exterior (`src/data/pages/export.ts`)

## Añadir una ficha de ingrediente

Agregar `page: { seo, h1, applications }` al ingrediente en `src/data/ingredients.ts`.
Se generan automáticamente `/ingredientes/{id}/` y `/en/ingredients/{id}/`, con hreflang, sitemap y datos estructurados.

## Fotos

- Biblioteca completa en `src/fotos/` (190 fotos WebP, máx. 2560px): `campo/`, `industria/`, `planta/`, `producto/`.
- Las fotos usadas en la web se registran en `src/data/photos.ts` (solo esas se publican).
- Cada sección indica su foto en los datos de la página: `image: { photo: 'campo/cilantro-cultivo', alt: '…' }`.
- `Photo.astro` genera automáticamente 6 tamaños responsive, lazy-loading y prioridad para el hero.
- Para cambiar una foto: cambiar la clave `photo` en `src/data/pages/*.ts` (y registrarla en `photos.ts` si es nueva). Actualizar también el `alt` para que describa la foto.
- `originales-psd/`: archivos Photoshop originales (no se publican).
