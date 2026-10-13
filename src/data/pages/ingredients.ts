export const ingredientsPage = {
  es: {
    seo: {
      title: 'Ingredientes | Ajíes, vegetales y hierbas para la industria | ZAGOS',
      description:
        'Conoce las materias primas que ZAGOS transforma en soluciones industriales: ajíes, cebolla junca, cebolla, cilantro, perejil, pimentón rojo y ajo.',
    },
    breadcrumb: 'Ingredientes',
    hero: {
      eyebrow: 'Materias primas',
      title: 'El ingrediente es *el punto de partida.*',
      lead: 'Seleccionamos y transformamos materias primas agrícolas con enfoque en trazabilidad, consistencia y funcionalidad para la industria alimentaria.',
      note: 'La disponibilidad de cada formato depende del ingrediente, cosecha, especificación y proyecto.',
      image: { photo: 'producto/bodegon-ingredientes-zagos', alt: 'Bodegón de ingredientes deshidratados ZAGOS: ajíes, cilantro y cebolla junca', label: 'Ajíes, scallions y cilantro reales de ZAGOS — 4:3' },
    },
    peppers: { title: 'Ajíes', eyebrow: 'Peppers' },
    vegHerbs: { title: 'Vegetales y hierbas', eyebrow: 'Vegetables & Herbs' },
    viewSheet: 'Ver ficha',
    requestSheet: 'Solicitar ficha técnica',
    cta: {
      title: '¿Necesitas la ficha técnica de un ingrediente?',
      text: 'Indícanos el ingrediente, el formato y la aplicación. Te enviamos las especificaciones clave disponibles.',
      button: 'Solicitar ficha técnica',
    },
  },
  en: {
    seo: {
      title: 'Ingredients | Peppers, Vegetables & Herbs for Industry | ZAGOS',
      description:
        'Explore the raw materials ZAGOS transforms into industrial solutions: peppers, scallions, onion, cilantro, parsley, red bell pepper and garlic.',
    },
    breadcrumb: 'Ingredients',
    hero: {
      eyebrow: 'Raw materials',
      title: 'It starts with *the ingredient.*',
      lead: 'We select and transform agricultural raw materials with a focus on traceability, consistency and functionality for food manufacturing.',
      note: 'Availability of each format depends on the ingredient, harvest, specification and project.',
      image: { photo: 'producto/bodegon-ingredientes-zagos', alt: 'Still life of ZAGOS dehydrated ingredients: peppers, cilantro and scallions', label: 'Real ZAGOS peppers, scallions and cilantro — 4:3' },
    },
    peppers: { title: 'Peppers', eyebrow: 'Ajíes' },
    vegHerbs: { title: 'Vegetables & Herbs', eyebrow: 'Vegetales y hierbas' },
    viewSheet: 'View ingredient',
    requestSheet: 'Request technical data sheet',
    cta: {
      title: 'Need a technical data sheet?',
      text: 'Tell us the ingredient, format and application. We will send you the key specifications available.',
      button: 'Request technical data sheet',
    },
  },
};

/** Textos de las fichas individuales (/ingredientes/{slug}/) */
export const ingredientDetail = {
  es: {
    body: 'Ingrediente seleccionado y transformado bajo controles de proceso y trazabilidad. ZAGOS adapta formato, empaque y especificaciones comerciales de acuerdo con la referencia, volumen, aplicación y mercado destino.',
    cta: 'Solicitar especificación',
    secondary: 'Ver soluciones',
    specTitle: 'Ficha del ingrediente',
    spec: {
      formats: 'Formatos ZAGOS disponibles',
      applications: 'Aplicaciones recomendadas',
      specs: 'Especificaciones clave',
      specsValue: 'Disponibles bajo solicitud en la ficha técnica.',
      packaging: 'Presentaciones',
      packagingValue: 'Industriales, foodservice y retail, definidas por producto y proyecto.',
    },
    formatsTitle: 'Formatos para este ingrediente',
    viewSolution: 'Ver solución',
    related: 'Otros ingredientes',
    ctaBand: {
      title: 'Solicita la especificación',
      text: 'Cuéntanos formato, volumen, aplicación y mercado destino para orientar la especificación técnica y comercial.',
    },
    imageLabel: 'Fotografía real del ingrediente — 4:3',
    imageAlt: (name: string) => `${name} seleccionado por ZAGOS para uso industrial`,
  },
  en: {
    body: 'Selected and processed under controlled conditions and traceability. ZAGOS adapts format, packaging and commercial specifications according to product, volume, application and destination market.',
    cta: 'Request specification',
    secondary: 'View solutions',
    specTitle: 'Ingredient overview',
    spec: {
      formats: 'Available ZAGOS formats',
      applications: 'Recommended applications',
      specs: 'Key specifications',
      specsValue: 'Available on request in the technical data sheet.',
      packaging: 'Packaging',
      packagingValue: 'Industrial, foodservice and retail, defined by product and project.',
    },
    formatsTitle: 'Formats for this ingredient',
    viewSolution: 'View solution',
    related: 'Other ingredients',
    ctaBand: {
      title: 'Request the specification',
      text: 'Tell us the format, volume, application and destination market so we can guide the technical and commercial specification.',
    },
    imageLabel: 'Real ingredient photograph — 4:3',
    imageAlt: (name: string) => `${name} selected by ZAGOS for industrial use`,
  },
};
