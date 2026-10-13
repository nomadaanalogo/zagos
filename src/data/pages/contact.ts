const ingredientOptions = [
  { value: 'jolokia', es: 'Jolokia', en: 'Jolokia' },
  { value: 'habanero', es: 'Habanero', en: 'Habanero' },
  { value: 'jalapeno', es: 'Jalapeño', en: 'Jalapeño' },
  { value: 'cayenne', es: 'Cayenne', en: 'Cayenne' },
  { value: 'tabasco-caribbean', es: 'Tabasco / Caribbean', en: 'Tabasco / Caribbean' },
  { value: 'scallions', es: 'Cebolla junca', en: 'Scallions' },
  { value: 'onion', es: 'Cebolla', en: 'Onion' },
  { value: 'cilantro', es: 'Cilantro', en: 'Cilantro' },
  { value: 'parsley', es: 'Perejil', en: 'Parsley' },
  { value: 'red-bell-pepper', es: 'Pimentón rojo', en: 'Red Bell Pepper' },
  { value: 'garlic', es: 'Ajo', en: 'Garlic' },
  { value: 'other', es: 'Otro', en: 'Other' },
];

const formatOptions = [
  { value: 'mash', es: 'Pasta', en: 'Mash' },
  { value: 'dehydrated', es: 'Deshidratado', en: 'Dehydrated' },
  { value: 'brine', es: 'Salmuera', en: 'In Brine' },
  { value: 'private-label', es: 'Marca privada', en: 'Private label' },
  { value: 'not-sure', es: 'No estoy seguro', en: 'Not sure' },
];

const companyTypes = [
  { value: 'manufacturer', es: 'Fabricante', en: 'Manufacturer' },
  { value: 'foodservice', es: 'Foodservice', en: 'Foodservice' },
  { value: 'distributor', es: 'Distribuidor', en: 'Distributor' },
  { value: 'importer', es: 'Importador', en: 'Importer' },
  { value: 'private-label', es: 'Marca privada', en: 'Private label brand' },
  { value: 'other', es: 'Otro', en: 'Other' },
];

export const contactOptions = { ingredientOptions, formatOptions, companyTypes };

export const contact = {
  es: {
    seo: {
      title: 'Contacto ZAGOS | Solicita una cotización o información técnica',
      description:
        'Cuéntanos el ingrediente, formato, volumen y mercado destino que necesitas. Contacta a ZAGOS para proyectos industriales, foodservice o marca privada.',
    },
    breadcrumb: 'Contacto',
    hero: {
      eyebrow: 'Contacto',
      title: 'Cuéntanos qué necesitas *desarrollar o abastecer.*',
      lead: 'Entre más información nos compartas sobre tu aplicación, volumen y mercado, mejor podremos orientar la conversación técnica y comercial.',
    },
    form: {
      legendContact: 'Tus datos',
      legendProject: 'Tu proyecto',
      name: 'Nombre',
      company: 'Empresa',
      role: 'Cargo',
      email: 'Correo corporativo',
      phone: 'Teléfono / WhatsApp',
      country: 'País',
      companyType: 'Tipo de empresa',
      select: 'Selecciona una opción',
      ingredient: 'Materia prima',
      format: 'Formato',
      volume: 'Volumen estimado',
      volumePh: 'Ej.: 2 toneladas / mes',
      packaging: 'Presentación requerida',
      packagingPh: 'Ej.: barril 220 L, bolsa 3 kg…',
      application: 'Aplicación',
      applicationPh: 'Ej.: salsa picante, sazonador…',
      market: 'Mercado destino',
      message: 'Detalles del proyecto',
      optional: '(opcional)',
      required: 'Obligatorio',
      multiHint: 'Puedes elegir varias.',
      consent: 'Autorizo a Servicios Deshidratados Zagos S.A.S. el tratamiento de mis datos personales conforme a la',
      consentLink: 'Política de tratamiento de datos',
      submit: 'Enviar solicitud',
      sending: 'Enviando…',
      success: 'Recibimos tu solicitud. Nuestro equipo revisará la información para orientar el siguiente paso técnico o comercial.',
      error: 'No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.',
    },
    aside: {
      title: 'Qué incluir en tu solicitud',
      items: ['Ingrediente y formato', 'Volumen estimado', 'Aplicación', 'Mercado destino', 'Requerimiento de empaque'],
      locationTitle: 'Planta',
    },
  },
  en: {
    seo: {
      title: 'Contact ZAGOS | Request a Quote or Technical Information',
      description:
        'Tell us the ingredient, format, volume and destination market you need. Contact ZAGOS for industrial, foodservice or private label projects.',
    },
    breadcrumb: 'Contact',
    hero: {
      eyebrow: 'Contact',
      title: 'Tell us what you need to *develop or source.*',
      lead: 'The more information you share about your application, volume and market, the better we can guide the technical and commercial conversation.',
    },
    form: {
      legendContact: 'Your details',
      legendProject: 'Your project',
      name: 'Name',
      company: 'Company',
      role: 'Role',
      email: 'Business email',
      phone: 'Phone / WhatsApp',
      country: 'Country',
      companyType: 'Company type',
      select: 'Select an option',
      ingredient: 'Raw material',
      format: 'Format',
      volume: 'Estimated volume',
      volumePh: 'e.g. 2 tons / month',
      packaging: 'Packaging requirement',
      packagingPh: 'e.g. 220 L drum, 3 kg bag…',
      application: 'Application',
      applicationPh: 'e.g. hot sauce, seasoning…',
      market: 'Destination market',
      message: 'Project details',
      optional: '(optional)',
      required: 'Required',
      multiHint: 'You can choose more than one.',
      consent: 'I authorize Servicios Deshidratados Zagos S.A.S. to process my personal data in accordance with the',
      consentLink: 'Privacy & data policy',
      submit: 'Submit request',
      sending: 'Sending…',
      success: 'We received your request. Our team will review the information and determine the appropriate technical or commercial next step.',
      error: 'We could not send your request. Please try again in a few minutes.',
    },
    aside: {
      title: 'What to include',
      items: ['Ingredient and format', 'Estimated volume', 'Application', 'Destination market', 'Packaging requirement'],
      locationTitle: 'Facility',
    },
  },
};

export const privacy = {
  es: {
    title: 'Política de tratamiento de datos personales',
    description: 'Política de tratamiento de datos personales de Servicios Deshidratados Zagos S.A.S.',
    pending: 'Contenido legal pendiente de entrega por parte de ZAGOS.',
  },
  en: {
    title: 'Privacy & data policy',
    description: 'Personal data processing policy of Servicios Deshidratados Zagos S.A.S.',
    pending: 'Legal content pending delivery by ZAGOS.',
  },
};
