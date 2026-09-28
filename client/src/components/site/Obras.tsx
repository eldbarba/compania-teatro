// Dirección visual: archivo audiovisual en tarjetas oscuras, galería editorial de producciones y proyecto anual como pieza destacada.
// La galería se amplía agregando objetos a galeriaProducciones; no requiere modificar la lógica del carrusel.

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Pause, Play, PlayCircle } from "lucide-react";

const obras = [
  {
    titulo: "Don Bosco el musical",
    subtexto: "Una producción musical para celebrar nuestras raíces.",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLfTQhdyg_WlU",
    accent: "red",
  },
  {
    titulo: "Los que aman no mueren jamás",
    subtexto: "Una historia sobre los vínculos que permanecen.",
    youtubeUrl: "https://youtube.com/playlist?list=PLcNOwJu7KdoU",
    accent: "teal",
  },
  {
    titulo: "Robin Hood",
    subtexto: "Justicia, aventura y transformación desde la mirada joven.",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLRaWUwvXOylk",
    accent: "orange",
  },
  {
    titulo: "Hablando a tu corazón",
    subtexto: "Una obra para escuchar lo que a veces cuesta decir.",
    youtubeUrl: "",
    accent: "red",
  },
  {
    titulo: "Mucho ruido y pocas nueces",
    subtexto: "Un clásico atravesado por la energía de la compañía.",
    youtubeUrl: "",
    accent: "teal",
  },
  {
    titulo: "Sueño",
    subtexto: "Imaginación, deseo y juego en escena.",
    youtubeUrl: "",
    accent: "orange",
  },
  {
    titulo: "La casa del revés",
    subtexto: "Una casa, muchas preguntas y nuevas formas de mirar.",
    youtubeUrl: "https://youtu.be/uqNeZNFicfE",
    accent: "red",
  },
  {
    titulo: "Rapunzel",
    subtexto: "El comienzo de un camino compartido.",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLJdL_0kaCmmg",
    accent: "teal",
  },
];

// Para sumar una nueva producción, agregar un objeto con título, imagen, texto y alt.
// Los títulos se mantienen deliberadamente editables hasta que cada imagen sea identificada.
const galeriaProducciones = [
  {
    numero: "01",
    titulo: "Archivo visual 01",
    etiqueta: "Producción por identificar",
    descripcion: "Escenas, elenco y música de una producción de la compañía.",
    image: "/manus-storage/obra-01_4b5bff5a.jpeg",
    alt: "Elenco juvenil en escena con una escenografía ilustrada y músicos en vivo",
  },
  {
    numero: "02",
    titulo: "Archivo visual 02",
    etiqueta: "Producción por identificar",
    descripcion: "Un universo escénico construido con luz, movimiento y trabajo colectivo.",
    image: "/manus-storage/obra-02_852ffc03.jpg",
    alt: "Escena teatral con un bosque fantástico, elenco y luces azules",
  },
  {
    numero: "03",
    titulo: "Archivo visual 03",
    etiqueta: "Producción por identificar",
    descripcion: "Personajes y paisajes teatrales de una puesta de gran despliegue visual.",
    image: "/manus-storage/obra-03_c9a31c48.jpg",
    alt: "Actores caracterizados en una escena teatral iluminada con colores intensos",
  },
  {
    numero: "04",
    titulo: "Archivo visual 04",
    etiqueta: "Producción por identificar",
    descripcion: "El escenario como territorio de juego, aventura y encuentro.",
    image: "/manus-storage/obra-04_7696e4f9.jpg",
    alt: "Elenco en una escena de aventura con vestuario y escenografía teatral",
  },
  {
    numero: "05",
    titulo: "Archivo visual 05",
    etiqueta: "Producción por identificar",
    descripcion: "Una galería de personajes, gestos y momentos compartidos.",
    image: "/manus-storage/obra-05_697e2ba5.jpg",
    alt: "Actores jóvenes interpretando una escena con micrófonos y vestuario de época",
  },
  {
    numero: "06",
    titulo: "Archivo visual 06",
    etiqueta: "Producción por identificar",
    descripcion: "Teatro musical, color y energía en una producción colectiva.",
    image: "/manus-storage/obra-06_ab5789c9.jpg",
    alt: "Grupo de actores en una escena musical con iluminación azul y violeta",
  },
  {
    numero: "07",
    titulo: "la casa del revés",
    etiqueta: "Producción por identificar",
    descripcion: "Retratos de escena donde el cuerpo y la música cuentan la historia.",
    image: "/manus-storage/obra-07_67102466.jpg",
    alt: "Dos intérpretes con instrumentos en una escena teatral de iluminación cálida",
  },
  {
    numero: "08",
    titulo: "Archivo visual 08",
    etiqueta: "Producción por identificar",
    descripcion: "El archivo crece con cada obra, cada elenco y cada función.",
    image: "/manus-storage/obra-08_0cced63c.jpg",
    alt: "Collage de escenas teatrales con personajes y elenco en un escenario oscuro",
  },
  {
    numero: "09",
    titulo: "Archivo visual 09",
    etiqueta: "Producción por identificar",
    descripcion: "Una escena de archivo que suma nuevas capas a la memoria de la compañía.",
    image: "/manus-storage/01-DSCN0032_d7da9bf6.webp",
    alt: "Escena teatral de archivo con intérpretes jóvenes y composición escénica colorida",
  },
  {
    numero: "10",
    titulo: "Archivo visual 10",
    etiqueta: "Producción por identificar",
    descripcion: "Personajes, objetos y vínculos que vuelven a aparecer en escena.",
    image: "/manus-storage/02-11755877_244dd381.jpg",
    alt: "Elenco juvenil en una escena teatral de archivo con vestuario y utilería",
  },
  {
    numero: "11",
    titulo: "Archivo visual 11",
    etiqueta: "Producción por identificar",
    descripcion: "Un instante de actuación conservado dentro del archivo visual.",
    image: "/manus-storage/03-Q3A2727_8e4aceb7.JPG",
    alt: "Intérpretes jóvenes representando una escena teatral frente al público",
  },
  {
    numero: "12",
    titulo: "Archivo visual 12",
    etiqueta: "Producción por identificar",
    descripcion: "La energía del elenco y la puesta en diálogo con el espacio escénico.",
    image: "/manus-storage/04-MRPN-BOCHI_376320e6.webp",
    alt: "Elenco juvenil en una puesta teatral con iluminación y gestualidad expresiva",
  },
  {
    numero: "13",
    titulo: "Archivo visual 13",
    etiqueta: "Producción por identificar",
    descripcion: "Otra escena para seguir reconstruyendo la historia de la compañía.",
    image: "/manus-storage/05-MRPN-FB25_047653c5.webp",
    alt: "Actores jóvenes en una escena teatral de archivo con vestuario de personajes",
  },
  {
    numero: "14",
    titulo: "Archivo visual 14",
    etiqueta: "Producción por identificar",
    descripcion: "Un nuevo registro de trabajo colectivo, juego y presencia escénica.",
    image: "/manus-storage/06-IMG-20231106_d17afe4a.jpg",
    alt: "Grupo de intérpretes jóvenes en una escena teatral de archivo",
  },
  {
    numero: "15",
    titulo: "Archivo visual 15",
    etiqueta: "Producción por identificar",
    descripcion: "La galería continúa creciendo con imágenes de distintas generaciones.",
    image: "/manus-storage/07-IMG-20160807_f50e0cab.webp",
    alt: "Escena de teatro juvenil con intérpretes en una composición grupal",
  },
];

const proyecto = {
  año: "2026",
  titulo: "Alicia Maravilla",
  subtitulo: "Una Alicia adolescente en el conurbano bonaerense",
  descripcion:
    "Alicia tiene diecisiete años, el celular sin batería y la sensación de que el mundo gira para otro lado. Cuando un desconocido la arrastra más allá del andén de siempre, cae en un territorio que se parece al suyo pero con algo corrido: los tiempos no funcionan, las reglas cambian solas, y cada habitante del lugar tiene una pregunta que ella no sabe responder.\n\nEntre el ruido y el silencio, entre crecer demasiado y achicarse de más, Alicia va descubriendo que la pregunta más difícil no tiene que ver con quien elige dar el próximo paso.\n\nUn musical del Oeste bonaerense.",
  materiales: [
    { numero: "01", titulo: "Ensayos", descripcion: "Fragmentos del proceso de creación.", funciones: [] },
    { numero: "02", titulo: "Difusión", descripcion: "Noticias, afiches y convocatorias.", funciones: [] },
    {
      numero: "03",
      titulo: "Funciones",
      descripcion: "ESTRENO 17 OCT\nFunciones: 24 y 31 OCT",
      funciones: [
        {
          fecha: "17 OCT",
          etiqueta: "Estreno",
          entradas: [
            { cantidad: "1 entrada", url: "https://mpago.la/1g2Xp86" },
            { cantidad: "2 entradas", url: "https://mpago.la/1G17dDh" },
          ],
        },
        {
          fecha: "24 OCT",
          etiqueta: "Función",
          entradas: [
            { cantidad: "1 entrada", url: "https://mpago.la/2hg5Roj" },
            { cantidad: "2 entradas", url: "https://mpago.la/16FGGuD" },
          ],
        },
        {
          fecha: "31 OCT",
          etiqueta: "Función",
          entradas: [
            { cantidad: "1 entrada", url: "https://mpago.la/2KnJzH1" },
            { cantidad: "2 entradas", url: "https://mpago.la/2VKUn5Y" },
          ],
        },
      ],
    },
  ],
};

const accentMap: Record<string, { text: string; line: string; button: string }> = {
  red: { text: "text-theater-red", line: "bg-theater-red", button: "hover:border-theater-red" },
  teal: { text: "text-theater-teal", line: "bg-theater-teal", button: "hover:border-theater-teal" },
  orange: { text: "text-theater-orange", line: "bg-theater-orange", button: "hover:border-theater-orange" },
};

function getYoutubeEmbedUrl(url: string) {
  if (!url) return "";
  const playlistMatch = url.match(/[?&]list=([^&]+)/);
  if (playlistMatch) return `https://www.youtube.com/embed/videoseries?list=${playlistMatch[1]}`;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^?&/]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function Obras() {
  const [galeriaIndex, setGaleriaIndex] = useState(0);
  const [manualPause, setManualPause] = useState(false);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const [isFocusedGallery, setIsFocusedGallery] = useState(false);
  const galeriaActiva = galeriaProducciones[galeriaIndex];
  const galeriaEnReproduccion = !manualPause && !isHoveringGallery && !isFocusedGallery;

  useEffect(() => {
    if (!galeriaEnReproduccion) return;
    const timer = window.setInterval(() => {
      setGaleriaIndex((current) => (current + 1) % galeriaProducciones.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [galeriaEnReproduccion]);

  const mostrarAnterior = () => {
    setGaleriaIndex((current) => (current - 1 + galeriaProducciones.length) % galeriaProducciones.length);
  };

  const mostrarSiguiente = () => {
    setGaleriaIndex((current) => (current + 1) % galeriaProducciones.length);
  };

  return (
    <section
      id="obras"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden spotlight-gradient"
    >
      <div className="container">
        <div className="mb-16 relative">
          <span className="act-number text-theater-red left-0">III</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-red text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Archivo y presente
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" data-stagger="1">
                Obras <br />
                <span className="text-theater-red">para volver a ver</span>
              </h2>
              <p className="reveal font-body text-white/65 text-base md:text-lg max-w-md" data-stagger="2">
                Ocho producciones que forman parte de nuestra historia. Cada tarjeta queda lista
                para sumar el enlace al registro audiovisual en YouTube.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {obras.map((obra, index) => {
            const accent = accentMap[obra.accent];
            const embedUrl = getYoutubeEmbedUrl(obra.youtubeUrl);
            return (
              <article
                key={obra.titulo}
                className={`reveal group border border-white/10 bg-theater-dark overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 ${accent.button}`}
                data-stagger={index % 4}
              >
                <div className="aspect-video bg-black/60 relative overflow-hidden">
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={`Video de ${obra.titulo}`}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-b border-white/10 text-center px-4">
                      <PlayCircle className={`h-9 w-9 ${accent.text}`} aria-hidden="true" />
                      <p className="font-display text-white/60 text-xs uppercase tracking-[0.18em]">
                        Material audiovisual próximamente
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className={`h-1 w-10 ${accent.line} mb-4`} aria-hidden="true" />
                  <p className={`font-display text-xs uppercase tracking-[0.18em] mb-2 ${accent.text}`}>
                    Obra de archivo
                  </p>
                  <h3 className="font-display font-bold text-xl uppercase leading-tight mb-3">
                    {obra.titulo}
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-5">
                    {obra.subtexto}
                  </p>
                  {obra.youtubeUrl ? (
                    <a
                      href={obra.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors"
                    >
                      Ver en YouTube <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="font-display text-xs uppercase tracking-wider text-white/35">
                      Enlace pendiente
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="reveal mt-20"
          data-stagger="4"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Galería fotográfica de producciones"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") mostrarAnterior();
            if (event.key === "ArrowRight") mostrarSiguiente();
          }}
          onMouseEnter={() => setIsHoveringGallery(true)}
          onMouseLeave={() => setIsHoveringGallery(false)}
          onFocus={() => setIsFocusedGallery(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) setIsFocusedGallery(false);
          }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="font-display text-theater-orange text-sm uppercase tracking-[0.3em] mb-3">
                Archivo visual
              </p>
              <h3 className="font-display font-bold text-3xl md:text-4xl uppercase leading-none">
                Nuestras <span className="text-theater-orange">producciones</span>
              </h3>
            </div>
            <p className="font-body text-white/60 text-sm md:text-base max-w-md">
              Una memoria en imágenes que se amplía con cada obra, cada elenco y cada función.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.45fr_0.55fr] gap-4 md:gap-6 bg-theater-dark border border-white/10 p-3 md:p-4">
            <div className="relative aspect-[5/4] overflow-hidden bg-black">
              <img
                src={galeriaActiva.image}
                alt={galeriaActiva.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <span className="font-display text-theater-orange text-xs uppercase tracking-[0.2em]">
                    {galeriaActiva.numero} · {galeriaActiva.etiqueta}
                  </span>
                  <p className="font-display font-bold text-xl md:text-2xl uppercase mt-1">
                    {galeriaActiva.titulo}
                  </p>
                </div>
                <span className="hidden sm:block font-display text-white/60 text-xs uppercase tracking-wider">
                  {galeriaIndex + 1} / {galeriaProducciones.length}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-3 md:p-5">
              <div>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-6">
                  {galeriaActiva.descripcion}
                </p>
                <p className="font-body text-white/40 text-xs uppercase tracking-wider">
                  Las imágenes y títulos pueden ampliarse desde el archivo de producciones.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <button
                    type="button"
                    onClick={mostrarAnterior}
                    className="h-10 w-10 border border-white/20 flex items-center justify-center text-white/75 hover:text-white hover:border-theater-orange transition-colors"
                    aria-label="Producción anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={mostrarSiguiente}
                    className="h-10 w-10 border border-white/20 flex items-center justify-center text-white/75 hover:text-white hover:border-theater-orange transition-colors"
                    aria-label="Producción siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setManualPause((paused) => !paused)}
                    className="ml-auto inline-flex items-center gap-2 border border-white/20 px-3 h-10 font-display text-[10px] uppercase tracking-wider text-white/70 hover:text-white hover:border-theater-orange transition-colors"
                    aria-label={manualPause ? "Reanudar carrusel" : "Pausar carrusel"}
                    aria-pressed={manualPause}
                  >
                    {manualPause ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                    {manualPause ? "Reanudar" : "Pausar"}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2" aria-label="Seleccionar producción">
                  {galeriaProducciones.map((produccion, index) => (
                    <button
                      key={produccion.numero}
                      type="button"
                      onClick={() => setGaleriaIndex(index)}
                      className={`h-1.5 transition-all duration-200 ${index === galeriaIndex ? "w-10 bg-theater-orange" : "w-5 bg-white/25 hover:bg-white/60"}`}
                      aria-label={`Ver ${produccion.titulo}`}
                      aria-current={index === galeriaIndex ? "true" : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="proyecto" className="reveal mt-20 relative bg-gradient-to-r from-theater-teal/25 via-theater-dark to-theater-orange/15 border border-white/10 p-8 md:p-12 overflow-hidden" data-stagger="5">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="font-display text-theater-orange text-sm uppercase tracking-[0.3em] mb-4">
                Proyecto del año {proyecto.año}
              </p>
              <h3 className="font-display font-bold text-4xl md:text-5xl uppercase leading-none mb-4">
                {proyecto.titulo}
              </h3>
              <p className="font-serif-theater italic text-theater-orange text-xl md:text-2xl mb-6">
                {proyecto.subtitulo}
              </p>
              <p className="font-body text-white/70 leading-relaxed mb-7 max-w-2xl whitespace-pre-line">
                {proyecto.descripcion}
              </p>
              <a
                href="#convocatoria"
                className="inline-flex items-center gap-2 bg-theater-orange text-theater-black px-6 py-3 font-display font-medium uppercase tracking-wider text-sm btn-elevate"
              >
                Sumarse al proceso <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3">
              {proyecto.materiales.map((material) => (
                <div key={material.numero} className="bg-black/20 border border-white/10 p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-theater-teal flex items-center justify-center font-display font-bold text-white shrink-0">
                      {material.numero}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-sm uppercase tracking-wider">{material.titulo}</p>
                      <p className="font-body font-black text-white/80 text-xs leading-relaxed whitespace-pre-line">{material.descripcion}</p>
                    </div>
                  </div>
                  {material.funciones.length > 0 && (
                    <div className="mt-4 ml-14 space-y-2" aria-label="Fechas de funciones y entradas">
                      {material.funciones.map((funcion) => (
                        <div key={funcion.fecha} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-white/10 pt-2">
                          <span className="font-display text-xs uppercase tracking-wider text-theater-orange">
                            {funcion.etiqueta} · {funcion.fecha}
                          </span>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {funcion.entradas.map((entrada) => (
                              <a
                                key={entrada.url}
                                href={entrada.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider text-white hover:text-theater-orange transition-colors"
                              >
                                {entrada.cantidad} <ExternalLink className="h-3 w-3" />
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border border-dashed border-theater-orange/40 bg-theater-orange/5 p-4 mt-5">
                <p className="font-display text-theater-orange text-xs uppercase tracking-[0.2em] mb-2">Ticketera de la compañía</p>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  Este espacio queda preparado para integrar una ticketera online en futuras producciones. Cuando estén disponibles los enlaces de venta, cada función podrá dirigir directamente a su plataforma de entradas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
