import type { L } from '../i18n/config';
import type { FormatKey } from './common';

export type Category = 'peppers' | 'vegetables' | 'herbs';

export interface IngredientPage {
  /** Foto del hero de la ficha (clave en src/fotos) */
  photo?: string;
  seo: { title: L; description: L };
  h1: L;
  applications: L;
}

export interface Ingredient {
  id: string;
  category: Category;
  name: L;
  /** Nombre en el otro idioma, se muestra como subtítulo (p. ej. "Cebolla junca · Scallions") */
  altName?: L;
  summary: L;
  formats: FormatKey[];
  /** Nota adicional de formato: "según proyecto", "polvo · escama"… */
  formatsNote?: L;
  /** Si existe, el ingrediente tiene página propia en /ingredientes/{id}/ */
  page?: IngredientPage;
}

export const categories: Record<Category, L> = {
  peppers: { es: 'Ajíes', en: 'Peppers' },
  vegetables: { es: 'Vegetales', en: 'Vegetables' },
  herbs: { es: 'Hierbas', en: 'Herbs' },
};

const byProject: L = { es: 'Desarrollos según proyecto', en: 'Developments by project' };

export const ingredients: Ingredient[] = [
  // ---------- Peppers ----------
  {
    id: 'jolokia',
    category: 'peppers',
    name: { es: 'Jolokia', en: 'Jolokia' },
    altName: { es: 'Ghost pepper', en: 'Ghost pepper' },
    summary: {
      es: 'Conocido como Ghost pepper, es uno de los ajíes más picantes del mundo.',
      en: 'Known as the Ghost pepper, one of the hottest peppers in the world.',
    },
    formats: ['mash'],
  },
  {
    id: 'habanero',
    category: 'peppers',
    name: { es: 'Habanero', en: 'Habanero' },
    summary: {
      es: 'Perfiles de alto picor para mash, deshidratados y desarrollos industriales.',
      en: 'High-heat profiles for mash, dehydrated and industrial developments.',
    },
    formats: ['mash', 'dehydrated'],
    formatsNote: byProject,
    page: {
      photo: 'campo/aji-rojo-planta',
      seo: {
        title: {
          es: 'Habanero en mash y deshidratado para la industria | ZAGOS',
          en: 'Habanero Mash & Dehydrated Habanero Supplier | ZAGOS',
        },
        description: {
          es: 'Mash de habanero y habanero deshidratado desde Colombia para salsas, sazonadores, snacks y marca privada. Solicita la especificación a ZAGOS.',
          en: 'Bulk habanero mash and dehydrated habanero from Colombia for sauces, seasonings, snacks and private label. Request specifications from ZAGOS.',
        },
      },
      h1: { es: 'Habanero en mash y deshidratado', en: 'Habanero mash and dehydrated habanero' },
      applications: {
        es: 'Salsas, salsas picantes, aderezos, sazonadores, snacks y formulaciones industriales.',
        en: 'Sauces, hot sauces, dressings, seasonings, snacks and industrial formulations.',
      },
    },
  },
  {
    id: 'jalapeno',
    category: 'peppers',
    name: { es: 'Jalapeño', en: 'Jalapeño' },
    summary: {
      es: 'Soluciones para salsas, foodservice, formulaciones y proyectos de marca.',
      en: 'Solutions for sauces, foodservice, formulations and brand projects.',
    },
    formats: ['mash', 'dehydrated'],
    formatsNote: byProject,
    page: {
      photo: 'campo/cosecha-aji-campo',
      seo: {
        title: {
          es: 'Jalapeño en mash y deshidratado para la industria | ZAGOS',
          en: 'Jalapeño Mash & Dehydrated Jalapeño Supplier | ZAGOS',
        },
        description: {
          es: 'Mash de jalapeño y jalapeño deshidratado para salsas, dips, marinados, foodservice y marca privada. Abastecimiento industrial desde Colombia.',
          en: 'Jalapeño mash and dehydrated jalapeño for sauces, dips, marinades, foodservice and private label. Industrial supply from Colombia by ZAGOS.',
        },
      },
      h1: { es: 'Jalapeño en mash y deshidratado', en: 'Jalapeño mash and dehydrated jalapeño' },
      applications: {
        es: 'Salsas, dips, marinados, foodservice y marca privada.',
        en: 'Sauces, dips, marinades, foodservice and private label.',
      },
    },
  },
  {
    id: 'cayenne',
    category: 'peppers',
    name: { es: 'Cayenne', en: 'Cayenne' },
    altName: { es: 'Cayena', en: 'Cayenne pepper' },
    summary: {
      es: 'Ingrediente para formulaciones que requieren picor y carácter.',
      en: 'An ingredient for formulations that call for heat and character.',
    },
    formats: ['mash', 'dehydrated'],
    formatsNote: { es: 'Según proyecto', en: 'By project' },
    page: {
      photo: 'producto/aji-cayena-polvo-escama',
      seo: {
        title: {
          es: 'Cayenne en mash y deshidratado para la industria | ZAGOS',
          en: 'Cayenne Pepper Mash & Dehydrated Cayenne | ZAGOS',
        },
        description: {
          es: 'Mash de ají cayenne y cayenne deshidratado para salsas picantes, sistemas de sazonado y formulaciones industriales. Desde Colombia.',
          en: 'Cayenne pepper mash and dehydrated cayenne for hot sauces, seasoning systems and industrial formulations. Supplied from Colombia by ZAGOS.',
        },
      },
      h1: { es: 'Cayenne en mash y deshidratado', en: 'Cayenne pepper mash and dehydrated cayenne' },
      applications: {
        es: 'Salsas picantes, sistemas de sazonado y formulaciones industriales.',
        en: 'Hot sauces, seasoning systems and industrial formulations.',
      },
    },
  },
  {
    id: 'tabasco-caribbean',
    category: 'peppers',
    name: { es: 'Ajíes tipo Tabasco / Caribbean', en: 'Tabasco-type / Caribbean peppers' },
    summary: {
      es: 'Aplicaciones en mash, salmuera y formulaciones para salsas.',
      en: 'Applications in mash, brine and sauce formulations.',
    },
    formats: ['mash', 'brine', 'dehydrated'],
    formatsNote: { es: 'Proyectos industriales', en: 'Industrial projects' },
    page: {
      photo: 'campo/ajies-tipo-tabasco-planta',
      seo: {
        title: {
          es: 'Ají tipo Tabasco en mash y en salmuera | ZAGOS',
          en: 'Tabasco-Type Pepper Mash & Peppers in Brine | ZAGOS',
        },
        description: {
          es: 'Mash de ají tipo Tabasco y Caribbean, ajíes en salmuera y deshidratados para salsas y bases industriales. Abastecimiento a granel desde Colombia.',
          en: 'Tabasco-type and Caribbean pepper mash, peppers in brine and dehydrated formats for sauces and industrial pepper bases. Bulk supply from Colombia.',
        },
      },
      h1: {
        es: 'Ajíes tipo Tabasco y Caribbean en mash y en salmuera',
        en: 'Tabasco-type and Caribbean pepper mash and peppers in brine',
      },
      applications: {
        es: 'Salsas, perfiles tipo fermentado y bases industriales de ají.',
        en: 'Sauces, fermented-style profiles and industrial pepper bases.',
      },
    },
  },
  {
    id: 'specialty',
    category: 'peppers',
    name: { es: 'Ajíes especiales', en: 'Specialty peppers' },
    summary: {
      es: 'Desarrollos especiales para proyectos industriales y formulaciones específicas, según disponibilidad y especificación.',
      en: 'Special developments for industrial projects and specific formulations, subject to availability and specification.',
    },
    formats: [],
    formatsNote: byProject,
  },

  // ---------- Vegetables ----------
  {
    id: 'scallions',
    category: 'vegetables',
    name: { es: 'Cebolla junca', en: 'Scallions' },
    altName: { es: 'Scallions', en: 'Cebolla junca' },
    summary: {
      es: 'Especialmente relevante para mash y deshidratados.',
      en: 'Especially relevant for mash and dehydrated formats.',
    },
    formats: ['mash', 'dehydrated'],
    page: {
      photo: 'producto/cebolla-junca-deshidratada',
      seo: {
        title: {
          es: 'Cebolla junca (scallions) en mash y deshidratada | ZAGOS',
          en: 'Dehydrated Scallions & Scallion Mash Supplier | ZAGOS',
        },
        description: {
          es: 'Mash de cebolla junca (scallions) y cebolla junca deshidratada para salsas, bases, sopas, sazonadores y foodservice. Desde Colombia.',
          en: 'Scallion mash and dehydrated scallions for sauces, bases, soups, seasoning systems and foodservice. Industrial supply from Colombia by ZAGOS.',
        },
      },
      h1: { es: 'Cebolla junca (scallions) en mash y deshidratada', en: 'Scallion mash and dehydrated scallions' },
      applications: {
        es: 'Salsas, bases, sopas, sistemas de sazonado y foodservice.',
        en: 'Sauces, bases, soups, seasoning systems and foodservice.',
      },
    },
  },
  {
    id: 'onion',
    category: 'vegetables',
    name: { es: 'Cebolla', en: 'Onion' },
    summary: {
      es: 'Aplicaciones en bases, mezclas y soluciones industriales.',
      en: 'Applications in bases, blends and industrial solutions.',
    },
    formats: ['dehydrated'],
  },
  {
    id: 'red-bell-pepper',
    category: 'vegetables',
    name: { es: 'Pimentón rojo', en: 'Red bell pepper' },
    altName: { es: 'Red bell pepper', en: 'Pimentón rojo' },
    summary: {
      es: 'Deshidratado en polvo o escama según especificación.',
      en: 'Dehydrated as powder or flakes according to specification.',
    },
    formats: ['dehydrated'],
    formatsNote: { es: 'Polvo · escama', en: 'Powder · flakes' },
    page: {
      photo: 'producto/pimenton-rojo-polvo',
      seo: {
        title: {
          es: 'Pimentón rojo deshidratado en polvo y escama | ZAGOS',
          en: 'Dehydrated Red Bell Pepper Powder & Flakes | ZAGOS',
        },
        description: {
          es: 'Pimentón rojo deshidratado en polvo y escama para sazonadores, snacks, cárnicos y salsas. Abastecimiento industrial desde Colombia por ZAGOS.',
          en: 'Dehydrated red bell pepper powder and flakes for seasonings, snacks, meat applications and sauces. Industrial supply from Colombia by ZAGOS.',
        },
      },
      h1: { es: 'Pimentón rojo deshidratado en polvo y escama', en: 'Dehydrated red bell pepper powder and flakes' },
      applications: {
        es: 'Sazonadores, snacks, aplicaciones cárnicas y salsas.',
        en: 'Seasonings, snacks, meat applications and sauces.',
      },
    },
  },
  {
    id: 'garlic',
    category: 'vegetables',
    name: { es: 'Ajo', en: 'Garlic' },
    summary: {
      es: 'Ingrediente y componente de mezclas y desarrollos.',
      en: 'An ingredient and component for blends and developments.',
    },
    formats: ['dehydrated'],
  },

  // ---------- Herbs ----------
  {
    id: 'cilantro',
    category: 'herbs',
    name: { es: 'Cilantro', en: 'Cilantro' },
    summary: {
      es: 'Deshidratado, mezclas y desarrollos según aplicación.',
      en: 'Dehydrated, blends and developments by application.',
    },
    formats: ['dehydrated'],
    formatsNote: { es: 'Mezclas y desarrollos', en: 'Blends and developments' },
    page: {
      photo: 'producto/cilantro-deshidratado',
      seo: {
        title: {
          es: 'Cilantro deshidratado para la industria | ZAGOS',
          en: 'Dehydrated Cilantro Supplier | ZAGOS',
        },
        description: {
          es: 'Cilantro deshidratado y mezclas de cilantro para sazonadores, salsas, sopas y mezclas culinarias. Abastecimiento industrial desde Colombia.',
          en: 'Dehydrated cilantro and cilantro blends for seasonings, sauces, soups and culinary blends. Industrial supply from Colombia by ZAGOS.',
        },
      },
      h1: { es: 'Cilantro deshidratado y mezclas', en: 'Dehydrated cilantro and blends' },
      applications: {
        es: 'Sazonadores, salsas, sopas y mezclas culinarias.',
        en: 'Seasonings, sauces, soups and culinary blends.',
      },
    },
  },
  {
    id: 'parsley',
    category: 'herbs',
    name: { es: 'Perejil', en: 'Parsley' },
    summary: {
      es: 'Mash, deshidratado y mezclas.',
      en: 'Mash, dehydrated and blends.',
    },
    formats: ['mash', 'dehydrated'],
  },
];

export const ingredientPages = ingredients.filter((i): i is Ingredient & { page: IngredientPage } => !!i.page);
