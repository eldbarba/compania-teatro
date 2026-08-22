# Cambios solicitados

- [x] Quitar el subtexto «Salesianos Don Bosco» de la portada y mantener el logo institucional donde corresponda.
- [x] Cambiar el texto principal de portada a «Hace más de 10 años aprendiendo a hacer teatro en comunidad».
- [x] Simplificar la línea de tiempo a una línea gráfica con año, título de obra y subtexto breve, sin imágenes ni videos.
- [x] Dejar la línea de tiempo preparada para agregar futuras obras modificando un arreglo de datos.
- [x] Reorganizar la sección Obras: archivo de 8 producciones pasadas con espacio para YouTube y proyecto anual separado para Alicia Maravilla.
- [x] Hacer que el botón «Ver producción actual» lleve al proyecto del año.
- [x] Eliminar la sección Administración del Home y de la navegación.
- [x] Convertir Conducción y Ciudadanía en una explicación textual única y quitar reuniones semanales y devolución a las familias.
- [x] Corregir el contraste del Navbar cuando aparece sobre secciones blancas.
- [x] Corregir el contraste de «AMIGOS» y otros textos en fondos blancos.
- [x] Verificar desktop y móvil, corregir errores y guardar checkpoint.
- [x] Marcar los cambios como completados al finalizar.

## Decisiones de contenido

- Producción actual: «Alicia Maravilla», una Alicia adolescente en el conurbano bonaerense.
- Archivo histórico: Don Bosco el musical; Los que aman no mueren jamás; Robin Hood; Hablando a tu corazón; Mucho ruido y pocas nueces; Sueño; La casa del revés; Rapunzel.
- La línea de tiempo debe permitir sumar obras futuras sin rediseñar el componente.
- Los enlaces de YouTube se dejarán como campos editables hasta que se entreguen las URLs reales.
- Los datos de contacto permanecen pendientes de información real.
- Administración no forma parte de la versión solicitada.

## Criterios de accesibilidad visual

- El Navbar deberá alternar entre estado transparente sobre el hero oscuro y estado opaco claro sobre secciones claras.
- Todo texto sobre fondos blancos deberá usar una variante oscura o un color de acento con contraste suficiente.
- Los botones conservarán texto legible en sus fondos rojo, azul petróleo y naranja.
- Se mantendrá la navegación por teclado, foco visible y comportamiento responsive.

## Estado

- [x] Implementación
- [x] Verificación visual
- [ ] Checkpoint final
- [ ] Entrega

Última actualización: 2026-08-15

## Referencia de estilo

La dirección mantiene una identidad editorial teatral: negro, rojo y blanco como base; azul petróleo y naranja como acentos; tipografía de display condensada y composición de alto contraste, evitando soluciones genéricas y priorizando jerarquía visual clara.

## Verificación de esta actualización

- Historia revisada y corregida manualmente: 2014 como prehistoria; 2015–2026 con títulos y subtítulos según la información aportada.
- La línea 2026 queda como «Alicia Maravilla» con el subtítulo «Alicia adolescente en el oeste bonaerense».
- Sobre Nosotros muestra +10 años, 8 obras producidas y 200+ jóvenes formados.
- La línea de tiempo se visualizó en desktop y móvil; en móvil conserva desplazamiento horizontal para leer todos los hitos.
- `pnpm check` y `pnpm build` finalizaron correctamente.

Estado previo al checkpoint: verificado.

## Corrección puntual de la línea de tiempo

La pandemia queda representada por un único registro con la etiqueta «2020–2021» y el título «PANDEMIA»; no existe un hito separado para 2021. La secuencia fue revisada nuevamente en la vista completa de desktop después de reiniciar el servidor.

## Verificación de Contacto

Contacto fue actualizado con Av. de Mayo 1902, Ramos Mejía, Provincia de Buenos Aires; los teléfonos 011 3657-8219 para WhatsApp de la compañía y 011 4651-0327 para alquiler de sala; y el correo enmangasteatro@donboscorm.com.ar. Se retiró el bloque de horarios que había quedado vacío y se mantuvo el formulario con etiquetas de contraste oscuro. La sección fue revisada en desktop y móvil; `pnpm check` y `pnpm build` finalizaron correctamente.

## Verificación de Teatro, Contacto, Actores y Navbar

- Teatro muestra Av. de Mayo 1902, Ramos Mejía, Provincia de Buenos Aires y los teléfonos 4651-0327 / 4375-2233 para alquiler de sala.
- Contacto conserva únicamente el WhatsApp de la compañía: 011 3657-8219.
- Actores muestra Candela Naiman, Luciana Bezutti, Thiago Drianó, Milagros Ercoli, Priscila Rojas y Agustín Cruz; los dos primeros quedan con 18 años y 3/2 años en la compañía, respectivamente.
- El submenú Obras muestra «Histórico» y «Proyecto del Año».
- `pnpm check` y `pnpm build` finalizaron correctamente; la portada completa se revisó en desktop y móvil.

## Nuevo cambio solicitado: imagen de Alicia Maravilla

- [ ] Reemplazar en la portada la imagen actual de Alicia Maravilla por `encabezadowebalicia(1).png`.
- [ ] Mantener la imagen en formato panorámico con recorte responsive para desktop y móvil.
- [ ] Aplicar un filtro visual sutil y un gradiente de contraste para integrarla con el resto del carrusel y asegurar la lectura del texto.
- [ ] Verificar la diapositiva en desktop y móvil.
- [ ] Guardar checkpoint de la actualización.

Criterio visual: conservar la energía cromática y la riqueza de personajes de la imagen, moderando la saturación y oscureciendo la zona del texto sin ocultar la composición.

## Verificación del nuevo encabezado de Alicia

Se reemplazó la tercera imagen del carrusel por `/manus-storage/encabezado-alicia-maravilla_19a69ae4.png`. La imagen conserva su composición panorámica mediante `object-cover` y recibe un tratamiento específico de brillo, saturación y contraste para integrarse con el carrusel y mantener legible el texto superpuesto. La portada fue revisada en desktop y móvil; `pnpm check` y `pnpm build` finalizaron correctamente.
