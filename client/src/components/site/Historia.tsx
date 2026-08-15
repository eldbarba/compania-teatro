// Dirección visual: línea de tiempo editorial, sin imágenes ni video; cada obra se suma editando el arreglo timeline.
// Paleta: negro como escenario, rojo/azul petróleo/naranja para marcar hitos y blanco para lectura.

const timeline = [
  {
    año: "2014",
    titulo: "Prehistoria",
    subtexto: "Se convoca al director y se forma un equipo para la puesta en escena de Don Bosco el musical al año siguiente.",
    color: "gray",
  },
  {
    año: "2015",
    titulo: "DON BOSCO, El musical",
    subtexto: "Se estrena el 10 de agosto esta obra musical celebrando los 200 años del nacimiento de Don Bosco.",
    color: "red",
  },
  {
    año: "2016",
    titulo: "LOS QUE AMAN NO MUEREN JAMÁS",
    subtexto: "Versión libre de Lo que me costó el amor de Laura, de Alejandro Dolina, con orquesta en vivo.",
    color: "teal",
  },
  {
    año: "2017",
    titulo: "ROBIN HOOD",
    subtexto: "Versión de Mauricio Kartún, con composición propia de canciones y banda en vivo.",
    color: "orange",
  },
  {
    año: "2018",
    titulo: "REPOSICIÓN ROBIN HOOD — CREACIÓN COLECTIVA",
    subtexto: "Se repone Robin Hood mientras comienza un proceso de creación colectiva sobre la obra de Charly García.",
    color: "red",
  },
  {
    año: "2019",
    titulo: "HABLANDO A TU CORAZÓN",
    subtexto: "Creación colectiva a partir de la obra de Charly García.",
    color: "teal",
  },
  {
    año: "2020–2021",
    titulo: "PANDEMIA",
    subtexto: "El grupo sigue en contacto intentando algunas actividades a distancia.",
    color: "orange",
  },
  {
    año: "2022",
    titulo: "MUCHO RUIDO Y POCAS NUECES",
    subtexto: "El clásico de Shakespeare en la versión de M. I. Falconi.",
    color: "red",
  },
  {
    año: "2023",
    titulo: "SUEÑO",
    subtexto: "Versión de Sueño de una noche de verano por M. I. Falconi. Comienzan los talleres de formación en oficios teatrales.",
    color: "teal",
  },
  {
    año: "2025",
    titulo: "RAPUNZEL — MENOS MAL QUE VINE",
    subtexto: "Junto al proyecto musical del año, se crea el espectáculo MMQV para celebrar los 10 años del primer estreno de la compañía.",
    color: "orange",
  },
  {
    año: "2026",
    titulo: "ALICIA MARAVILLA",
    subtexto: "Alicia adolescente en el oeste bonaerense.",
    color: "red",
  },
];

const accentMap: Record<string, { dot: string; title: string }> = {
  gray: { dot: "bg-white/50", title: "text-white/80" },
  red: { dot: "bg-theater-red", title: "text-theater-red" },
  teal: { dot: "bg-theater-teal", title: "text-theater-teal" },
  orange: { dot: "bg-theater-orange", title: "text-theater-orange" },
};

export default function Historia() {
  return (
    <section
      id="historia"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container">
        <div className="mb-14 md:mb-16 relative">
          <span className="act-number text-theater-orange left-0">II</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-orange text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Desde 2014
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" data-stagger="1">
              Nuestra <span className="text-theater-orange">Historia</span>
            </h2>
            <p className="reveal font-body text-white/65 text-base md:text-lg max-w-2xl mt-6" data-stagger="2">
              Una línea de tiempo breve para recorrer las obras y los momentos que
              construyeron la compañía. La historia continúa y puede seguir creciendo.
            </p>
          </div>
        </div>

        <div className="reveal relative overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0" data-stagger="3">
          <div className="relative min-w-max md:min-w-0">
            <div className="absolute left-5 right-5 top-7 h-px bg-gradient-to-r from-white/20 via-theater-red to-theater-teal" aria-hidden="true" />
            <ol className="relative flex md:grid md:grid-cols-6 xl:grid-cols-12 gap-0">
              {timeline.map((item) => {
                const accent = accentMap[item.color];
                return (
                  <li key={`${item.año}-${item.titulo}`} className="relative w-[160px] md:w-auto px-3 first:pl-0 last:pr-0">
                    <div className="relative z-10 h-14 flex items-start">
                      <span className={`mt-5 h-4 w-4 shrink-0 rounded-full border-4 border-theater-black ${accent.dot}`} aria-hidden="true" />
                    </div>
                    <div className="pr-4 md:pr-5">
                      <p className="font-display text-white/55 text-sm tracking-[0.2em] mb-2">{item.año}</p>
                      <h3 className={`font-display font-bold text-base md:text-lg uppercase leading-tight mb-3 ${accent.title}`}>
                        {item.titulo}
                      </h3>
                      <p className="font-body text-white/55 text-xs md:text-sm leading-relaxed">
                        {item.subtexto}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="reveal mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4" data-stagger="4">
          <p className="font-body text-white/55 text-sm">
            La línea de tiempo queda preparada para sumar las próximas obras.
          </p>
          <p className="font-display text-theater-orange text-xs uppercase tracking-[0.2em]">
            Última actualización · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
