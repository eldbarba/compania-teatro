import { useState } from "react";
import { X } from "lucide-react";

const actores = [
  {
    image: "/manus-storage/actor-1_119d67e0.jpg",
    name: "Tomás Vargas",
    age: 17,
    obras: ["La Tempestad Juvenil", "Voces del Silencio"],
    yearsInCompany: 4,
    accent: "red",
  },
  {
    image: "/manus-storage/actor-2_aa58f0a0.jpg",
    name: "Sofía Lima",
    age: 16,
    obras: ["Voces del Silencio", "El Enredo"],
    yearsInCompany: 3,
    accent: "teal",
  },
  {
    image: "/manus-storage/actor-3_1b5fd895.jpg",
    name: "Mateo Rojas",
    age: 15,
    obras: ["El Enredo"],
    yearsInCompany: 2,
    accent: "orange",
  },
  {
    image: "/manus-storage/actor-4_6c5a853e.jpg",
    name: "Valentina Cruz",
    age: 18,
    obras: ["La Tempestad Juvenil", "Cuerpos en Escena"],
    yearsInCompany: 5,
    accent: "red",
  },
  {
    image: "/manus-storage/actor-5_5ce2b693.jpg",
    name: "Bruno Herrera",
    age: 16,
    obras: ["Cuerpos en Escena", "Voces del Silencio"],
    yearsInCompany: 3,
    accent: "teal",
  },
  {
    image: "/manus-storage/actor-6_8255e707.jpg",
    name: "Camila Soto",
    age: 17,
    obras: ["La Tempestad Juvenil", "El Enredo"],
    yearsInCompany: 4,
    accent: "orange",
  },
];

const accentMap: Record<string, string> = {
  red: "text-theater-red",
  teal: "text-theater-teal",
  orange: "text-theater-orange",
};

export default function Actores() {
  const [selected, setSelected] = useState<number | null>(null);

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
                Nuestros <br />
                <span className="text-theater-orange">actores</span>
              </h2>
              <p className="reveal font-body text-white/60 text-base md:text-lg max-w-md" data-stagger="2">
                Las jóvenes voces que dan vida a nuestras obras. Talento, compromiso
                y pasión sobre el escenario.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {actores.map((actor, index) => (
            <div
              key={actor.name}
              className="reveal cursor-pointer group"
              data-stagger={index}
              onClick={() => setSelected(index)}
            >
              <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={actor.image}
                  alt={actor.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theater-black via-theater-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="font-display font-bold text-sm md:text-base uppercase text-white leading-tight">
                    {actor.name}
                  </h3>
                  <p className={`font-body text-xs ${accentMap[actor.accent]} mt-0.5`}>
                    {actor.age} años · {actor.yearsInCompany} años en la compañía
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] bg-theater-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          style={{ animation: "fadeIn 0.25s ease-out" }}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-2xl w-full grid sm:grid-cols-2 gap-0 bg-theater-dark border border-white/10 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "lightboxIn 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            <div className="aspect-[3/4] sm:aspect-auto overflow-hidden">
              <img
                src={actores[selected].image}
                alt={actores[selected].name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-white mb-2">
                {actores[selected].name}
              </h3>
              <p className={`font-body text-sm ${accentMap[actores[selected].accent]} mb-6`}>
                {actores[selected].age} años · {actores[selected].yearsInCompany} años en la compañía
              </p>
              <div>
                <p className="font-body text-white/50 text-xs uppercase tracking-wider mb-2">
                  Obras participadas
                </p>
                <ul className="space-y-1">
                  {actores[selected].obras.map((obra) => (
                    <li key={obra} className="font-body text-white/80 text-sm flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 ${accentMap[actores[selected].accent].replace('text-', 'bg-')}`} />
                      {obra}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
