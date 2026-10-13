/**
 * Convierte *texto* en <span class="hl">texto</span> para resaltar palabras clave
 * sin alterar el copy. Escapa HTML antes de transformar.
 */
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const highlight = (text: string) => escape(text).replace(/\*([^*]+)\*/g, '<span class="hl">$1</span>');

/** Texto plano (sin marcadores), para atributos, SEO, etc. */
export const plain = (text: string) => text.replace(/\*([^*]+)\*/g, '$1');
