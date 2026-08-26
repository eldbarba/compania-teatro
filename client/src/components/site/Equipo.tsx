import { useState } from "react";
import { X } from "lucide-react";

/**
 * Dirección visual de este componente: retratos editoriales en blanco y negro,
 * acentos teatrales rojo/azul petróleo/naranja y una composición clara sobre
 * fondo blanco. Mantener jerarquía tipográfica, contraste y lightbox accesible.
 */

const equipo = [
  {
    image: "/manus-storage/aleweb_4dc1b35e.png",
    name: "Alejandro Sardu Hevia",
    role: "Director y maestro de actuación",
    bio: "Director de la compañía y maestro de actuación.",
    accent: "red",
  },
  {
    image: "/manus-storage/aniweb_a6664ec3.jpg",
    name: "Ana Farias Alves",
    role: "Asistente de dirección y maestra del movimiento",
    bio: "Asistente de dirección y maestra del movimiento.",
    accent: "teal",
  },
  {
    image: "/manus-storage/sebaweb_0bb946e4.jpg",
    name: "Sebastián Caiafa",
    role: "Maestro de escenografía",
    bio: "Maestro de escenografía.",
    accent: "orange",
  },
  {
    image: "/manus-storage/beluweb_e46542fb.jpg",
    name: "Belén Pérez",
    role: "Maestra de vestuario",
    bio: "Maestra de vestuario.",
    accent: "red",
  },
  {
    image: "/manus-storage/sofiweb_57bafcb4.jpg",
    name: "Sofía Farias Alves",
    role: "Maestra de la voz",
    bio: "Maestra de la voz.",
    accent: "teal",
  },
];

const accentMap: Record<string, string> = {
  red: "text-theater-red",
  teal: "text-theater-teal",
  orange: "text-theater-orange",
};

export default function Equipo() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="equipo"
      className="relative bg-theater-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-red left-0">VII</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-red text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto VII
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-theater-black leading-tight" data-stagger="1">
              Nuestro <span className="text-theater-red">equipo</span>
            </h2>
            <p className="reveal font-body text-gray-600 text-base md:text-lg max-w-2xl mt-6" data-stagger="2">
              Profesionales que acompañan cada proceso de creación, formación y
              montaje de En Mangas de Camisa.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {equipo.map((member, index) => (
            <button
              key={member.name}
              type="button"
              className="reveal cursor-pointer group text-left w-full"
              data-stagger={index}
              onClick={() => setSelected(index)}
              aria-label={`Ver perfil de ${member.name}`}
            >
              <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm bg-theater-black">
                <img
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theater-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className={`font-body text-[10px] uppercase tracking-widest leading-tight ${accentMap[member.accent]} mb-2`}>
                    {member.role}
                  </p>
                  <h3 className="font-display font-bold text-lg uppercase text-white leading-tight">
                    {member.name}
                  </h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-theater-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-display text-white text-sm uppercase tracking-wider border border-white/40 px-4 py-2">
                    Ver perfil
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] bg-theater-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="presentation"
          style={{ animation: "fadeIn 0.25s ease-out" }}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            onClick={() => setSelected(null)}
            aria-label="Cerrar perfil"
            type="button"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-3xl w-full grid md:grid-cols-2 gap-0 bg-theater-dark border border-white/10 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Perfil de ${equipo[selected].name}`}
            style={{ animation: "lightboxIn 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            <div className="aspect-[3/4] md:aspect-auto overflow-hidden">
              <img
                src={equipo[selected].image}
                alt={`Retrato de ${equipo[selected].name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className={`font-body text-xs uppercase tracking-widest ${accentMap[equipo[selected].accent]} mb-3`}>
                {equipo[selected].role}
              </p>
              <h3 className="font-display font-bold text-3xl md:text-4xl uppercase text-white mb-6">
                {equipo[selected].name}
              </h3>
              <p className="font-body text-white/70 leading-relaxed">
                {equipo[selected].bio}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
