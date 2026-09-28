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

## Verificación de ediciones recientes

- [x] Revisar Historia, Testimonios, Obras, Convocatoria, Colaboraciones y Amigos de la Comunidad.
- [x] Aplicar manualmente los cambios de texto que no se concretaron.
- [x] Corregir estilos JSX duplicados y eliminar ítems vacíos o artefactos de puntuación en listas.
- [x] Validar contenido, compilación, contraste y vistas desktop/móvil; guardar checkpoint.

### Resultado

Historia ahora cierra su presentación con «La historia continúa ...»; Obras identifica la foto 07 como «la casa del revés» y ajusta la sinopsis de Alicia a «Un musical del Oeste bonaerense». Se corrigieron los estilos JSX duplicados en Amigos de la Comunidad y Testimonios, se actualizaron beneficios y precios pendientes, y se retiraron beneficios vacíos. Colaboraciones muestra el boletín trimestral; Convocatoria queda actualizada a 2027 y sin el ítem de Administración. `pnpm check` y `pnpm build` finalizaron correctamente, y la portada completa fue revisada en desktop y móvil.

## FAQ y redes sociales

- [x] Localizar la sección de Preguntas frecuentes y todos los accesos sociales del sitio.
- [x] Retirar la sección FAQ sin dejar espacios o enlaces huérfanos.
- [x] Actualizar YouTube e Instagram con los enlaces oficiales y quitar Facebook y Twitter.
- [x] Validar navegación, compilación y vistas desktop/móvil; guardar checkpoint.

### Resultado

Se eliminó completamente el bloque de Preguntas frecuentes de Amigos de la Comunidad. El footer conserva únicamente Instagram y YouTube, ahora enlazados a las cuentas oficiales proporcionadas por la compañía; se retiraron los íconos y enlaces de Facebook y Twitter. `pnpm check` y `pnpm build` finalizaron correctamente, y la portada se revisó en desktop y móvil sin detectar desbordes.

## Artesanas de escena

- [x] Revisar la estructura actual de Actores y el formato de retratos.
- [x] Subir el retrato de Lucila Díaz Alonso al almacenamiento permanente.
- [x] Incorporar a Lucila Díaz Alonso, Manuela Ganino y Juana Berón como Artesanas de escena.
- [x] Preparar una presentación accesible para Manuela y Juana mientras no haya fotos disponibles.
- [x] Validar la sección en desktop y móvil, ejecutar check/build y guardar checkpoint.

### Resultado

Se incorporó el bloque «Artesanas de escena» dentro de la sección del elenco, con Lucila Díaz Alonso y su retrato aportado, y con Manuela Ganino y Juana Berón representadas mediante tarjetas accesibles de presentación mientras se esperan sus fotos. Lucila cuenta con lightbox y cierre mediante Escape; las otras dos tarjetas no simulan retratos. `pnpm check` y `pnpm build` finalizaron correctamente, y la portada se revisó en desktop y móvil.

## Revisión de Navbar y Convocatoria

- [x] Revisar el enlace «Conducción y Ciudadanía» en Navbar y el texto de Formación integral.
- [x] Confirmar o completar los textos de actuación y oficios teatrales en Convocatoria.
- [x] Validar navegación, compilación y vistas desktop/móvil; guardar checkpoint.

### Resultado

El subenlace de Formación dentro de Navbar ahora se muestra como «Formación integral» y conserva el destino `#conduccion`. En Convocatoria, los textos de actuación y oficios ya estaban aplicados correctamente; no se duplicaron ni se alteraron innecesariamente. `pnpm check` y `pnpm build` finalizaron correctamente, y la portada completa se revisó en desktop y móvil sin detectar desbordes.

## Actualización de retratos de Artesanas

- [x] Subir `lulaweb.png` y `manuweb.png` al almacenamiento permanente.
- [x] Reemplazar el retrato anterior de Lucila Díaz Alonso.
- [x] Incorporar el retrato de Manuela Ganino y conservar a Juana Berón como tarjeta pendiente.
- [x] Validar lightbox, accesibilidad, compilación y vistas desktop/móvil; guardar checkpoint.

### Resultado

Se reemplazó el retrato anterior de Lucila Díaz Alonso por `lulaweb.png` y se incorporó `manuweb.png` a la tarjeta de Manuela Ganino. Juana Berón conserva la tarjeta accesible «Retrato pendiente» hasta recibir su imagen. Se validaron el lightbox de ambas retratadas, el cierre mediante Escape, `pnpm check`, `pnpm build` y las vistas desktop y móvil.

## Nuevos retratos de Artesanas

- [x] Subir `juanaweb.png` y `juliweb.png` al almacenamiento permanente.
- [x] Reemplazar el estado pendiente de Juana Berón por su retrato.
- [x] Incorporar a Juliana Weigandt como nueva Artesana de escena con su retrato.
- [x] Validar lightbox, accesibilidad, compilación y vistas desktop/móvil; guardar checkpoint.

### Resultado

Se reemplazó la tarjeta «Retrato pendiente» de Juana Berón por `juanaweb.png` y se incorporó a Juliana Weigandt con `juliweb.png`. La sección Artesanas de escena queda ahora compuesta por Lucila, Manuela, Juana y Juliana, con el mismo tratamiento visual, lightbox y cierre mediante Escape. `pnpm check` y `pnpm build` finalizaron correctamente, y las vistas desktop y móvil fueron revisadas sin detectar desbordes.

## Alineación de Artesanas

- [x] Ajustar la grilla para mostrar las cuatro Artesanas en una sola línea desde tablet y desktop.
- [x] Mantener una distribución legible de dos columnas en móvil.
- [x] Validar la alineación, compilación y vistas responsive; guardar checkpoint.

### Resultado

La grilla de Artesanas de escena ahora utiliza cuatro columnas desde el breakpoint de tablet, por lo que Lucila, Manuela, Juana y Juliana quedan en la misma línea en desktop y tablet. En móvil conserva dos columnas para mantener nombres y retratos legibles. `pnpm check` y `pnpm build` finalizaron correctamente, y se revisaron las vistas responsive sin detectar desbordes.

## Verificación de Convocatoria

- [x] Revisar si «Producción de eventos» ya fue retirado de la lista de oficios.
- [x] Eliminar cualquier residuo o ítem vacío si fuera necesario.
- [x] Validar compilación y vistas desktop/móvil; guardar checkpoint.

### Resultado

La edición visual no había retirado «Producción de eventos»: el ítem seguía presente en la lista de voluntariado. Se eliminó manualmente del arreglo, sin dejar filas vacías. La descripción general conserva la referencia a producción y eventos, ya que la solicitud apuntaba específicamente al elemento de la lista. Se validaron la compilación y las vistas desktop y móvil.

## Historia 2024 y ticketera

- [x] Revisar Historia, Obras y el bloque actual de funciones de Alicia Maravilla.
- [x] Incorporar 2024 — La casa del revés con su descripción histórica.
- [x] Preparar botones de compra por función sin inventar enlaces de Mercado Pago.
- [x] Crear una sección editable para una futura ticketera de las producciones.
- [x] Validar estados sin enlaces, compilación y vistas desktop/móvil; guardar checkpoint.

### Resultado de la verificación

La línea de tiempo ahora incluye 2024 — «LA CASA DEL REVÉS», con la descripción «Una obra musical basada en la obra de María Elena Walsh». El bloque «Funciones» de Alicia Maravilla quedó preparado para tres fechas —17, 24 y 31 de octubre— con una estructura editable para agregar una URL de Mercado Pago por función; mientras no haya enlaces, muestra «Mercado Pago · próximamente» y no inventa destinos. Se agregó el bloque «Ticketera de la compañía» para futuras integraciones. `pnpm check` y `pnpm build` finalizaron correctamente; la portada completa se revisó en desktop y móvil sin detectar desbordes.


## Enlace audiovisual de La casa del revés

- [x] Incorporar `https://youtu.be/uqNeZNFicfE` en la tarjeta de «La casa del revés».
- [x] Verificar que el enlace responda y redirija al video de YouTube.
- [x] Validar TypeScript, build y vistas completas desktop/móvil.
- [x] Guardar checkpoint de la actualización.

### Resultado de la verificación

La tarjeta «La casa del revés» ahora muestra el reproductor embebido y el enlace externo «Ver en YouTube» a `https://youtu.be/uqNeZNFicfE`. El enlace respondió con HTTP 200 y redirigió al video `https://www.youtube.com/watch?v=uqNeZNFicfE`. `pnpm check` y `pnpm build` finalizaron correctamente; la portada completa se revisó en desktop y móvil sin detectar desbordes.


## Playlist audiovisual de Rapunzel

- [x] Incorporar `https://www.youtube.com/playlist?list=PLJdL_0kaCmmg` en la tarjeta de «Rapunzel».
- [x] Verificar que la playlist responda correctamente en YouTube.
- [x] Validar TypeScript, build y vistas completas desktop/móvil.
- [x] Guardar checkpoint de la actualización.

### Resultado de la verificación

La tarjeta «Rapunzel» ahora muestra el reproductor de la playlist y el enlace externo «Ver en YouTube». La URL respondió con HTTP 200. `pnpm check` y `pnpm build` finalizaron correctamente; la portada completa se revisó en desktop y móvil sin detectar desbordes.


## Nuevo encabezado de Alicia Maravilla

- [x] Subir la imagen panorámica aportada `encabezadowebalicia.png` al almacenamiento del proyecto.
- [x] Reemplazar la imagen anterior del tercer slide del encabezado.
- [x] Mantener el recorte responsive y el tratamiento de contraste para leer el texto superpuesto.
- [x] Verificar el slide en el navegador, además de las vistas completas desktop y móvil.
- [x] Validar TypeScript y build de producción.
- [x] Guardar checkpoint de la actualización.

### Resultado de la verificación

El tercer slide ahora utiliza `/manus-storage/encabezadowebalicia_8147bae9.png`, una imagen de 1524 × 600 px. Se confirmó visualmente el slide «Alicia Maravilla» en el preview: la composición de la estación y el elenco queda visible con recorte central, y el título, subtítulo y botón conservan legibilidad. `pnpm check` y `pnpm build` finalizaron correctamente; también se revisaron las vistas completas desktop y móvil sin detectar desbordes.


## Nueva imagen para «Aprender teatro haciendo teatro»

- [x] Subir la imagen aportada `ensayosrobin.jpg` al almacenamiento permanente.
- [x] Reemplazar la imagen anterior del segundo slide del encabezado.
- [x] Verificar el recorte panorámico, el contraste y la legibilidad del texto superpuesto.
- [x] Revisar el slide en el navegador y las vistas completas desktop/móvil.
- [x] Validar TypeScript y build de producción.
- [x] Guardar checkpoint de la actualización.

### Resultado de la verificación

El segundo slide ahora utiliza `/manus-storage/ensayosrobin_b922fc71.jpg`, una imagen de 1280 × 720 px. Se confirmó visualmente el encabezado «Aprender teatro haciendo teatro»: el escenario, el grupo en ensayo y la persona que dirige quedan visibles, mientras el título, subtítulo y botón conservan buen contraste. `pnpm check` y `pnpm build` finalizaron correctamente; las vistas completas desktop y móvil no presentan desbordes.


## Enlaces de entradas de Alicia Maravilla

- [x] Incorporar enlaces para 1 y 2 entradas del 17 de octubre.
- [x] Incorporar enlaces para 1 y 2 entradas del 24 de octubre.
- [x] Incorporar enlaces para 1 y 2 entradas del 31 de octubre.
- [x] Verificar que las seis opciones se rendericen en el navegador.
- [x] Validar TypeScript, build y vistas completas desktop/móvil.
- [x] Guardar checkpoint de la actualización.

### Resultado de la verificación

La sección «Funciones» de Alicia Maravilla ahora muestra dos opciones por fecha: «1 entrada» y «2 entradas», cada una con su enlace de Mercado Pago. Las seis opciones fueron confirmadas en el navegador y las URLs quedaron verificadas en el código. El chequeo automatizado con `curl` recibió HTTP 403 de Mercado Pago en los seis casos, consistente con una protección anti-bot; por ese motivo no se interpreta como enlace roto. `pnpm check` y `pnpm build` finalizaron correctamente, y las vistas desktop y móvil no presentan desbordes.

Las fotografías adicionales de ensayos quedan pendientes de incorporación hasta contar con nuevos archivos aportados.
