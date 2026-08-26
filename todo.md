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

## Refinamiento del carrusel de portada

- [ ] Reemplazar la imagen de Alicia Maravilla por `encabezadowebalicia2.png`.
- [ ] Reducir el filtro específico de Alicia para conservar más luminosidad, color y detalle.
- [ ] Revisar y suavizar los overlays generales de las otras imágenes si resultan demasiado opacos.
- [ ] Mantener contraste suficiente para el título, subtítulo, botón y navegación.
- [ ] Verificar desktop y móvil y guardar checkpoint.

Criterio visual: priorizar una portada más luminosa y cromática, con profundidad teatral pero sin que el overlay negro apague el material visual.

## Verificación del refinamiento de portada

Se reemplazó el encabezado por la segunda versión aportada de Alicia Maravilla. Se redujo el filtro específico de la diapositiva y se suavizaron los overlays generales de las tres imágenes para recuperar luminosidad y saturación sin perder legibilidad. La portada fue revisada en desktop y móvil; `pnpm check` y `pnpm build` finalizaron correctamente.

## Actualización de citas en Sobre Nosotros

La tarjeta de Sobre Nosotros fue actualizada con dos citas separadas: la reflexión de Augusto Boal sobre el teatro como invención humana y la cita de Don Bosco sobre la finalidad del Pequeño Teatro. Cada una quedó con su atribución visual diferenciada, sin duplicación ni texto pegado. La sección fue revisada en desktop y móvil, y `pnpm check` junto con `pnpm build` finalizaron correctamente.

## Multimedia: Don Bosco, el musical

- [ ] Verificar la playlist pública de YouTube aportada por la compañía.
- [ ] Incorporar la playlist en la tarjeta multimedia de «DON BOSCO, El musical».
- [ ] Mantener el bloque preparado para futuras URLs de las demás obras.
- [ ] Verificar el iframe en desktop y móvil, incluyendo accesibilidad y desborde.
- [ ] Guardar checkpoint de la actualización.

Playlist aportada: https://www.youtube.com/playlist?list=PLfTQhdyg_WlU

## Verificación de playlist de Don Bosco

La playlist pública «DON BOSCO el musical» fue confirmada en YouTube: contiene 4 videos y pertenece al canal de la compañía. Se incorporó en la tarjeta de Don Bosco mediante el reproductor `videoseries`, conservando el enlace original para abrirla en YouTube. El bloque se revisó en desktop y móvil, y `pnpm check` junto con `pnpm build` finalizaron correctamente.

## Multimedia: Los que aman no mueren jamás

- [ ] Verificar el enlace de la playlist pública de YouTube.
- [ ] Incorporar la playlist en la tarjeta de «Los que aman no mueren jamás».
- [ ] Verificar el embed y el enlace externo en desktop y móvil.
- [ ] Guardar checkpoint de la actualización.

Playlist aportada: https://youtube.com/playlist?list=PLcNOwJu7KdoU&si=Bl-r3rBkWP-cgSao

## Referencia externa verificada

La playlist `https://youtube.com/playlist?list=PLcNOwJu7KdoU&si=Bl-r3rBkWP-cgSao` redirige a `https://www.youtube.com/playlist?list=PLcNOwJu7KdoU` y se titula «LOS QUE AMAN NO MUEREN JAMÁS». YouTube informa que contiene 2 videos y pertenece al canal «Compañia de teatro En mangas de camisa»: «reel difusión LOS QUE AMAN NO MUEREN JAMÁS» y «Ensayos / Back. Los que aman no mueren jamás».

## Verificación de playlist: Los que aman no mueren jamás

La tarjeta de «Los que aman no mueren jamás» quedó vinculada a la playlist pública `https://youtube.com/playlist?list=PLcNOwJu7KdoU`, cuyo embed se genera automáticamente como reproductor `videoseries`. La playlist fue identificada como «LOS QUE AMAN NO MUEREN JAMÁS», con 2 videos del canal de la compañía. Se verificó la sección en desktop y móvil; `pnpm check` y `pnpm build` finalizaron correctamente.

## Multimedia: Robin Hood

- [ ] Verificar el enlace de la playlist pública de YouTube.
- [ ] Incorporar la playlist en la tarjeta de «Robin Hood».
- [ ] Verificar el embed y el enlace externo en desktop y móvil.
- [ ] Guardar checkpoint de la actualización.

Playlist aportada: https://www.youtube.com/playlist?list=PLRaWUwvXOylk

## Verificación de playlist: Robin Hood

La playlist de Robin Hood fue confirmada como «ROBIN HOOD aventura musical», con 1 video de 20:15 del canal de En Mangas de Camisa y la descripción «Versión teatral con música propia de la obra de Mauricio Kartún». La tarjeta quedó vinculada a `https://www.youtube.com/playlist?list=PLRaWUwvXOylk`, con embed responsive y enlace externo. Se revisó en desktop y móvil; `pnpm check` y `pnpm build` finalizaron correctamente.

## Actualización de Equipo

- [ ] Cargar `aleweb.png` para Alejandro Sardu Hevia — Director de la compañía y maestro de actuación.
- [ ] Cargar `aniweb.jpg` para Ana Farias Alves — Asistente de dirección y maestra del movimiento.
- [ ] Cargar `sebaweb.jpg` para Sebastián Caiafa — Maestro de escenografía.
- [ ] Cargar `beluweb.jpg` para Belén Pérez — Maestra de vestuario.
- [ ] Cargar `sofiweb.jpg` para Sofía Farias Alves — Maestra de la voz.
- [ ] Actualizar la sección Equipo manteniendo el lightbox y el orden de carga aportado.
- [ ] Verificar desktop y móvil y guardar checkpoint.

## Verificación de Equipo

La sección Equipo fue actualizada con cinco retratos reales en el orden aportado: Alejandro Sardu Hevia, Ana Farias Alves, Sebastián Caiafa, Belén Pérez y Sofía Farias Alves. Se corrigieron nombres y roles, se mantuvo el lightbox y se transformaron las tarjetas en botones accesibles con foco y etiquetas descriptivas. La sección fue revisada en desktop y móvil; `pnpm check` y `pnpm build` finalizaron correctamente.
