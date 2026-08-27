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

## Actualización del elenco actual

Se editaron las ocho fotos aportadas con un tratamiento editorial teatral coherente con la serie demo: fondo carbón texturado, iluminación cálida lateral, recorte azul petróleo, negros profundos y grano sutil, preservando los rasgos reconocibles, peinados, gafas, expresiones, poses y vestimenta de cada persona. Se integraron los retratos como assets permanentes y se actualizó `Actores.tsx` con el orden y los nombres: Candela Naiman, Luciana Bezutti, Thiago Drianó, Agustín Cruz, Priscila Rojas, Bautista Fassolatto, Milagros Ercoli y Felipe Ojeda. La grilla ahora muestra ocho integrantes en desktop y conserva una composición de dos columnas en móvil; el lightbox mantiene soporte de teclado con Escape y foco visible. `pnpm check` y `pnpm build` fueron exitosos; se revisaron las vistas completas en desktop y móvil.

## Revisión de estilo de retratos del elenco

- [ ] Rehacer la serie priorizando el Plan A: usar como referencia las fotos anteriores del elenco, con iluminación teatral y poses variadas.

### Referencia visual confirmada

Las fotos originales del elenco demo tienen una estética de retrato de personaje, no de headshot corporativo: fondos negros o azul petróleo con atmósfera escénica, luz direccional intensa tipo reflector, sombras marcadas, poses de tres cuartos o gestuales y vestuario expresivo relacionado con cada personaje. El nuevo criterio debe conservar la diversidad de poses y prendas de las fotos aportadas; no se debe imponer una remera negra ni un encuadre idéntico a todo el grupo salvo como Plan B puntual. La referencia también confirma una paleta escénica más expresiva: dorado/ámbar de reflector, azul petróleo y rojo profundo, con rostros parcialmente en sombra y una sensación de personaje en escena.
- [x] Preservar identidad, rasgos faciales, peinados, expresiones y proporciones de cada integrante.
- [x] Comparar visualmente la nueva serie con los retratos originales del elenco, no con los retratos del equipo docente.
- [x] Aplicar el Plan B —remera negra y tratamiento editorial uniforme— sólo si un retrato no admite una adaptación convincente.

### Resultado de la revisión de planes

Los ocho retratos admitieron una adaptación convincente al Plan A, por lo que no fue necesario aplicar el Plan B. La serie final conserva prendas y rasgos de las fotos aportadas, pero ahora comparte la lógica visual de los retratos originales del elenco: fondos oscuros, luces ámbar, azul petróleo o rojo, sombras de personaje y encuadres verticales expresivos. La grilla fue verificada en la portada completa en desktop y móvil; los nombres se leen correctamente y no hay desborde visual.
- [x] Integrar la serie definitiva en `Actores.tsx`, validar desktop/móvil y guardar checkpoint.

`Actores.tsx` ahora utiliza los ocho assets teatrales permanentes: Candela Naiman, Luciana Bezutti, Thiago Drianó, Agustín Cruz, Priscila Rojas, Bautista Fassolatto, Milagros Ercoli y Felipe Ojeda. `pnpm check` y `pnpm build` finalizaron correctamente.

## Nuevos testimonios reales

- [x] Incorporar las cuatro citas aportadas por el usuario en `Testimonios.tsx`, manteniendo también el testimonio de Bautista López.
- [x] Revisar nombres, roles, acentos y legibilidad de las atribuciones en desktop y móvil.
- [x] Ejecutar `pnpm check` y `pnpm build`, verificar la sección y guardar checkpoint.

## Verificación de temporada y estadísticas

- [x] Confirmar que `SobreNosotros.tsx` conserve el indicador 300+ aunque la edición visual no haya encontrado el texto anterior.
- [x] Revisar que `Obras.tsx` muestre «ESTRENO 17 OCT» y «Funciones: 24 y 31 OCT» con un peso visual legible y sin formato accidental.
- [x] Validar compilación y vistas responsive, y guardar checkpoint.

## Verificación de Teatro

- [x] Revisar agenda y confirmar que el 17 corresponda a Alicia Maravilla y que los demás eventos indiquen «Próximamente».
- [x] Confirmar capacidad de 620 espectadores, escuelas incluidas y equipamiento actualizado.
- [x] Eliminar renglones vacíos y contacto de sala no disponible sin dejar espacios visuales accidentales.
- [x] Validar compilación y vistas responsive, y guardar checkpoint.

## Sinopsis de Alicia Maravilla

- [x] Confirmar si `Obras.tsx` conserva la sinopsis breve o ya contiene el texto extenso aportado.
- [x] Integrar manualmente la nueva sinopsis con separación de párrafos y buena lectura responsive.
- [x] Validar compilación y vistas desktop/móvil, y guardar checkpoint.

## Verificación de Formación

- [x] Confirmar que el texto de actuación use «su cuerpo poético».
- [x] Integrar la descripción actualizada de oficios y escenotecnia.
- [x] Revisar la lista técnica: iluminación escénica, operación de sonido y retirar producción/gestión cultural.
- [x] Validar compilación y vistas responsive, y guardar checkpoint.

## Imagen de Formación y contraste global

- [x] Subir la imagen aportada `17.jpg` al almacenamiento permanente y reemplazar la imagen de Formación.
- [x] Ordenar los oficios teatrales con escenografía primero, vestuario segundo y luego el resto.
- [x] Revisar las secciones sobre fondo blanco y reforzar los textos de baja nitidez, especialmente «AMIGOS».
- [x] Validar compilación y vistas desktop/móvil, y guardar checkpoint.

## Fotogalería de Obras

- [x] Copiar y subir las ocho imágenes aportadas al almacenamiento permanente del sitio.
- [x] Revisar `Obras.tsx` y definir el modelo extensible de producciones con títulos editables.
- [x] Implementar carrusel accesible con controles, indicadores, autoplay pausables y navegación por teclado.
- [x] Validar desktop/móvil, compilación y guardar checkpoint.

## Nuevas fotos para Obras y Formación

- [x] Subir las primeras siete fotos aportadas al almacenamiento permanente y sumarlas al carrusel de Obras sin eliminar las entradas existentes.
- [x] Usar la última foto aportada (`IMG-20160921-WA0042.jpg`) en Formación — Actuación y expresión.
- [x] Mantener títulos genéricos editables hasta recibir la correspondencia entre fotos y producciones.
- [x] Validar carrusel, recortes, accesibilidad, compilación y vistas desktop/móvil; guardar checkpoint.

### Verificación de la integración de imágenes

Se incorporaron siete nuevas entradas al arreglo extensible de la fotogalería, que ahora conserva las ocho imágenes anteriores y suma los archivos visuales 09–15. La octava imagen aportada se destinó al bloque «Actuación y expresión» de Formación. Los títulos y las etiquetas de las nuevas imágenes quedan deliberadamente editables hasta asociarlas con sus producciones específicas. `pnpm check` y `pnpm build` finalizaron correctamente; la portada completa se revisó en desktop y móvil sin detectar recortes críticos ni desbordes.

## Verificación de ediciones de contenido y color

- [x] Revisar manualmente Misión, Conducción, Actores, Teatro y Convocatoria.
- [x] Completar las ediciones de texto que no fueron aplicadas en Misión, Conducción, Actores y Teatro.
- [x] Confirmar que los cambios visuales de Convocatoria mantengan contraste y coherencia con la identidad teatral.
- [x] Ejecutar `pnpm check` y `pnpm build`, revisar desktop/móvil y guardar checkpoint.

### Resultado de la verificación

Se aplicaron manualmente los textos pendientes: Misión ahora comienza con «Acompañar a los jóvenes en su formación», Conducción pasó a «Formación Integral», Actores refiere al proyecto actual y Teatro incorpora la cartelera anual. En Convocatoria se completó el texto de Oficios teatrales, se ordenó su lista como escenografía, vestuario, maquillaje e iluminación/sonido, y se conservaron los colores definidos por la edición visual. `pnpm check` y `pnpm build` finalizaron correctamente; la portada completa fue revisada en desktop y móvil.
