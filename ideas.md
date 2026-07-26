# Brainstorm de Diseño — Compañía Juvenil de Teatro

## Tres enfoques estilísticos

### 1. Noir Teatral Dramático
Estética oscura inspirada en la iluminación de escenario. Fondo negro profundo, rojo teatral como acento principal, blanco crudo para texto. Efectos de foco/spotlight, sombras pronunciadas, tipografía display condensada. Sensación de estar tras bambalinas.
**Probabilidad:** 0.07

### 2. Luces de Escena Vibrante
Enfoque juvenil y energético usando azul petróleo y naranja como protagonistas, con negro y blanco como base estructural. Gradientes vivos, formas geométricas, tipografía redondeada moderna. Pensado para captar atención adolescente.
**Probabilidad:** 0.04

### 3. Editorial Teatral
Layout tipo revista editorial con tipografía bold display, grids asimétricos, secciones que alternan fondo claro y oscuro. Mezcla dramática de los dos acentos (rojo + azul petróleo/naranja) en distintas secciones. Inspiración directa en drang.nl por su organización y atlantictheater.org por su portada.
**Probabilidad:** 0.09

---

## Enfoque seleccionado: Editorial Teatral Dramático

Una fusión del enfoque 1 y 3: el drama del noir teatral con la organización editorial de una revista. Esto da un sitio que se siente profesional y teatral pero con la energía juvenil que busca el público adolescente.

### Movimiento de Diseño
Editorial dramático con influencias del Brutalismo suave y el diseño teatral clásico. Referencias: atlantictheater.org (portada con carrusel inmersivo), drang.nl (organización modular y tipografía fuerte).

### Principios Core
1. **Contraste dramático**: Secciones alternan entre fondo negro profundo y blanco crudo, creando ritmo visual como actos de una obra.
2. **Tipografía como protagonista**: Display font condensada y bold para titulares, serif elegante para citas, sans-serif limpia para cuerpo.
3. **Asimetría intencional**: Layouts que rompen la cuadrícula central, con elementos desplazados y escalas variables.
4. **Color como lenguaje**: Rojo teatral (#E63946) para CTAs y acentos críticos, azul petróleo (#0E7C86) para secciones formativas, naranja (#F4A261) para highlights energéticos.

### Filosofía de Color
- **Negro (#0A0A0A)**: El escenario apagado, el lienzo base. Representa lo misterioso y dramático del teatro.
- **Blanco (#FAFAFA)**: La luz del escenario, la claridad. Secciones informativas y legibles.
- **Rojo (#E63946)**: La pasión, la energía teatral, el llamado a la acción. Es el color de la marca.
- **Azul petróleo (#0E7C86)**: La formación, la profundidad, el backstage. Representa el lado educativo.
- **Naranja (#F4A261)**: La juventud, la energía, el entusiasmo. Acentos para highlights y momentos de alegría.

### Paradigma de Layout
Layout asimétrico con grids irregulares. La portada usa un carrusel a pantalla completa con overlay de texto. Las secciones siguientes alternan entre columnas asimétricas (60/40, 40/60) y grids modulares. Secciones de fondo oscuro con texto blanco alternan con secciones de fondo claro con texto oscuro.

### Elementos Signature
1. **Cortina teatral**: Borde superior con efecto de cortina roja sutil en transiciones de secciones oscuras.
2. **Spotlight gradient**: Gradientes radiales que simulan focos de escenario en fondos oscuros.
3. **Número de acto**: Cada sección principal lleva un número grande estilo "Acto I", "Acto II" como marcador editorial.

### Filosofía de Interacción
Las interacciones deben sentirse como revelaciones teatrales. El scroll descubre contenido como se levanta el telón. Los hover effects iluminan elementos como un foco que los encuentra. Los menús desplegables se abren como cortinas.

### Animación
- Fade-in al scroll con IntersectionObserver, stagger de 60ms entre elementos.
- Slide-in lateral para contenido secundario.
- Zoom suave (scale 1.05) en imágenes al hover.
- Carrusel automático de testimonios cada 5s con transición fade.
- Menús desplegables con scale + opacity desde el trigger, 200ms ease-out.
- Botones con elevación (translateY -2px + shadow) al hover, scale(0.97) al active.
- Respecto a prefers-reduced-motion.

### Sistema Tipográfico
- **Display/Titulares**: "Oswald" — condensada, bold, teatral. Para títulos de sección y hero.
- **Cuerpo**: "Inter" — limpia, legible, moderna. Para texto descriptivo.
- **Citas/Acentos**: "Playfair Display" — serif elegante para testimonios y citas teatrales.
- Jerarquía: Display 64-96px hero, 48-64px secciones, 24-32px subtítulos, 16-18px cuerpo.

### Esencia de Marca
**Posicionamiento**: Una compañía-escuela juvenil de teatro donde el escenario es aula y la obra es aprendizaje.
**Personalidad**: Apasionada, formativa, audaz, acogedora.

### Voz de Marca
Titulares directos y evocadores. CTAs con verbos de acción teatral.
- "Sube al escenario de tu vida"
- "Doce años formando artistas, no solo actores"

### Wordmark y Logo
Símbolo gráfico: dos máscaras teatrales (comedia/tragedia) estilizadas en forma geométrica minimalista, una en rojo y otra en azul petróleo, unidas formando un círculo. El wordmark usa Oswald en mayúsculas con tracking amplio.

### Color Signature de Marca
**Rojo teatral #E63946** — el color inconfundible de la marca, presente en CTAs, acentos, logo y elementos críticos.
