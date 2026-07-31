import { Calendar } from "lucide-react";

// Timeline data - fácil de actualizar
const timeline = [
  {
    año: "2014",
    titulo: "Prehistoria",
    descripcion: "Primeros pasos. Nace la idea de crear un espacio de teatro para jóvenes.",
    color: "gray",
  },
  {
    año: "2015",
    titulo: "Estreno de En Mangas de Camisa",
    descripcion: "Primera obra. Comienza oficialmente la compañía-escuela juvenil de teatro.",
    color: "red",
  },
  {
    año: "2016",
    titulo: "Rapunzel",
    descripcion: "Segunda producción. Consolidamos el modelo de aprendizaje cooperativo.",
    color: "teal",
  },
  {
    año: "2017",
    titulo: "La Casa del Revés",
    descripcion: "Expandimos nuestro repertorio y la comunidad crece.",
    color: "orange",
  },
  {
    año: "2018",
    titulo: "Sueño",
    descripcion: "Experimentamos con nuevas formas de narración teatral.",
    color: "red",
  },
  {
    año: "2019",
    titulo: "Mucho Ruido y Pocas Nueces",
    descripcion: "Adaptamos clásicos de la literatura universal.",
    color: "teal",
  },
  {
    año: "2020",
    titulo: "Hablando a tu Corazón",
    descripcion: "Continuamos a pesar de los desafíos del contexto.",
    color: "orange",
  },
  {
    año: "2021",
    titulo: "Robin Hood",
    descripcion: "Historias de justicia y transformación social.",
    color: "red",
  },
  {
    año: "2022",
    titulo: "Los que Aman no Mueren Jamás",
    descripcion: "Profundizamos en emociones y vínculos humanos.",
    color: "teal",
  },
  {
    año: "2023",
    titulo: "Don Bosco El Musical",
    descripcion: "Celebramos nuestras raíces en Salesianos Don Bosco.",
    color: "orange",
  },
  {
    año: "2025",
    titulo: "Espectáculo por los 10 años",
    descripcion: "Celebramos una década de la primera obra con un evento especial.",
    color: "red",
  },
  {
    año: "2026",
    titulo: "Alicia Maravilla",
    descripcion: "Producción actual. Alicia adolescente en el conurbano bonaerense.",
    color: "teal",
  },
];

const colorMap: Record<string, { dot: string; line: string; bg: string }> = {
  red: { dot: "bg-theater-red", line: "from-theater-red", bg: "bg-theater-red/10" },
  teal: { dot: "bg-theater-teal", line: "from-theater-teal", bg: "bg-theater-teal/10" },
  orange: { dot: "bg-theater-orange", line: "from-theater-orange", bg: "bg-theater-orange/10" },
  gray: { dot: "bg-gray-400", line: "from-gray-400", bg: "bg-gray-100" },
};

export default function Historia() {
  return (
    <section
      id="historia"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-20 relative">
          <span className="act-number text-theater-orange left-0">II</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-orange text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto II
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" data-stagger="1">
              Nuestra <span className="text-theater-orange">Historia</span>
            </h2>
            <p className="reveal font-body text-white/60 text-base md:text-lg max-w-2xl mt-6" data-stagger="2">
              Doce años de teatro, aprendizaje y transformación. Cada obra, cada joven,
              cada momento que compartimos en escena es parte de esta historia.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-theater-red via-theater-teal to-theater-orange md:transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => {
              const colors = colorMap[item.color];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.año}
                  className="reveal relative md:flex md:items-center"
                  data-stagger={index % 3}
                >
                  {/* Left content (desktop) / Top content (mobile) */}
                  <div
                    className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"}`}
                  >
                    <div className={`${colors.bg} border border-white/10 p-6 md:p-8 rounded-sm`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-white/50" />
                        <span className="font-display font-bold text-lg uppercase tracking-wider">
                          {item.año}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl md:text-2xl uppercase mb-3">
                        {item.titulo}
                      </h3>
                      <p className="font-body text-white/70 text-sm leading-relaxed">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10">
                    <div className={`h-6 w-6 md:h-8 md:w-8 ${colors.dot} rounded-full border-4 border-theater-black`} />
                  </div>

                  {/* Mobile spacer */}
                  <div className="md:hidden h-0" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <div className="reveal mt-20 pt-12 border-t border-white/10 text-center" data-stagger="0">
          <p className="font-body text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
            Esta línea de tiempo se actualiza cada año con nuestras nuevas producciones.
            <br />
            <span className="text-white/40 text-xs mt-2 block">
              Última actualización: 2026
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
