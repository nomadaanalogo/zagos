import type { ImageMetadata } from 'astro';

/**
 * Fotos publicadas en la web. La biblioteca completa (190 fotos WebP) está en src/fotos;
 * aquí se registran SOLO las que se usan, para que el build no publique las demás.
 *
 * Para usar una foto nueva:
 *   1. import nombre from '../fotos/<carpeta>/<archivo>.webp';
 *   2. añadirla al objeto `photos` con su clave '<carpeta>/<archivo>'
 *   3. referenciarla en los datos de la página: image: { photo: '<carpeta>/<archivo>', alt: '…' }
 */

// Campo
import agronomoProductorCampo from '../fotos/campo/agronomo-productor-campo.webp';
import ajiRojoPlanta from '../fotos/campo/aji-rojo-planta.webp';
import ajiesRojosCultivo from '../fotos/campo/ajies-rojos-cultivo.webp';
import ajiesTipoTabascoPlanta from '../fotos/campo/ajies-tipo-tabasco-planta.webp';
import campoAereoCultivoZagos from '../fotos/campo/campo-aereo-cultivo-zagos.webp';
import cargaCosechaCamion from '../fotos/campo/carga-cosecha-camion.webp';
import cebollaJuncaCultivo from '../fotos/campo/cebolla-junca-cultivo.webp';
import cilantroCultivo from '../fotos/campo/cilantro-cultivo.webp';
import cosechaAjiCampo from '../fotos/campo/cosecha-aji-campo.webp';
import cosechaCilantroManos from '../fotos/campo/cosecha-cilantro-manos.webp';
import ingenieroCampoTablet from '../fotos/campo/ingeniero-campo-tablet.webp';
// Industria
import empaqueGranel from '../fotos/industria/empaque-granel-aji-cebolla-cilantro.webp';
// Planta
import equipoZagosPlanta from '../fotos/planta/equipo-zagos-planta.webp';
import tolvaProceso from '../fotos/planta/tolva-proceso-deshidratado.webp';
import ajiDeshidratadoBandeja from '../fotos/planta/seleccion/aji-deshidratado-bandeja.webp';
import camarasDeshidratacion from '../fotos/planta/seleccion/camaras-deshidratacion.webp';
import deshidratadoCebollaBandeja from '../fotos/planta/seleccion/deshidratado-cebolla-bandeja.webp';
import deshidratadoCilantroBandeja from '../fotos/planta/seleccion/deshidratado-cilantro-bandeja.webp';
import equipoPlantaEpp from '../fotos/planta/seleccion/equipo-planta-epp.webp';
import operarioBandejaAji from '../fotos/planta/seleccion/operario-bandeja-aji.webp';
import operarioBandejasDeshidratado from '../fotos/planta/seleccion/operario-bandejas-deshidratado.webp';
import pesajeAjiProceso from '../fotos/planta/seleccion/pesaje-aji-proceso.webp';
// Producto
import ajiCayenaPolvoEscama from '../fotos/producto/aji-cayena-polvo-escama.webp';
import aplicacionCulinaria from '../fotos/producto/aplicacion-culinaria-zagos.webp';
import bodegonDeshidratados from '../fotos/producto/bodegon-deshidratados-zagos.webp';
import bodegonIngredientes from '../fotos/producto/bodegon-ingredientes-zagos.webp';
import cebollaJuncaDeshidratada from '../fotos/producto/cebolla-junca-deshidratada.webp';
import cilantroDeshidratado from '../fotos/producto/cilantro-deshidratado.webp';
import frascosDeshidratados from '../fotos/producto/frascos-zagos-deshidratados.webp';
import frascosRetail from '../fotos/producto/frascos-zagos-retail.webp';
import pimentonRojoPolvo from '../fotos/producto/pimenton-rojo-polvo.webp';
// Certificaciones (logos entregados por ZAGOS, versión en negro; las versiones a color están junto a ellas)
import certFda from '../fotos/certificaciones/fda-registered-negro.webp';
import certInvima from '../fotos/certificaciones/invima-negro.webp';
import certKosher from '../fotos/certificaciones/kosher-negro.webp';
import certFssc from '../fotos/certificaciones/fssc-22000-negro.webp';
import certHaccp from '../fotos/certificaciones/haccp-food-safety-negro.webp';

export const photos: Record<string, ImageMetadata> = {
  'campo/agronomo-productor-campo': agronomoProductorCampo,
  'campo/aji-rojo-planta': ajiRojoPlanta,
  'campo/ajies-rojos-cultivo': ajiesRojosCultivo,
  'campo/ajies-tipo-tabasco-planta': ajiesTipoTabascoPlanta,
  'campo/campo-aereo-cultivo-zagos': campoAereoCultivoZagos,
  'campo/carga-cosecha-camion': cargaCosechaCamion,
  'campo/cebolla-junca-cultivo': cebollaJuncaCultivo,
  'campo/cilantro-cultivo': cilantroCultivo,
  'campo/cosecha-aji-campo': cosechaAjiCampo,
  'campo/cosecha-cilantro-manos': cosechaCilantroManos,
  'campo/ingeniero-campo-tablet': ingenieroCampoTablet,
  'industria/empaque-granel-aji-cebolla-cilantro': empaqueGranel,
  'planta/equipo-zagos-planta': equipoZagosPlanta,
  'planta/tolva-proceso-deshidratado': tolvaProceso,
  'planta/seleccion/aji-deshidratado-bandeja': ajiDeshidratadoBandeja,
  'planta/seleccion/camaras-deshidratacion': camarasDeshidratacion,
  'planta/seleccion/deshidratado-cebolla-bandeja': deshidratadoCebollaBandeja,
  'planta/seleccion/deshidratado-cilantro-bandeja': deshidratadoCilantroBandeja,
  'planta/seleccion/equipo-planta-epp': equipoPlantaEpp,
  'planta/seleccion/operario-bandeja-aji': operarioBandejaAji,
  'planta/seleccion/operario-bandejas-deshidratado': operarioBandejasDeshidratado,
  'planta/seleccion/pesaje-aji-proceso': pesajeAjiProceso,
  'producto/aji-cayena-polvo-escama': ajiCayenaPolvoEscama,
  'producto/aplicacion-culinaria-zagos': aplicacionCulinaria,
  'producto/bodegon-deshidratados-zagos': bodegonDeshidratados,
  'producto/bodegon-ingredientes-zagos': bodegonIngredientes,
  'producto/cebolla-junca-deshidratada': cebollaJuncaDeshidratada,
  'producto/cilantro-deshidratado': cilantroDeshidratado,
  'producto/frascos-zagos-deshidratados': frascosDeshidratados,
  'producto/frascos-zagos-retail': frascosRetail,
  'producto/pimenton-rojo-polvo': pimentonRojoPolvo,
  'certificaciones/fda-registered': certFda,
  'certificaciones/invima': certInvima,
  'certificaciones/kosher': certKosher,
  'certificaciones/fssc-22000': certFssc,
  'certificaciones/haccp-food-safety': certHaccp,
};

export function getPhoto(key?: string): ImageMetadata | undefined {
  if (!key) return undefined;
  const img = photos[key];
  if (!img) throw new Error(`Foto "${key}" no está registrada en src/data/photos.ts`);
  return img;
}
