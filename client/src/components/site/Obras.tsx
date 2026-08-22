// Dirección visual: archivo audiovisual en tarjetas oscuras y proyecto anual como pieza destacada.
// Para cargar material, completar youtubeUrl en cada obra; para actualizar el proyecto, editar el objeto proyecto.

import { ArrowRight, ExternalLink, PlayCircle } from "lucide-react";

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
    youtubeUrl: "",
    accent: "teal",
  },
  {
    titulo: "Robin Hood",
    subtexto: "Justicia, aventura y transformación desde la mirada joven.",
    youtubeUrl: "",
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
    youtubeUrl: "",
    accent: "red",
  },
  {
    titulo: "Rapunzel",
    subtexto: "El comienzo de un camino compartido.",
    youtubeUrl: "",
    accent: "teal",
  },
];

const proyecto = {
  año: "2026",
  titulo: "Alicia Maravilla",
  subtitulo: "Una Alicia adolescente en el conurbano bonaerense",
  descripcion:
    "La producción de este año nace de una pregunta: ¿qué pasa cuando una adolescente atraviesa su propio territorio de maravillas, contradicciones y descubrimientos? El proceso reúne actuación, diseño, ensayos, difusión y todas las tareas que hacen posible una obra.",
  materiales: [
    { numero: "01", titulo: "Ensayos", descripcion: "Fragmentos del proceso de creación." },
    { numero: "02", titulo: "Difusión", descripcion: "Noticias, afiches y convocatorias." },
    { numero: "03", titulo: "Funciones", descripcion: "Información de la temporada." },
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

        <div id="proyecto" className="reveal mt-20 relative bg-gradient-to-r from-theater-teal/25 via-theater-dark to-theater-orange/15 border border-white/10 p-8 md:p-12 overflow-hidden" data-stagger="4">
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
              <p className="font-body text-white/70 leading-relaxed mb-7 max-w-2xl">
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
                <div key={material.numero} className="flex items-center gap-4 bg-black/20 border border-white/10 p-4">
                  <div className="h-10 w-10 bg-theater-teal flex items-center justify-center font-display font-bold text-white">
                    {material.numero}
                  </div>
                  <div>
                    <p className="font-display text-sm uppercase tracking-wider">{material.titulo}</p>
                    <p className="font-body text-white/55 text-xs">{material.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
