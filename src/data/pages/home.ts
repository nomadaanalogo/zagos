// Copy aprobado por ZAGOS. No modificar textos sin aprobación del cliente.
// Los campos `image` solo describen qué foto va en cada placeholder; `id`, `key` y `link` son estructura.

export const home = {
  es: {
    seo: {
      title: 'ZAGOS | Ingredientes industriales y marca privada desde Colombia',
      description:
        'Ajíes, vegetales y hierbas transformados en mash, deshidratados y en salmuera para fabricantes de alimentos, foodservice, distribuidores y marcas privadas.',
    },
    hero: {
      eyebrow: 'Mash · Deshidratados · En salmuera',
      title: 'De ingredientes latinoamericanos a *soluciones para la industria alimentaria.*',
      lead: 'Transformamos *ajíes, vegetales y hierbas* en ingredientes industriales confiables: *mash, deshidratados y encurtidos*, con soluciones para fabricantes, foodservice, distribución y marca privada.',
      ctaPrimary: 'Explorar soluciones',
      ctaSecondary: 'Solicitar cotización',
      // Slider del hero: del origen al producto (la primera es la imagen principal / LCP)
      slides: [
        { photo: 'campo/campo-aereo-cultivo-zagos', alt: 'Vista aérea de cultivos de ZAGOS con trabajadores en cosecha' },
        { photo: 'campo/ajies-rojos-cultivo', alt: 'Ajíes rojos en el cultivo' },
        { photo: 'planta/seleccion/operario-bandejas-deshidratado', alt: 'Operario con bandejas de deshidratado en la planta de ZAGOS', focus: '50% 35%' },
        { photo: 'producto/bodegon-deshidratados-zagos', alt: 'Ingredientes deshidratados ZAGOS en polvo y escama' },
      ],
      sliderLabels: { pause: 'Pausar presentación', play: 'Reanudar presentación', goTo: 'Ver imagen' },
    },
    ingredients: {
      eyebrow: 'Materias primas',
      title: 'Nuestras materias primas',
      lead: 'Conocemos el ingrediente desde el origen. Trabajamos con materias primas agrícolas seleccionadas y procesos diseñados para convertirlas en soluciones consistentes para producción industrial.',
      groups: [
        {
          title: 'Ajíes',
          icon: 'flame',
          items: [
            { label: 'Jolokia', id: 'jolokia' },
            { label: 'Habanero', id: 'habanero' },
            { label: 'Jalapeño', id: 'jalapeno' },
            { label: 'Cayenne', id: 'cayenne' },
            { label: 'Caribbean / Tabasco', id: 'tabasco-caribbean' },
          ],
          note: 'Desarrollos especiales según disponibilidad y especificación.',
          image: { photo: 'campo/ajies-rojos-cultivo', alt: 'Ajíes rojos en el cultivo', label: 'Ajíes reales de ZAGOS — 4:5 (vertical)' },
        },
        {
          title: 'Vegetales',
          icon: 'leaf',
          items: [
            { label: 'Cebolla junca (scallions)', id: 'scallions' },
            { label: 'Cebolla', id: 'onion' },
            { label: 'Pimentón rojo', id: 'red-bell-pepper' },
          ],
          image: { photo: 'campo/cebolla-junca-cultivo', alt: 'Cultivo de cebolla junca', label: 'Scallions, cebolla y pimentón — 4:5 (vertical)' },
        },
        {
          title: 'Hierbas',
          icon: 'sprout',
          items: [
            { label: 'Cilantro', id: 'cilantro' },
            { label: 'Perejil', id: 'parsley' },
          ],
          note: 'Otras referencias desarrolladas según proyecto.',
          image: { photo: 'campo/cilantro-cultivo', alt: 'Cultivo de cilantro', label: 'Cilantro y perejil — 4:5 (vertical)' },
        },
      ],
      cta: 'Ver todos los ingredientes',
    },
    formats: {
      eyebrow: 'Soluciones',
      title: 'Tres formas de transformar',
      lead: 'Formatos industriales diseñados para reducir preparación, simplificar el abastecimiento e integrarse de forma eficiente a tu proceso.',
      cards: [
        {
          key: 'mash',
          title: 'Pastas',
          text: 'Ingredientes procesados para integración directa en salsas, aderezos, bases y formulaciones industriales.',
          image: { photo: 'planta/seleccion/pesaje-aji-proceso', alt: 'Operario pesando ají fresco picado en la planta de ZAGOS', label: 'Mash en proceso / barril — 3:4 (vertical)' },
        },
        {
          key: 'dehydrated',
          title: 'Deshidratados',
          text: 'Polvos, escamas y otras granulometrías para sazonadores, snacks, cárnicos, sopas, salsas y formulaciones secas.',
          image: { photo: 'planta/seleccion/deshidratado-cilantro-bandeja', alt: 'Cilantro deshidratado en bandeja de secado', label: 'Deshidratados: polvo, escama, entero — 3:4 (vertical)' },
        },
        {
          key: 'brine',
          title: 'Salmuera',
          text: 'Ajíes conservados en salmuera para aplicaciones industriales que requieren identidad, textura y conservación.',
          image: { photo: 'campo/ajies-tipo-tabasco-planta', alt: 'Ajíes tipo Tabasco en la planta', label: 'Ajíes en salmuera — 3:4 (vertical)' },
        },
      ],
      cta: 'Ver solución',
    },
    models: {
      eyebrow: 'Modelos de negocio',
      title: 'Diseñado para diferentes modelos de negocio',
      cards: [
        { title: 'Industrial', text: 'Ingredientes a granel y especificaciones para fabricantes.', link: { key: 'industries' } },
        { title: 'Foodservice', text: 'Formatos prácticos para operaciones de alto volumen.', link: { key: 'industries', hash: 'foodservice' } },
        { title: 'Distribución', text: 'Soluciones listas para comercialización y abastecimiento recurrente.', link: { key: 'industries', hash: 'distributors' } },
        { title: 'Marca privada', text: 'Desarrollo, producción y adaptación de presentación bajo la marca del cliente.', link: { key: 'privateLabel' } },
      ],
    },
    quality: {
      eyebrow: 'Calidad e inocuidad',
      title: 'Calidad que acompaña cada lote',
      text: 'La calidad comienza antes de que la materia prima llegue a planta. Trabajamos con trazabilidad, criterios de selección de proveedores, controles de proceso y programas de inocuidad que acompañan el producto desde el origen hasta su liberación.',
      cta: 'Conocer nuestro sistema de calidad',
      image: { photo: 'planta/seleccion/operario-bandejas-deshidratado', alt: 'Operario con bandejas de deshidratado y equipo de protección', label: 'Control de calidad / detector de metales — 4:5' },
      imageSecondary: { photo: 'campo/cosecha-cilantro-manos', alt: 'Cosecha manual de cilantro en campo', label: 'Materia prima en campo — 1:1' },
    },
    export: {
      eyebrow: 'Export ready',
      title: 'Listos para mercados internacionales',
      text: 'Experiencia atendiendo mercados internacionales y requerimientos documentales de clientes en Estados Unidos, Latinoamérica, el Caribe, Canadá y Europa. Nuestro equipo acompaña especificaciones, documentación técnica y coordinación comercial para exportación.',
      markets: ['Estados Unidos', 'Latinoamérica', 'El Caribe', 'Canadá', 'Europa'],
      cta: 'Exportaciones',
    },
    privateLabel: {
      eyebrow: 'Marca privada',
      title: 'Tu marca. Nuestra experiencia de manufactura.',
      text: 'Desarrollamos proyectos desde la definición del producto y formato hasta la producción y adaptación de empaque, incluyendo soporte técnico y documental para el mercado objetivo.',
      cta: 'Cuéntanos tu proyecto',
      secondary: 'Cómo funciona',
      image: { photo: 'producto/frascos-zagos-deshidratados', alt: 'Frascos ZAGOS de cebolla junca, ají cayena y cilantro deshidratados', label: 'Doypacks, galones y empaques reales — 4:3' },
    },
  },
  en: {
    seo: {
      title: 'ZAGOS | Industrial Food Ingredients & private label from Colombia',
      description:
        'Peppers, vegetables and herbs transformed into mash, dehydrated and In Brine ingredients for food manufacturers, foodservice, distributors and private label brands.',
    },
    hero: {
      eyebrow: 'Mash · Dehydrated · In Brine',
      title: 'From Latin American ingredients to *food industry solutions.*',
      lead: 'We transform *peppers, vegetables and herbs* into reliable industrial ingredients: *mash, dehydrated and In Brine* products for food manufacturers, foodservice, distributors and private label brands.',
      ctaPrimary: 'Explore solutions',
      ctaSecondary: 'Request a quote',
      slides: [
        { photo: 'campo/campo-aereo-cultivo-zagos', alt: 'Aerial view of ZAGOS crop fields with workers harvesting' },
        { photo: 'campo/ajies-rojos-cultivo', alt: 'Red peppers growing in the field' },
        { photo: 'planta/seleccion/operario-bandejas-deshidratado', alt: 'Operator with drying trays at the ZAGOS facility', focus: '50% 35%' },
        { photo: 'producto/bodegon-deshidratados-zagos', alt: 'ZAGOS dehydrated ingredients as powder and flakes' },
      ],
      sliderLabels: { pause: 'Pause slideshow', play: 'Play slideshow', goTo: 'Show image' },
    },
    ingredients: {
      eyebrow: 'Raw materials',
      title: 'Our raw materials',
      lead: 'We understand ingredients from their origin. We work with selected agricultural raw materials and controlled processes to turn them into consistent solutions for industrial production.',
      groups: [
        {
          title: 'Peppers',
          icon: 'flame',
          items: [
            { label: 'Jolokia', id: 'jolokia' },
            { label: 'Habanero', id: 'habanero' },
            { label: 'Jalapeño', id: 'jalapeno' },
            { label: 'Cayenne', id: 'cayenne' },
            { label: 'Caribbean / Tabasco', id: 'tabasco-caribbean' },
          ],
          note: 'Special developments subject to availability and specification.',
          image: { photo: 'campo/ajies-rojos-cultivo', alt: 'Red peppers growing in the field', label: 'Real ZAGOS peppers — 4:5 (portrait)' },
        },
        {
          title: 'Vegetables',
          icon: 'leaf',
          items: [
            { label: 'Scallions', id: 'scallions' },
            { label: 'Onion', id: 'onion' },
            { label: 'Red bell pepper', id: 'red-bell-pepper' },
          ],
          image: { photo: 'campo/cebolla-junca-cultivo', alt: 'Scallion crop in the field', label: 'Scallions, onion and red bell pepper — 4:5 (portrait)' },
        },
        {
          title: 'Herbs',
          icon: 'sprout',
          items: [
            { label: 'Cilantro', id: 'cilantro' },
            { label: 'Parsley', id: 'parsley' },
          ],
          note: 'Other references developed by project.',
          image: { photo: 'campo/cilantro-cultivo', alt: 'Cilantro crop in the field', label: 'Cilantro and parsley — 4:5 (portrait)' },
        },
      ],
      cta: 'View all ingredients',
    },
    formats: {
      eyebrow: 'Solutions',
      title: 'Three ways to transform',
      lead: 'Industrial formats designed to reduce preparation, simplify sourcing and integrate efficiently into your process.',
      cards: [
        {
          key: 'mash',
          title: 'Mash & Pastes',
          text: 'Processed ingredients for direct integration into sauces, dressings, bases and industrial formulations.',
          image: { photo: 'planta/seleccion/pesaje-aji-proceso', alt: 'Operator weighing chopped fresh peppers at the ZAGOS facility', label: 'Mash in process / drum — 3:4 (portrait)' },
        },
        {
          key: 'dehydrated',
          title: 'Dehydrated',
          text: 'Powders, flakes and other particle sizes for seasonings, snacks, meat products, soups, sauces and dry formulations.',
          image: { photo: 'planta/seleccion/deshidratado-cilantro-bandeja', alt: 'Dehydrated cilantro on a drying tray', label: 'Dehydrated: powder, flakes, whole — 3:4 (portrait)' },
        },
        {
          key: 'brine',
          title: 'In Brine',
          text: 'Peppers preserved in brine for industrial applications that require identity, texture and preservation.',
          image: { photo: 'campo/ajies-tipo-tabasco-planta', alt: 'Tabasco-type peppers on the plant', label: 'Peppers in brine — 3:4 (portrait)' },
        },
      ],
      cta: 'View solution',
    },
    models: {
      eyebrow: 'Business models',
      title: 'Built for different business models',
      cards: [
        { title: 'Industrial', text: 'Bulk ingredients and specifications for manufacturers.', link: { key: 'industries' } },
        { title: 'Foodservice', text: 'Practical formats for high-volume operations.', link: { key: 'industries', hash: 'foodservice' } },
        { title: 'Distribution', text: 'Ready-to-market solutions and recurring supply.', link: { key: 'industries', hash: 'distributors' } },
        { title: 'Private label', text: "Development, production and packaging adaptation under the customer's brand.", link: { key: 'privateLabel' } },
      ],
    },
    quality: {
      eyebrow: 'Food safety & quality',
      title: 'Quality behind every batch',
      text: 'Quality starts before raw materials reach our facility. Traceability, supplier controls, process monitoring and food safety programs support every batch from origin to release.',
      cta: 'Explore our quality system',
      image: { photo: 'planta/seleccion/operario-bandejas-deshidratado', alt: 'Operator with drying trays and protective equipment', label: 'Quality control / metal detector — 4:5' },
      imageSecondary: { photo: 'campo/cosecha-cilantro-manos', alt: 'Hand harvesting cilantro in the field', label: 'Raw material in the field — 1:1' },
    },
    export: {
      eyebrow: 'Export ready',
      title: 'Ready for international markets',
      text: 'Experience serving international markets and customer documentation requirements across the United States, Latin America, the Caribbean, Canada and Europe. Our team supports specifications, technical documentation and commercial coordination for export.',
      markets: ['United States', 'Latin America', 'The Caribbean', 'Canada', 'Europe'],
      cta: 'Export',
    },
    privateLabel: {
      eyebrow: 'Private label',
      title: 'Your brand. Our manufacturing expertise.',
      text: 'We support projects from product and format definition through production and packaging adaptation, including technical and documentation support for the target market.',
      cta: 'Tell us about your project',
      secondary: 'How it works',
      image: { photo: 'producto/frascos-zagos-deshidratados', alt: 'ZAGOS jars of dehydrated scallions, cayenne pepper and cilantro', label: 'Real doypacks, gallons and packaging — 4:3' },
    },
  },
};
