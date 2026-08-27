import { useEffect, useState } from "react";
import { X } from "lucide-react";

/**
 * Dirección visual de este componente: retratos editoriales teatrales con
 * fondo de escenario, iluminación teatral variable —ámbar, azul petróleo y rojo— y sombras de personaje sobre una base
 * negra. Mantener una presentación expresiva, reconocible y accesible para el
 * elenco joven, con nombres reales y sin inventar roles individuales.
 */

const actores = [
  {
    image: "/manus-storage/elenco-candela-teatral_62056dcf.png",
    name: "Candela Naiman",
    accent: "red",
  },
  {
    image: "/manus-storage/elenco-luciana-teatral_2d65f3d8.png",
    name: "Luciana Bezutti",
    accent: "teal",
  },
  {
    image: "/manus-storage/elenco-thiago-teatral_f18db936.png",
    name: "Thiago Drianó",
    accent: "orange",
  },
  {
    image: "/manus-storage/elenco-agustin-teatral_95040be8.png",
    name: "Agustín Cruz",
    accent: "red",
  },
  {
    image: "/manus-storage/elenco-priscila-teatral_7d90917d.png",
    name: "Priscila Rojas",
    accent: "teal",
  },
  {
    image: "/manus-storage/elenco-bautista-teatral_049e0402.png",
    name: "Bautista Fassolatto",
    accent: "orange",
  },
  {
    image: "/manus-storage/elenco-milagros-teatral_cb88af89.png",
    name: "Milagros Ercoli",
    accent: "red",
  },
  {
    image: "/manus-storage/elenco-felipe-teatral_5a0e1cbf.png",
    name: "Felipe Ojeda",
    accent: "teal",
  },
];

const accentMap: Record<string, string> = {
  red: "text-theater-red",
  teal: "text-theater-teal",
  orange: "text-theater-orange",
};

export default function Actores() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <section
      id="actores"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden spotlight-gradient"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-orange left-0">VIII</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-orange text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto VIII
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" data-stagger="1">
                Nuestro <br />
                <span className="text-theater-orange">elenco</span>
              </h2>
              <p className="reveal font-body text-white/60 text-base md:text-lg max-w-md" data-stagger="2">
                Las jóvenes voces que dan vida hoy a nuestro proyecto. Una compañía en
                movimiento, con compromiso y pasión sobre el escenario.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {actores.map((actor, index) => (
            <button
              key={actor.name}
              type="button"
              className="reveal cursor-pointer group text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theater-orange focus-visible:ring-offset-2 focus-visible:ring-offset-theater-black"
              data-stagger={index}
              onClick={() => setSelected(index)}
              aria-label={`Ver retrato de ${actor.name}`}
            >
              <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm bg-theater-dark">
                <img
                  src={actor.image}
                  alt={`Retrato editorial de ${actor.name}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theater-black via-theater-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                  <p className={`font-body text-[10px] md:text-xs uppercase tracking-widest leading-tight ${accentMap[actor.accent]} mb-1.5`}>
                    Elenco actual
                  </p>
                  <h3 className="font-display font-bold text-sm md:text-lg uppercase text-white leading-tight">
                    {actor.name}
                  </h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-theater-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-display text-white text-xs md:text-sm uppercase tracking-wider border border-white/40 px-3 py-2 md:px-4">
                    Ver retrato
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
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theater-orange"
            onClick={() => setSelected(null)}
            aria-label="Cerrar retrato"
            type="button"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-4xl w-full grid md:grid-cols-2 gap-0 bg-theater-dark border border-white/10 rounded-sm overflow-hidden max-h-[calc(100vh-2rem)]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Retrato de ${actores[selected].name}`}
            style={{ animation: "lightboxIn 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            <div className="aspect-[3/4] md:aspect-auto overflow-hidden min-h-0">
              <img
                src={actores[selected].image}
                alt={`Retrato editorial de ${actores[selected].name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <p className={`font-body text-xs uppercase tracking-widest ${accentMap[actores[selected].accent]} mb-3`}>
                Elenco actual · Temporada 2026
              </p>
              <h3 className="font-display font-bold text-2xl md:text-4xl uppercase text-white mb-5">
                {actores[selected].name}
              </h3>
              <p className="font-body text-white/70 leading-relaxed">
                Parte del elenco actual de En Mangas de Camisa.
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
