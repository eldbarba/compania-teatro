import { Calendar, Clock, Users } from "lucide-react";

const obras = [
  {
    image: "/manus-storage/obra-1_4a67bc4f.jpg",
    title: "La Tempestad Juvenil",
    genre: "Drama clásico",
    description:
      "Una relectura contemporánea de Shakespeare desde la mirada juvenil. Naufragio, reconciliación y el descubrimiento de la propia voz en un mundo que se desmorona.",
    director: "Elena Martínez",
    duration: "85 min",
    cast: "12 actores",
    status: "En cartel",
    accent: "red",
  },
  {
    image: "/manus-storage/obra-2_a1079d1a.jpg",
    title: "Voces del Silencio",
    genre: "Teatro documental",
    description:
      "Basada en testimonios reales de jóvenes. Una obra sobre las voces que no se escuchan, las historias que no se cuentan y el coraje de alzar la propia voz.",
    director: "Marcos Silva",
    duration: "70 min",
    cast: "8 actores",
    status: "En cartel",
    accent: "teal",
  },
  {
    image: "/manus-storage/obra-3_d282c911.jpg",
    title: "El Enredo",
    genre: "Comedia",
    description:
      "Una comedia del enredo adaptada al lenguaje juvenil contemporáneo. Equivocaciones, identidades cambiadas y mucho humor en una obra que celebra la alegría de estar vivo.",
    director: "Elena Martínez",
    duration: "75 min",
    cast: "10 actores",
    status: "Estreno Mayo",
    accent: "orange",
  },
  {
    image: "/manus-storage/obra-4_abc4c1dc.jpg",
    title: "Cuerpos en Escena",
    genre: "Teatro físico",
    description:
      "Una pieza de creación colectiva que explora el cuerpo como instrumento narrativo. Movimiento, voz y espacio se conjugan en una experiencia teatral única.",
    director: "Colectivo",
    duration: "60 min",
    cast: "6 actores",
    status: "Estreno Agosto",
    accent: "red",
  },
];

const accentColors: Record<string, string> = {
  red: "text-theater-red",
  teal: "text-theater-teal",
  orange: "text-theater-orange",
};

const accentBg: Record<string, string> = {
  red: "bg-theater-red",
  teal: "bg-theater-teal",
  orange: "bg-theater-orange",
};

export default function Obras() {
  return (
    <section
      id="obras"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden spotlight-gradient"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-red left-0">III</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-red text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto III
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" data-stagger="1">
                Obras en <br />
                <span className="text-theater-red">producción</span>
              </h2>
              <p className="reveal font-body text-white/60 text-base md:text-lg max-w-md" data-stagger="2">
                Las producciones de nuestra temporada 2026, creadas y protagonizadas
                por los jóvenes de la compañía.
              </p>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {obras.map((obra, index) => (
            <article
              key={obra.title}
              className="reveal group relative bg-theater-dark border border-white/10 overflow-hidden rounded-sm hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
              data-stagger={index}
            >
              {/* Image */}
              <div className="img-zoom relative aspect-[3/4] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={obra.image}
                  alt={obra.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theater-black via-theater-black/20 to-transparent" />
                {/* Status badge */}
                <span
                  className={`absolute top-4 right-4 ${accentBg[obra.accent]} text-white text-xs font-display font-medium uppercase tracking-wider px-3 py-1.5 rounded-sm`}
                >
                  {obra.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className={`font-body text-xs uppercase tracking-widest ${accentColors[obra.accent]} mb-2`}>
                  {obra.genre}
                </p>
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase mb-4 group-hover:text-theater-red transition-colors duration-300">
                  {obra.title}
                </h3>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-6">
                  {obra.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-white/50 text-xs font-body">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {obra.cast}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {obra.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    Dir. {obra.director}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Proyecto del año */}
        <div id="proyecto" className="reveal mt-20 relative bg-gradient-to-r from-theater-teal/20 via-theater-dark to-theater-orange/10 border border-white/10 p-8 md:p-12 rounded-sm overflow-hidden" data-stagger="4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-display text-theater-orange text-sm uppercase tracking-[0.3em] mb-4">
                Proyecto del Año 2026
              </p>
              <h3 className="font-display font-bold text-3xl md:text-4xl uppercase mb-4">
                "El Canto de la Tierra"
              </h3>
              <p className="font-body text-white/70 leading-relaxed mb-6">
                Nuestro proyecto anual integra a toda la compañía en una creación colectiva
                sobre la relación entre los jóvenes y el medio ambiente. Una obra que combina
                teatro físico, música original y videoarte, con la participación de más de
                40 jóvenes en escena y detrás de escena.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-theater-orange text-theater-black px-6 py-3 font-display font-medium uppercase tracking-wider text-sm btn-elevate"
              >
                Quiero participar
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm">
                <div className="h-10 w-10 bg-theater-teal flex items-center justify-center font-display font-bold text-white">01</div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider">Investigación</p>
                  <p className="font-body text-white/50 text-xs">Marzo — Abril</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm">
                <div className="h-10 w-10 bg-theater-orange flex items-center justify-center font-display font-bold text-theater-black">02</div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider">Creación y ensayos</p>
                  <p className="font-body text-white/50 text-xs">Mayo — Septiembre</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm">
                <div className="h-10 w-10 bg-theater-red flex items-center justify-center font-display font-bold text-white">03</div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider">Estreno y temporada</p>
                  <p className="font-body text-white/50 text-xs">Octubre — Diciembre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
